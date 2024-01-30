/* eslint-disable */

import Papa from 'papaparse';
import { startOfWeek, endOfWeek, parse, format, isValid } from 'date-fns';

interface DataEntry {
  Date: string;
  Total: string;
}

interface WeeklyTotal {
  weekStart: string;
  weekEnd: string;
  total: number;
}

export async function parseCSVToJson(url: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results.data as any[]);
      },
      error: (error) => {
        console.error('Error parsing CSV file:', error);
        reject(error);
      },
    });
  });
}

export function totalByWeek(data: DataEntry[]): WeeklyTotal[] {
  const weekTotals: Record<string, WeeklyTotal> = {};

  data.forEach((entry) => {
    try {
      const parsedDate = parse(entry.Date, 'M/d/yyyy', new Date());
      if (!isValid(parsedDate)) {
        throw new Error('Invalid date format');
      }

      const weekStart = startOfWeek(parsedDate, { weekStartsOn: 1 });
      const weekEnd = endOfWeek(parsedDate, { weekStartsOn: 1 });
      const weekKey = format(weekEnd, 'yyyy-MM-dd');

      if (!weekTotals[weekKey]) {
        weekTotals[weekKey] = {
          weekStart: format(weekStart, 'yyyy-MM-dd'),
          weekEnd: format(weekEnd, 'yyyy-MM-dd'),
          total: 0,
        };
      }

      weekTotals[weekKey].total += parseInt(entry.Total, 10) || 0;
    } catch (error: unknown) {
      console.error(`Error processing date '${entry.Date}'`);
    }
  });

  console.log(weekTotals);

  return Object.values(weekTotals);
}

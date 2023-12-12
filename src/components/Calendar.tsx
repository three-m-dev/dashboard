import { useEffect, useState } from "react";

const Calendar = () => {
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1,
  );
  const [monthDays, setMonthDays] = useState<Date[]>([]);

  const now = new Date();

  const today = now.getDate();
  const currentMonth = now.getMonth() + 1;

  console.log("currentMonth", currentMonth);

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1);
  };

  const getLastDayOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0);
  };

  const getDaysArrayForMonth = (year: number, month: number) => {
    const daysArray = [];
    const firstDay = getFirstDayOfMonth(year, month);
    const lastDay = getLastDayOfMonth(year, month);
    const currentDate = new Date(firstDay);

    while (currentDate <= lastDay) {
      daysArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const firstDayOfWeek = daysArray[0].getDay();
    for (let i = firstDayOfWeek; i > 0; i--) {
      daysArray.unshift(new Date(year, month, -i + 1));
    }

    while (daysArray.length < 42) {
      daysArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return daysArray;
  };

  const handlePrevMonth = () => {
    if (selectedMonth === 1) {
      setSelectedYear((prevYear) => prevYear - 1);
      setSelectedMonth(12);
    } else {
      setSelectedMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedYear((prevYear) => prevYear + 1);
      setSelectedMonth(1);
    } else {
      setSelectedMonth((prevMonth) => prevMonth + 1);
    }
  };

  useEffect(() => {
    setMonthDays(getDaysArrayForMonth(selectedYear, selectedMonth - 1));
  }, [selectedMonth, selectedYear]);

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex w-full justify-between">
        <button
          onClick={() => {
            setSelectedYear(new Date().getFullYear());
            setSelectedMonth(new Date().getMonth() + 1);
          }}
        >
          <h3 className="text-lg font-bold text-blue-500">
            {new Date(selectedYear, selectedMonth - 1).toLocaleString(
              "default",
              {
                month: "long",
                year: "numeric",
              },
            )}
          </h3>
        </button>
        <div className="flex gap-1">
          <button
            onClick={handlePrevMonth}
            className="text-gray-400 transition-all hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNextMonth}
            className="text-gray-400 transition-all hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 divide-x divide-y divide-gray-100">
        <p>Sunday</p>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
      </div>
      <div className="grid flex-1 grid-cols-7 divide-x divide-y divide-gray-100">
        {monthDays.map((date, index) => {
          return (
            <div
              key={index}
              className={
                `ease flex-grow cursor-pointer overflow-auto border-l border-t border-gray-100 p-1 transition duration-500 hover:bg-gray-200 ` +
                (date.getMonth() === selectedMonth - 1
                  ? "bg-white"
                  : "bg-gray-50")
              }
            >
              <button>
                <div className="mx-auto flex h-full flex-col overflow-hidden p-2">
                  <div className="top h-5 w-full">
                    <span
                      className={`p-2 ${
                        date.getMonth() === selectedMonth - 1
                          ? "text-gray-600"
                          : "text-gray-400"
                      } ${
                        date.getDate() === today &&
                        date.getMonth() === currentMonth
                          ? "bg-red-500"
                          : ""
                      }`}
                    >
                      {date.getDate()}
                    </span>
                  </div>
                  <div className="bottom h-30 w-full flex-grow cursor-pointer py-1"></div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

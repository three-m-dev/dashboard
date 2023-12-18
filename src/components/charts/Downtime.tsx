import Dropdown from "../base/Dropdown";

const Downtime = () => {
  const getDateRangeValue = (rangeType: string): string => {
    const today = new Date();
    const start = new Date();
    let end = new Date();

    switch (rangeType) {
      case "today":
        break;
      case "week":
        start.setDate(today.getDate() - today.getDay());
        end.setDate(start.getDate() + 6);
        break;
      case "month":
        start.setDate(1);
        end = new Date(start.getFullYear(), start.getMonth() + 1, 0);
        break;
      case "quarter":
        const currentQuarter = Math.floor(today.getMonth() / 3);
        start.setMonth(currentQuarter * 3);
        start.setDate(1);
        end = new Date(start.getFullYear(), start.getMonth() + 3, 0);
        break;
      case "year":
        start.setMonth(0, 1);
        end.setMonth(11, 31);
        break;
      case "lastWeek":
        const lastWeek = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 7,
        );
        start.setDate(lastWeek.getDate() - lastWeek.getDay());
        end.setDate(start.getDate() + 6);
        break;
      case "lastMonth":
        start.setMonth(today.getMonth() - 1, 1);
        end = new Date(start.getFullYear(), start.getMonth() + 1, 0);
        break;
      case "lastQuarter":
        const lastQuarter = Math.floor((today.getMonth() - 3) / 3);
        start.setMonth(lastQuarter * 3, 1);
        end = new Date(start.getFullYear(), start.getMonth() + 3, 0);
        break;
      case "lastYear":
        start.setFullYear(today.getFullYear() - 1, 0, 1);
        end.setFullYear(start.getFullYear(), 11, 31);
        break;
      case "all":
        start.setFullYear(2000, 0, 1);
        end.setFullYear(2100, 11, 31);
        break;
    }

    return `${start.toISOString().split("T")[0]} to ${
      end.toISOString().split("T")[0]
    }`;
  };

  const dateFilters = [
    { label: "Today", value: getDateRangeValue("today") },
    { label: "This Week", value: getDateRangeValue("week") },
    { label: "This Month", value: getDateRangeValue("month") },
    { label: "This Quarter", value: getDateRangeValue("quarter") },
    { label: "This Year", value: getDateRangeValue("year") },
    { label: "Last Week", value: getDateRangeValue("lastWeek") },
    { label: "Last Month", value: getDateRangeValue("lastMonth") },
    { label: "Last Quarter", value: getDateRangeValue("lastQuarter") },
    { label: "Last Year", value: getDateRangeValue("lastYear") },
    { label: "All Time", value: getDateRangeValue("all") },
  ];

  const downtimes = [
    {
      reason: "Maintenance",
      duration: "3h",
      percentage: 25,
    },
    {
      reason: "Troubleshooting",
      duration: "2h 30m",
      percentage: 20,
    },
    {
      reason: "Programming",
      duration: "2h 45m",
      percentage: 22.5,
    },
    {
      reason: "Inspection",
      duration: "1h 45m",
      percentage: 15,
    },
    {
      reason: "Break",
      duration: "30m",
      percentage: 2.5,
    },
    {
      reason: "Fixturing",
      duration: "1h 15m",
      percentage: 10,
    },
    {
      reason: "Set Up/Tear Down",
      duration: "1h 30m",
      percentage: 12.5,
    },
    {
      reason: "Training/Meeting",
      duration: "1h 15m",
      percentage: 10,
    },
    {
      reason: "Other",
      duration: "45m",
      percentage: 5,
    },
  ];

  const sortedDowntimes = downtimes.sort((a, b) => b.percentage - a.percentage);

  return (
    <section className="mt-6">
      <div className="mx-auto">
        <div className="rounded bg-white py-4">
          <div className="flex justify-between border-b border-blue-50 px-4 pb-4">
            <h3 className="text-xl font-bold">Unscheduled Downtime</h3>
            <Dropdown options={dateFilters} />
          </div>
          {sortedDowntimes.map((downtime, index) => (
            <div key={index} className="border-b border-blue-50 p-6">
              <div className="-mx-4 flex">
                <div className="flex w-1/2 items-center px-4">
                  <p className="text-sm font-medium">{downtime.reason}</p>
                </div>
                <div className="w-1/2 px-4">
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-medium text-blue-500">
                      {downtime.percentage}%
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                      {downtime.duration}
                    </p>
                  </div>

                  <div className="flex">
                    <div className="relative h-1 w-full rounded-full bg-blue-50">
                      <div
                        style={{ width: `${downtime.percentage}%` }}
                        className="absolute left-0 top-0 h-full rounded-full bg-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downtime;

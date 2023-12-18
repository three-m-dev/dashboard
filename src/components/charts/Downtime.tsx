const Downtime = () => {
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
    <section className="py-6">
      <div className="mx-auto">
        <div className="rounded bg-white py-4">
          <div className="flex justify-between border-b border-blue-50 px-4 pb-4">
            <h3 className="text-xl font-bold">Unscheduled Downtime</h3>
            {/* <p className="text-sm text-gray-500">
              The percentage of downtime per reason
            </p> */}
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

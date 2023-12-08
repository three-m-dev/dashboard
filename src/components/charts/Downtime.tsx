import React from "react";

type Props = {};

const Downtime: React.FC<Props> = () => {
  const downtimes = [
    {
      reason: "Changeover",
      duration: "1h 20m",
      percentage: 20, // Changed to number
    },
    {
      reason: "Maintenance",
      duration: "2h 10m",
      percentage: 40, // Changed to number
    },
    {
      reason: "Breakdown",
      duration: "1h 30m",
      percentage: 30, // Changed to number
    },
    {
      reason: "Other",
      duration: "1h 30m",
      percentage: 10, // Changed to number
    },
  ];

  const sortedDowntimes = downtimes.sort((a, b) => b.percentage - a.percentage);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="rounded bg-white py-4">
          <div className="border-b border-blue-50 px-6 pb-6">
            <h3 className="text-xl font-bold">Downtime</h3>
            <p className="text-sm text-gray-500">
              The percentage of time the machine was not running
            </p>
          </div>
          {sortedDowntimes.map((downtime, index) => (
            <div key={index} className="border-b border-blue-50 p-6">
              <div className="-mx-4 flex">
                <div className="flex w-1/2 items-center px-4">
                  <p className="text-sm font-medium">{downtime.reason}</p>
                </div>
                <div className="w-1/2 px-4">
                  <p className="mb-1 text-xs font-medium text-indigo-500">
                    {downtime.percentage}%
                  </p>
                  <div className="flex">
                    <div className="relative h-1 w-full rounded-full bg-indigo-50">
                      <div
                        style={{ width: `${downtime.percentage}%` }}
                        className="absolute left-0 top-0 h-full rounded-full bg-indigo-500"
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

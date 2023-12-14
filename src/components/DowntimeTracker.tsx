import React, { useState } from "react";

type DowntimeReason = {
  reason: string;
  time: number;
};

const DowntimeTracker: React.FC = () => {
  const [operator, setOperator] = useState("");
  const [date, setDate] = useState("");
  const [reasons, setReasons] = useState<DowntimeReason[]>([]);
  const [newReason, setNewReason] = useState("");
  const [newTime, setNewTime] = useState("");

  const addReason = () => {
    setReasons([
      ...reasons,
      { reason: newReason, time: parseInt(newTime, 10) },
    ]);
    setNewReason("");
    setNewTime("");
  };

  const totalDowntime = reasons.reduce(
    (total, current) => total + current.time,
    0,
  );

  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-md">
      <div className="mb-4">
        <label
          htmlFor="operator"
          className="block text-sm font-medium text-gray-700"
        >
          Operator
        </label>
        <input
          type="text"
          id="operator"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Reasons for Downtime
        </label>
        {reasons.map((reason, index) => (
          <div key={index} className="mt-2 flex items-center">
            <span className="mr-2 text-sm">
              {reason.reason} - {reason.time} mins
            </span>
          </div>
        ))}
        <div className="mt-2 flex">
          <input
            type="text"
            placeholder="Reason"
            className="mr-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            value={newReason}
            onChange={(e) => setNewReason(e.target.value)}
          />
          <input
            type="number"
            placeholder="Time in minutes"
            className="mr-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
          />
          <button
            onClick={addReason}
            className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Add
          </button>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span>Total Downtime: {totalDowntime} minutes</span>
        <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Submit
        </button>
      </div>
    </div>
  );
};

export default DowntimeTracker;

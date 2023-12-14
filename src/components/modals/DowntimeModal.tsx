import React, { useState } from "react";

type DowntimeReason = {
  reason: string;
  time: number;
};

type DowntimeModalProps = {
  toggleDowntimeModal: () => void;
};

const DowntimeModal = ({ toggleDowntimeModal }: DowntimeModalProps) => {
  const [operator, setOperator] = useState("");
  const [date, setDate] = useState("");
  const [reasons, setReasons] = useState<DowntimeReason[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newReason, setNewReason] = useState("");
  const [newTime, setNewTime] = useState("");
  const [notes, setNotes] = useState("");

  const operators = ["Operator 1", "Operator 2", "Operator 3"];
  const reasonOptions = ["Maintenance", "Technical Issue", "Other"];

  const addOrEditReason = () => {
    if (newReason && newTime) {
      const reason = { reason: newReason, time: parseInt(newTime, 10) };
      if (editIndex !== null) {
        const updatedReasons = [...reasons];
        updatedReasons[editIndex] = reason;
        setReasons(updatedReasons);
        setEditIndex(null);
      } else {
        setReasons([...reasons, reason]);
      }
      setNewReason("");
      setNewTime("");
    }
  };

  const editReason = (index: number) => {
    setEditIndex(index);
    setNewReason(reasons[index].reason);
    setNewTime(reasons[index].time.toString());
  };

  const deleteReason = (index: number) => {
    setReasons(reasons.filter((_, idx) => idx !== index));
  };

  const totalDowntime = reasons.reduce(
    (total, current) => total + current.time,
    0,
  );

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="flex items-center justify-between rounded-t border-b p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Downtime Report
          </h3>
          <button
            onClick={() => toggleDowntimeModal()}
            className="rounded-md p-1.5 text-gray-600 hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label
              htmlFor="operator"
              className="block text-sm font-medium text-gray-700"
            >
              Operator
            </label>
            <select
              id="operator"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="">Select Operator</option>
              {operators.map((op, index) => (
                <option key={index} value={op}>
                  {op}
                </option>
              ))}
            </select>
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
              <div
                key={index}
                className="mt-2 flex items-center justify-between"
              >
                <span className="text-sm">
                  {reason.reason} - {reason.time} mins
                </span>
                <div>
                  <button
                    onClick={() => editReason(index)}
                    className="mr-2 rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteReason(index)}
                    className="rounded-md bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-2 flex">
              <select
                className="mr-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={newReason}
                onChange={(e) => setNewReason(e.target.value)}
              >
                <option value="">Select Reason</option>
                {reasonOptions.map((reason, index) => (
                  <option key={index} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Time in minutes"
                className="mr-2 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
              />
              <button
                onClick={addOrEditReason}
                className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                {editIndex !== null ? "Update Reason" : "Add Reason"}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              Notes
            </label>
            <textarea
              id="notes"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span>Total Downtime: {totalDowntime} minutes</span>
            <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DowntimeModal;

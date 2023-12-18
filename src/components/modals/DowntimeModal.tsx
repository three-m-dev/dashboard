import { useState } from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import Button from "../base/Button";
import ModalBase from "../reusable/ModalBase";
import TrashIcon from "../../assets/icons/TrashIcon";

type Props = {
  mode: string;
  onClose: () => void;
  triggerRefresh: () => void;
};

const DowntimeModal = ({ mode, onClose, triggerRefresh }: Props) => {
  const reasonOptions = [
    "Maintenance",
    "Equipment Failure",
    "Material Shortage",
    "Operator Error",
    "Changeover",
    "Safety Stops",
    "Quality Checks",
    "Other",
  ];

  const [downtimeFormData, setDowntimeFormData] = useState({
    date: "",
    operator: "",
    reasons: [] as { reason: string; minutes: number }[],
    totalMinutes: 0,
    notes: "",
  });
  const [currentReason, setCurrentReason] = useState("");
  const [currentMinutes, setCurrentMinutes] = useState(0);

  const handleDowntimeFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setDowntimeFormData({
      ...downtimeFormData,
      [e.target.name]: e.target.value,
    });
  };

  const addReason = () => {
    if (currentReason && currentMinutes > 0) {
      const newReason = { reason: currentReason, minutes: currentMinutes };
      setDowntimeFormData((prevData) => ({
        ...prevData,
        reasons: [...prevData.reasons, newReason],
        totalMinutes: prevData.totalMinutes + currentMinutes,
      }));
      setCurrentReason("");
      setCurrentMinutes(0);
    }
  };

  const deleteReason = (index: number) => {
    const reasonToDelete = downtimeFormData.reasons[index];
    setDowntimeFormData((prevData) => ({
      ...prevData,
      reasons: prevData.reasons.filter((_, idx) => idx !== index),
      totalMinutes: prevData.totalMinutes - reasonToDelete.minutes,
    }));
  };

  const handleDowntimeFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(downtimeFormData);
  };

  return (
    <ModalBase
      title={mode === "view" ? "Downtime date & operator" : "Add Downtime"}
      onClose={onClose}
    >
      {mode === "view" ? (
        <div className="grid grid-cols-12 gap-4"></div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <label className="font-semibold" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              name="date"
              className="h-[40px] w-full rounded border border-gray-300 px-2 py-1"
              onChange={handleDowntimeFormChange}
            />
          </div>
          <div className="col-span-6">
            <label className="font-semibold" htmlFor="operator">
              Operator
            </label>
            <select
              name="operator"
              className="h-[40px] w-full rounded border border-gray-300 px-2 py-1"
              onChange={handleDowntimeFormChange}
            >
              {/* Operator options here */}
              <option value="operator1">Operator 1</option>
              <option value="operator2">Operator 2</option>
              <option value="operator3">Operator 3</option>
            </select>
          </div>
          <div className="col-span-6">
            <label className="font-semibold" htmlFor="reason">
              Reason
            </label>
            <select
              value={currentReason}
              className="h-[40px] w-full rounded border border-gray-300 px-2 py-1"
              onChange={(e) => setCurrentReason(e.target.value)}
            >
              <option value="">Select a reason</option>
              {reasonOptions.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2">
            <label className="font-semibold" htmlFor="minutes">
              Minutes
            </label>
            <input
              type="number"
              name="minutes"
              className="h-[40px] w-full rounded border border-gray-300 px-2 py-1"
              value={currentMinutes}
              onChange={(e) => setCurrentMinutes(Number(e.target.value))}
            />
          </div>
          <div className="col-span-4 flex items-end">
            <Button
              text="Add"
              type="button"
              onClick={addReason}
              theme="primary"
              icon={<PlusIcon />}
              destination={null}
              isLoading={false}
              isDisabled={!currentReason || currentMinutes <= 0}
            />
          </div>
          <div className="col-span-12">
            <ul>
              {downtimeFormData.reasons.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.reason} - {item.minutes} minutes
                  <button
                    onClick={() => deleteReason(index)}
                    className="hover:text-red-500"
                  >
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12">
            <label className="font-semibold" htmlFor="notes">
              Notes
            </label>
            <textarea
              name="notes"
              className="w-full rounded border border-gray-300 px-2 py-1"
              onChange={handleDowntimeFormChange}
              rows={4}
            />
          </div>
          <div className="col-span-12 flex justify-between">
            <p>Total Minutes: {downtimeFormData.totalMinutes}</p>
            <Button
              text="Save"
              type="button"
              onClick={handleDowntimeFormSubmit}
              theme="primary"
              icon={null}
              destination={null}
              isLoading={false}
              isDisabled={false}
            />
          </div>
        </div>
      )}
    </ModalBase>
  );
};

export default DowntimeModal;

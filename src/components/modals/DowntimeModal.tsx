import { useState } from "react";
import { useCreateDowntimeEntry } from "../../hooks/downtime/useCreateDowntime";
import PlusIcon from "../../assets/icons/PlusIcon";
import Button from "../base/Button";
import ModalBase from "../reusable/ModalBase";
import TrashIcon from "../../assets/icons/TrashIcon";
import Dropdown from "../base/Dropdown";

type Props = {
  mode: string;
  onClose: () => void;
  triggerRefresh: () => void;
};

const DowntimeModal = ({ mode, onClose, triggerRefresh }: Props) => {
  const { createDowntimeEntry, loading, error } = useCreateDowntimeEntry();

  const operators = [{ label: "Jacob Reppuhn", value: "12345" }];

  const reasons = [
    { label: "Maintenance", value: "maintenance" },
    { label: "Troubleshooting", value: "troubleshooting" },
  ];

  const [downtimeFormData, setDowntimeFormData] = useState({
    operatorId: "",
    date: "",
    downtime: [] as { reason: string; minutes: number }[],
    notes: "",
  });

  const [currentReason, setCurrentReason] = useState("");
  const [currentMinutes, setCurrentMinutes] = useState(0);

  const addReason = () => {
    if (currentReason && currentMinutes > 0) {
      setDowntimeFormData((prevData) => ({
        ...prevData,
        downtime: [
          ...prevData.downtime,
          { reason: currentReason, minutes: currentMinutes },
        ],
      }));
      setCurrentReason("");
      setCurrentMinutes(0);
    }
  };

  const deleteReason = (index: number) => {
    setDowntimeFormData((prevData) => ({
      ...prevData,
      downtime: prevData.downtime.filter((_, idx) => idx !== index),
    }));
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    let value = e.target.value;

    if (e.target.name === "date" && value) {
      const dateParts = value.split("-");
      value = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    }

    setDowntimeFormData({
      ...downtimeFormData,
      [e.target.name]: value,
    });
  };

  const handleDropdownChange = (name: string, value: string) => {
    setDowntimeFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(downtimeFormData);

    try {
      await createDowntimeEntry(downtimeFormData);
      console.log("Entry created successfully");
      onClose();
      triggerRefresh();
    } catch (err) {
      console.error("Error creating entry:", err);
    }
  };

  return (
    <ModalBase
      title={mode === "view" ? "Downtime date & operator" : "Add Downtime"}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <label className="font-semibold" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="h-[40px] w-full rounded border border-gray-300 px-2 py-1"
            onChange={handleFormChange}
          />
        </div>
        <div className="col-span-6 flex flex-col">
          <label className="font-semibold" htmlFor="operator">
            Operator
          </label>
          <Dropdown
            options={operators}
            onSelect={(option) =>
              handleDropdownChange("operatorId", option.value)
            }
          />
        </div>
        <div className="col-span-6 flex flex-col">
          <label className="font-semibold" htmlFor="reason">
            Reason
          </label>
          <Dropdown
            options={reasons}
            onSelect={(option) => setCurrentReason(option.value)}
          />
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
            {downtimeFormData.downtime.map((item, index) => (
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
            onChange={handleFormChange}
            rows={4}
          />
        </div>
        <div className="col-span-12 flex justify-end">
          <Button
            text="Submit"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
            }}
            theme="primary"
            icon={null}
            destination={null}
            isLoading={loading}
            isDisabled={false}
          />
        </div>
      </form>
    </ModalBase>
  );
};

export default DowntimeModal;

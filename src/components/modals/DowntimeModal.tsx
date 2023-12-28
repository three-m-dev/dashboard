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

  const operators = [
    { label: "Jacob Reppuhn", value: "4f16d561-29de-44d9-a2bd-3771ef173a13" },
  ];

  const reasons = [
    { label: "Tooling", value: "tooling" },
    { label: "Maintenance", value: "maintenance" },
    { label: "Troubleshooting", value: "troubleshooting" },
    { label: "Programming", value: "programming" },
    { label: "Inspection", value: "inspection" },
    { label: "Break", value: "break" },
    { label: "Fixturing", value: "fixturing" },
    { label: "Changeover", value: "changeover" },
    { label: "Training", value: "training" },
    { label: "Other", value: "other" },
  ];

  const [downtimeFormData, setDowntimeFormData] = useState({
    operatorId: "",
    date: "",
    downtime: [] as { [key: string]: number }[],
    notes: "",
  });

  const [currentReason, setCurrentReason] = useState("");
  const [currentMinutes, setCurrentMinutes] = useState(0);

  const addReason = () => {
    if (currentReason && currentMinutes > 0) {
      setDowntimeFormData((prevData) => ({
        ...prevData,
        downtime: [...prevData.downtime, { [currentReason]: currentMinutes }],
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
      value = `${dateParts[1]}-${dateParts[2]}-${dateParts[0]}`;
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

    try {
      await createDowntimeEntry(downtimeFormData);
      console.log(downtimeFormData);
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
            id="operator"
            text="Select Operator"
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
            id="reason"
            text="Select Reason"
            options={reasons}
            onSelect={(option) => setCurrentReason(option.value)}
          />
        </div>
        <div className="col-span-2">
          <label className="font-semibold" htmlFor="minutes">
            Minutes
          </label>
          <input
            type="text"
            name="minutes"
            pattern="\d*"
            className="h-[40px] w-full rounded border border-gray-300 px-2 py-1"
            value={currentMinutes}
            onChange={(e) => {
              if (e.target.value === "" || /^\d+$/.test(e.target.value)) {
                setCurrentMinutes(Number(e.target.value));
              }
            }}
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
            {downtimeFormData.downtime.map((downtime, index) => {
              const [reason, minutes] = Object.entries(downtime)[0];
              return (
                <li key={index} className="flex items-center">
                  <span className="capitalize">{reason}</span>: {minutes}{" "}
                  minutes
                  <button
                    type="button"
                    onClick={() => deleteReason(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon />
                  </button>
                </li>
              );
            })}
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

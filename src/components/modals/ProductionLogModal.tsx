import { useState } from "react";
import { IProductionLog } from "../../shared/interfaces";
import ModalBase from "../reusable/ModalBase";
import { Button } from "..";
import { useUpdateProductionLog } from "../../hooks/production/useUpdateProductionLog";

type Props = {
  onClose: () => void;
  productionLogData?: IProductionLog[];
};

const ProductionLogModal = ({ onClose, productionLogData }: Props) => {
  const [mode, setMode] = useState("view");
  const [selectedProductionLog, setSelectedProductionLog] =
    useState<IProductionLog | null>(null);

  const [error, setError] = useState<string | null>(null);

  const formatDateForChart = (dateString: string) => {
    const date = new Date(dateString);
    const utcDate = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
    );
    return `${
      utcDate.getMonth() + 1
    }/${utcDate.getDate()}/${utcDate.getFullYear()}`;
  };

  const toggleModalMode = (
    modeValue: string,
    productionLog?: IProductionLog,
  ) => {
    if (modeValue === "edit" && productionLog) {
      setSelectedProductionLog(productionLog);
    }

    setMode(modeValue);
  };

  const getModalTitle = (mode: string) => {
    let modalTitle;

    switch (mode) {
      case "view":
        modalTitle = "Production Logs";
        break;
      case "add":
        modalTitle = "Add Production Log";
        break;
      case "edit":
        modalTitle = "Edit Production Log";
        break;
      default:
        modalTitle = "Production Logs";
        break;
    }

    return modalTitle;
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { updateProductionLog } = useUpdateProductionLog(
      selectedProductionLog!.id,
    );

    let changes = selectedProductionLog;

    if (changes === selectedProductionLog) {
      setError("No changes have been made");
    } else {
      try {
        await updateProductionLog(changes);

        toggleModalMode("view");
      } catch (err) {
        console.error("Error editing production log", err);
      }
    }
  };

  return (
    <ModalBase title={getModalTitle(mode)} onClose={onClose}>
      {/* View Form */}
      {mode === "view" && (
        <>
          <table className="w-full table-auto text-center">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="pb-2 font-medium">Week Of</th>
                <th className="pb-2 font-medium">Projected Output</th>
                <th className="pb-2 font-medium">Actual Output</th>
                <th className="pb-2 font-medium">Actual Hrs</th>
                <th className="pb-2 font-medium">Quoted Hrs</th>
                <th className="pb-2 font-medium">Indirect Hrs</th>
                <th className="pb-2 font-medium">Total Hrs</th>
              </tr>
            </thead>
            <tbody>
              {productionLogData?.map((productionLog, index) => (
                <tr
                  key={index}
                  className={`text-sm ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="py-2">
                    <button
                      className="hover:underline"
                      onClick={() => toggleModalMode("edit", productionLog)}
                    >
                      {formatDateForChart(productionLog.weekOf)}
                    </button>
                  </td>
                  <td>${productionLog.projectedOutput}</td>
                  <td>${productionLog.actualOutput}</td>
                  <td>{productionLog.actualHours || 0}</td>
                  <td>{productionLog.quotedHours || 0}</td>
                  <td>{productionLog.indirectHours || 0}</td>
                  <td>{productionLog.totalHours || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-end">
            <Button
              text="Add"
              type="button"
              theme="primary"
              onClick={() => toggleModalMode("add")}
            />
          </div>
        </>
      )}

      {/* Add Form */}
      {mode === "add" && (
        <>
          <form className="grid grid-cols-12 gap-4">
            <div className="col-span-3 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="weekOf">
                Week Of
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                type="date"
                name="weekOf"
                id="weekOf"
              />
            </div>
            <div className="col-span-3 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="projectedOutput">
                Projected Output
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                type="number"
                name="projectedOutput"
                id="projectedOutput"
              />
            </div>
            <div className="col-span-3 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="actualOutput">
                Actual Output
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                type="number"
                name="actualOutput"
                id="actualOutput"
              />
            </div>
            <div className="col-span-3 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="quotedHours">
                Quoted Hours
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                type="number"
                name="quotedHours"
                id="quotedHours"
              />
            </div>
            <div className="col-span-3 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="actualHours">
                Actual Hours
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                type="number"
                name="actualHours"
                id="actualHours"
              />
            </div>
            <div className="col-span-3 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="actualHours">
                Quoted Hours
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                type="number"
                name="actualHours"
                id="actualHours"
              />
            </div>
            <div className="col-span-3 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="indirectHours">
                Indirect Hours
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                type="number"
                name="indirectHours"
                id="indirectHours"
              />
            </div>
            <div className="col-span-3 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="indirectHours">
                Total Hours
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                type="number"
                name="indirectHours"
                id="indirectHours"
              />
            </div>

            <div className="col-span-12 mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="notes">
                Notes
              </label>
              <textarea
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                name="notes"
                id="notes"
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </form>
          <div className="mt-4 flex justify-end">
            <div className="flex gap-4">
              <Button
                text="Cancel"
                type="button"
                theme="secondary"
                onClick={() => toggleModalMode("view")}
              />
              <Button text="Save" type="button" theme="primary" />
            </div>
          </div>
        </>
      )}

      {/* Edit Form */}
      {mode === "edit" && (
        <>
          <form>
            <div>
              Week Of {formatDateForChart(selectedProductionLog!.weekOf)}
            </div>
            <div className="mt-4 flex">
              {error !== null && <span>{error}</span>}
              <div className="flex w-full justify-end gap-4">
                <Button
                  text="Cancel"
                  type="button"
                  theme="secondary"
                  onClick={() => toggleModalMode("view")}
                />
                <Button
                  text="Save"
                  type="button"
                  theme="primary"
                  onClick={() => handleEditSubmit}
                />
              </div>
            </div>
          </form>
        </>
      )}
    </ModalBase>
  );
};

export default ProductionLogModal;

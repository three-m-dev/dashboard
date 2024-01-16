import { useState } from "react";
import { IProductionLog } from "../../shared/interfaces";
import ModalBase from "../reusable/ModalBase";
import { Button } from "..";

type Props = {
  onClose: () => void;
  productionLogData?: IProductionLog[];
};

const ProductionLogModal = ({ onClose, productionLogData }: Props) => {
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

  const [mode, setMode] = useState("view");

  const toggleModalMode = () => {
    setMode(mode === "view" ? "add" : "view");
  };

  return (
    <ModalBase
      title={
        mode === "view" && productionLogData
          ? "Production Logs"
          : "Add Production Log"
      }
      onClose={onClose}
    >
      {mode === "view" ? (
        <>
          <table className="w-full table-auto text-center">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="pb-2 font-medium">Week Of</th>
                <th className="pb-2 font-medium">Projected Output</th>
                <th className="pb-2 font-medium">Actual Output</th>
                <th className="pb-2 font-medium">Quoted Hrs</th>
                <th className="pb-2 font-medium">Actual Hrs</th>
                <th className="pb-2 font-medium">Indirect Hrs</th>
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
                    {formatDateForChart(productionLog.weekOf)}
                  </td>
                  <td>${productionLog.projectedOutput}</td>
                  <td>${productionLog.actualOutput}</td>
                  <td>{productionLog.quotedHours || 0}</td>
                  <td>{productionLog.actualHours || 0}</td>
                  <td>{productionLog.indirectHours || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-end">
            <Button
              text="Add"
              type="button"
              theme="primary"
              onClick={toggleModalMode}
            />
          </div>
        </>
      ) : (
        <>
          <form className="w-full">
            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="weekOf">
                Week Of
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                type="date"
                name="weekOf"
                id="weekOf"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="projectedOutput">
                Projected Output
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                type="number"
                name="projectedOutput"
                id="projectedOutput"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="actualOutput">
                Actual Output
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                type="number"
                name="actualOutput"
                id="actualOutput"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="quotedHours">
                Quoted Hours
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                type="number"
                name="quotedHours"
                id="quotedHours"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="actualHours">
                Actual Hours
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                type="number"
                name="actualHours"
                id="actualHours"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="indirectHours">
                Indirect Hours
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                type="number"
                name="indirectHours"
                id="indirectHours"
              />
            </div>

            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="notes">
                Notes
              </label>
              <textarea
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                name="notes"
                id="notes"
                cols={30}
                rows={10}
              ></textarea>
            </div>

            <div className="mb-4 flex flex-col">
              <label className="mb-2 font-medium" htmlFor="attachments">
                Attachments
              </label>
              <input
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                type="file"
                name="attachments"
                id="attachments"
              />
            </div>
          </form>
          <div className="mt-4 flex justify-end">
            <div className="flex gap-4">
              <Button
                text="Cancel"
                type="button"
                theme="secondary"
                onClick={toggleModalMode}
              />
              <Button text="Save" type="button" theme="primary" />
            </div>
          </div>
        </>
      )}
    </ModalBase>
  );
};

export default ProductionLogModal;

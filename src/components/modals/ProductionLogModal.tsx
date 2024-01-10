import { IProductionLog } from "../../shared/interfaces";
import ModalBase from "../reusable/ModalBase";

type Props = {
  mode: string;
  onClose: () => void;
  productionLogData?: IProductionLog[];
};

const ProductionLogModal = ({ mode, onClose, productionLogData }: Props) => {
  console.log(mode);

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
        </>
      ) : (
        <></>
      )}
    </ModalBase>
  );
};

export default ProductionLogModal;

import { IProductionLog } from "../../shared/interfaces";
import ModalBase from "../reusable/ModalBase";

type Props = {
  mode: string;
  onClose: () => void;
  productionLogData?: IProductionLog[];
};

const ProductionLogModal = ({ mode, onClose, productionLogData }: Props) => {
  console.log(mode);

  return (
    <ModalBase
      title={
        mode === "view" && productionLogData
          ? "Production Logs"
          : "Add Production Log"
      }
      onClose={onClose}
    >
      <></>
    </ModalBase>
  );
};

export default ProductionLogModal;

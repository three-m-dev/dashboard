import { IEmployee } from "../../shared/interfaces";
import ModalBase from "../reusable/ModalBase";

type Props = {
  mode: string;
  onClose: () => void;
  selectedEmployee: IEmployee | null;
};

const EmployeeModal = ({ mode, onClose, selectedEmployee }: Props) => {
  return (
    <ModalBase
      title={
        mode === "view" && selectedEmployee
          ? selectedEmployee.firstName + " " + selectedEmployee.lastName
          : "Add Team Member"
      }
      onClose={onClose}
    >
      <></>
    </ModalBase>
  );
};

export default EmployeeModal;

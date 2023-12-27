import { IEmployee } from "../../shared/interfaces";
import { formatDate, formatKebab } from "../../utils/formatter";
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
          ? "Team Member Details"
          : "Add Team Member"
      }
      onClose={onClose}
    >
      {mode === "view" && selectedEmployee ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold">First Name</label>
            <p>{selectedEmployee.firstName}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold">Last Name</label>
            <p>{selectedEmployee.lastName}</p>
          </div>
          <div className="col-span-6 flex flex-col">
            <label className="font-semibold">Email</label>
            <p>{selectedEmployee.email}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold">Company</label>
            <p>{formatKebab(selectedEmployee.company)}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold">Department</label>
            <p>{selectedEmployee.departmentId}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold">Type</label>
            <p>{formatKebab(selectedEmployee.type)}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold">Start Date</label>
            <p>{formatDate(selectedEmployee.startDate)}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold">Status</label>
            <p>{formatKebab(selectedEmployee.status)}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </ModalBase>
  );
};

export default EmployeeModal;

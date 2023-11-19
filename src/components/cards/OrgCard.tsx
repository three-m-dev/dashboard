import { Employee } from "../../interfaces/ICommon";

type Props = {
  employee: Employee;
};

const OrgCard = (props: Props) => {
  return (
    <div className="w-72 rounded-lg bg-white shadow-xl">
      <div className="flex items-center gap-4 p-4 py-2">
        <div>
          <h3 className="text-xl font-medium text-gray-900">
            {props.employee.firstName + " " + props.employee.lastName}
          </h3>
          <div className="text-xs font-semibold text-gray-400">
            <p>{props.employee.role}</p>
            <p>{props.employee.department}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgCard;

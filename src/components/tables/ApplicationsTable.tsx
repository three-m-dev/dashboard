import { Link, useNavigate, useParams } from "react-router-dom";
import { IApplication } from "../../shared/interfaces";
import ApplicantDetailsModal from "../modals/ApplicantDetailsModal";

type Props = {
  applications: IApplication[];
};

const ApplicationsTable = (props: Props) => {
  const navigate = useNavigate();

  const { id: applicationId } = useParams();
  const selectedApplication = props.applications.find(
    (application) => application.id === applicationId,
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatPhoneNumber = (phoneNumberString: string) => {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "+1 (" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  };

  const toggleApplicationDetailsModal = () => {
    navigate("/careers");
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-200 text-blue-800";
      case "reviewed":
        return "bg-green-200 text-green-800";
      case "contacted":
        return "bg-yellow-200 text-yellow-800";
      case "interviewed":
        return "bg-indigo-200 text-indigo-800";
      case "offered":
        return "bg-purple-200 text-purple-800";
      case "hired":
        return "bg-teal-200 text-teal-800";
      case "rejected":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <>
      <div className="overflow-x-auto px-6">
        <table className="w-full table-auto bg-white">
          <thead>
            <tr className="text-left text-xs text-gray-500">
              <th className="flex items-center py-4 pl-6 font-medium">
                <input className="mr-3" type="checkbox" name="" id="" />
                <a className="flex items-center" href="#">
                  <span>Name</span>
                  <span className="ml-2">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th className="py-4 font-medium">
                <a className="flex items-center" href="#">
                  <span>Email</span>
                  <span className="ml-2">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th className="py-4 font-medium">
                <a className="flex items-center" href="#">
                  <span>Phone</span>
                  <span className="ml-2">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th className="py-4 font-medium">
                <a className="flex items-center" href="#">
                  <span>Position</span>
                  <span className="ml-2">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th className="py-4 font-medium">
                <a className="flex items-center" href="#">
                  <span>Source</span>
                  <span className="ml-2">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th className="py-4 font-medium">
                <a className="flex items-center" href="#">
                  <span>Date</span>
                  <span className="ml-2">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th className="py-4 font-medium">
                <a className="flex items-center" href="#">
                  <span>Status</span>
                  <span className="ml-2">
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85957 7.52667L4.99957 10.3933L2.13957 7.52667C2.01403 7.40114 1.84377 7.33061 1.66623 7.33061C1.4887 7.33061 1.31843 7.40114 1.1929 7.52667C1.06736 7.65221 0.996837 7.82247 0.996837 8.00001C0.996837 8.17754 1.06736 8.3478 1.1929 8.47334L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17236 12.0005 5.34132 11.9308 5.46623 11.8067L8.79957 8.47334C8.86173 8.41118 8.91103 8.33739 8.94467 8.25617C8.97831 8.17496 8.99563 8.08791 8.99563 8.00001C8.99563 7.9121 8.97831 7.82505 8.94467 7.74384C8.91103 7.66262 8.86173 7.58883 8.79957 7.52667C8.73741 7.46451 8.66361 7.41521 8.5824 7.38157C8.50118 7.34793 8.41414 7.33061 8.32623 7.33061C8.23833 7.33061 8.15128 7.34793 8.07007 7.38157C7.98885 7.41521 7.91506 7.46451 7.8529 7.52667H7.85957ZM2.13957 4.47334L4.99957 1.60667L7.85957 4.47334C7.98447 4.59751 8.15344 4.6672 8.32957 4.6672C8.50569 4.6672 8.67466 4.59751 8.79957 4.47334C8.92373 4.34843 8.99343 4.17946 8.99343 4.00334C8.99343 3.82722 8.92373 3.65825 8.79957 3.53334L5.46623 0.200006C5.40426 0.137521 5.33052 0.0879247 5.24928 0.0540789C5.16804 0.0202331 5.08091 0.00280762 4.9929 0.00280762C4.90489 0.00280762 4.81775 0.0202331 4.73651 0.0540789C4.65527 0.0879247 4.58154 0.137521 4.51957 0.200006L1.18623 3.53334C1.06158 3.65976 0.992254 3.83052 0.993504 4.00805C0.994754 4.18559 1.06648 4.35535 1.1929 4.48001C1.31932 4.60466 1.49008 4.67398 1.66761 4.67273C1.84515 4.67148 2.01491 4.59976 2.13957 4.47334Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                  </span>
                </a>
              </th>
              <th className="py-4 font-medium flex justify-center">
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.applications.map((application, index) => (
              <tr
                key={index}
                className={`text-xs ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="flex items-center px-6 py-5 font-medium">
                  <input className="mr-3" type="checkbox" name="" id="" />
                  <p>
                    {application.applicant.firstName}{" "}
                    {application.applicant.lastName}
                  </p>
                </td>
                <td className="font-medium">{application.applicant.email}</td>
                <td className="font-medium">
                  {application.applicant.phoneNumber}
                </td>
                <td className="font-medium">{application.career.title}</td>
                <td className="font-medium capitalize">{application.source}</td>
                <td className="font-medium">{application.submittedAt}</td>
                <td className="font-medium">
                  <span
                    className={`rounded px-2.5 py-1 capitalize ${getStatusStyles(
                      application.status,
                    )}`}
                  >
                    {application.status}
                  </span>
                </td>
                <td className="font-medium flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="-mx-4 mt-2 flex flex-wrap items-center justify-between px-6">
        <div className="mb-4 flex w-full items-center px-4 lg:mb-0 lg:w-1/3">
          <p className="text-xs text-gray-400">Show</p>
          <div className="mx-3 rounded border bg-white px-2 py-2 text-xs text-gray-500">
            <select name="" id="">
              <option value="1">25</option>
              <option value="1">50</option>
              <option value="1">100</option>
              <option value="1">250</option>
            </select>
          </div>
          <p className="text-xs text-gray-400">of 1200</p>
        </div>
        <div className="flex w-full items-center justify-center px-4 lg:w-auto">
          <a
            className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
            href="#"
          >
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.53335 3.99999L4.86668 1.66666C5.13335 1.39999 5.13335 0.999992 4.86668 0.733325C4.60002 0.466659 4.20002 0.466659 3.93335 0.733325L1.13335 3.53333C0.866683 3.79999 0.866683 4.19999 1.13335 4.46666L3.93335 7.26666C4.06668 7.39999 4.20002 7.46666 4.40002 7.46666C4.60002 7.46666 4.73335 7.39999 4.86668 7.26666C5.13335 6.99999 5.13335 6.59999 4.86668 6.33333L2.53335 3.99999Z"
                fill="#A4AFBB"
              ></path>
            </svg>
          </a>
          <a
            className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
            href="#"
          >
            1
          </a>
          <span className="mr-3 inline-block">
            <svg
              className="h-3 w-3 text-gray-200"
              viewBox="0 0 12 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <a
            className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded bg-indigo-500 text-xs text-white"
            href="#"
          >
            12
          </a>
          <a
            className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
            href="#"
          >
            13
          </a>
          <a
            className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
            href="#"
          >
            14
          </a>
          <span className="mr-3 inline-block">
            <svg
              className="h-3 w-3 text-gray-200"
              viewBox="0 0 12 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <a
            className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs hover:bg-indigo-50"
            href="#"
          >
            62
          </a>
          <a
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
            href="#"
          >
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.88663 3.52667L2.05996 0.700006C1.99799 0.637521 1.92425 0.587925 1.84301 0.554079C1.76177 0.520233 1.67464 0.502808 1.58663 0.502808C1.49862 0.502808 1.41148 0.520233 1.33024 0.554079C1.249 0.587925 1.17527 0.637521 1.1133 0.700006C0.989128 0.824915 0.919434 0.993883 0.919434 1.17001C0.919434 1.34613 0.989128 1.5151 1.1133 1.64001L3.4733 4.00001L1.1133 6.36001C0.989128 6.48491 0.919434 6.65388 0.919434 6.83001C0.919434 7.00613 0.989128 7.1751 1.1133 7.30001C1.17559 7.36179 1.24947 7.41068 1.33069 7.44385C1.41192 7.47703 1.49889 7.49385 1.58663 7.49334C1.67437 7.49385 1.76134 7.47703 1.84257 7.44385C1.92379 7.41068 1.99767 7.36179 2.05996 7.30001L4.88663 4.47334C4.94911 4.41136 4.99871 4.33763 5.03256 4.25639C5.0664 4.17515 5.08383 4.08801 5.08383 4.00001C5.08383 3.912 5.0664 3.82486 5.03256 3.74362C4.99871 3.66238 4.94911 3.58865 4.88663 3.52667Z"
                fill="#A4AFBB"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default ApplicationsTable;

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
      <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
        <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
            <button className="flex items-center gap-1 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Email
                </th>
                <th scope="col" className="px-4 py-3">
                  Phone
                </th>
                <th scope="col" className="px-4 py-3">
                  Applied For
                </th>
                <th scope="col" className="px-4 py-3">
                  Applied On
                </th>
                <th scope="col" className="px-4 py-3">
                  Status
                </th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {props.applications.map((application) => (
                <tr key={application.id} className="border-b">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900"
                  >
                    <Link
                      to={`/careers/application/${application.id}`}
                      className="hover:underline"
                    >
                      {application.applicant.firstName +
                        " " +
                        application.applicant.lastName}
                    </Link>
                  </th>

                  <td className="px-4 py-3">
                    {" "}
                    <button
                      onClick={() =>
                        copyToClipboard(application.applicant.email)
                      }
                      className="hover:text-blue-500"
                    >
                      {application.applicant.email}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        copyToClipboard(application.applicant.phoneNumber)
                      }
                      className="hover:text-blue-500"
                    >
                      {formatPhoneNumber(application.applicant.phoneNumber)}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <span>{application.career.title}</span>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(application.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded px-2.5 py-1 capitalize ${getStatusStyles(
                        application.status,
                      )}`}
                    >
                      {application.status}
                    </span>
                  </td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      className="inline-flex items-center rounded-lg text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none"
                      type="button"
                    >
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
                    </button>
                    <div className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600">
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedApplication && (
        <ApplicantDetailsModal
          toggleModal={toggleApplicationDetailsModal}
          applicationDetails={selectedApplication}
        />
      )}
    </>
  );
};

export default ApplicationsTable;

import { IApplication } from "../../shared/interfaces";

type Props = {
  applicationDetails: IApplication;
  toggleModal: () => void;
};

const ApplicantDetailsModal = (props: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="flex items-center justify-between rounded-t border-b p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            Application Details
          </h3>
          <button
            onClick={props.toggleModal}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-200"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="max-h-[80vh] overflow-auto">
          <form className="p-5">
            <div className="grid gap-4 sm:grid-cols-12">
              <div className="sm:col-span-4">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Full Name
                </label>
                <div
                  id="company"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.applicationDetails.applicant.firstName +
                    " " +
                    props.applicationDetails.applicant.lastName}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Email Address
                </label>
                <div
                  id="company"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.applicationDetails.applicant.email}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Phone Number
                </label>
                <div
                  id="company"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.applicationDetails.applicant.phoneNumber}
                </div>
              </div>

              {props.applicationDetails.applicant.answers.map((qa, index) => (
                <div key={index} className="sm:col-span-12">
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    {qa.question}
                  </label>
                  <div
                    id="answer"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  >
                    {qa.answer}
                  </div>
                </div>
              ))}

              <div className="sm:col-span-4">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Phone Number
                </label>
                <div
                  id="company"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.applicationDetails.applicant.phoneNumber}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetailsModal;

import { ICareerListing } from "../../interfaces/ICommon";

type Props = {
  careerDetails: ICareerListing;
  toggleModal: () => void;
};

const CareerDetailsModal = (props: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="flex items-center justify-between rounded-t border-b p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            Career Listing Details
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
              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Company
                </label>
                <div
                  id="company"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.careerDetails.company}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Department
                </label>
                <div
                  id="department"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.careerDetails.department}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Employment Type
                </label>
                <div
                  id="employmentType"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.careerDetails.employmentType}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Location
                </label>
                <div
                  id="location"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.careerDetails.location}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Title
                </label>
                <div
                  id="title"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.careerDetails.title}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Starting At
                </label>
                <div
                  id="startingAt"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.careerDetails.startingAt}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Compensation Type
                </label>
                <div
                  id="compensationType"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                >
                  {props.careerDetails.compensationType}
                </div>
              </div>

              <div className="sm:col-span-12">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Description
                </label>
                <div
                  id="description"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  style={{ minHeight: "3em" }}
                >
                  {props.careerDetails.description}
                </div>
              </div>

              <div className="sm:col-span-12">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Benefits
                </label>
                <div
                  id="benefits"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {props.careerDetails.benefits &&
                  props.careerDetails.benefits.length > 0
                    ? props.careerDetails.benefits.map((benefit, index) => (
                        <div key={index}>• {benefit}</div>
                      ))
                    : "No benefit information available"}
                </div>
              </div>

              <div className="sm:col-span-12">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Requirements
                </label>
                <div
                  id="requirements"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {props.careerDetails.requirements &&
                  props.careerDetails.requirements.length > 0
                    ? props.careerDetails.requirements.map(
                        (requirement, index) => (
                          <div key={index}>• {requirement}</div>
                        ),
                      )
                    : "No requirement information available"}
                </div>
              </div>

              <div className="sm:col-span-12">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Qualifications
                </label>
                <div
                  id="qualifications"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {props.careerDetails.qualifications &&
                  props.careerDetails.qualifications.length > 0
                    ? props.careerDetails.qualifications.map(
                        (qualification, index) => (
                          <div key={index}>• {qualification}</div>
                        ),
                      )
                    : "No qualification information available"}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailsModal;

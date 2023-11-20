import { useState } from "react";
import { useCreateCareerListing } from "../../hooks/useCreateCareerListing";
import { ICareerListing } from "../../interfaces/ICommon";

type Props = {
  toggleModal: () => void;
  careers: ICareerListing[];
};

const CareerModal = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [departmnet, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [requirements, setRequirements] = useState({});
  const [qualifications, setQualifications] = useState({});
  const [salary, setSalary] = useState("");

  const { createCareerListing, isLoading, error } = useCreateCareerListing();

  const handleSubmit = async () => {
    const listingData = {
      title,
      description,
      company,
      location,
      departmnet,
      type,
      requirements,
      qualifications,
      salary,
    };

    await createCareerListing(listingData);

    if (!error) {
      props.toggleModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white p-5 shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            New Career Listing
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

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-12">
            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Company
              </label>
              <select
                id="company"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                value={company}
              >
                <option>Select Company</option>
                <option value={1}>Three M</option>
                <option value={2}>Ultra Grip</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Department
              </label>
              <select
                id="department"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                value={departmnet}
              >
                <option>Select Department</option>
                <option value={1}>Three M</option>
                <option value={2}>Ultra Grip</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Employment Type
              </label>
              <select
                id="type"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option>Select Type</option>
                <option value={1}>Full Time</option>
                <option value={2}>Part Time</option>
                <option value={3}>Contractor</option>
                <option value={4}>Internship</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Location
              </label>
              <select
                id="location"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
              >
                <option>Select Location</option>
                <option value={1}>On Site</option>
                <option value={2}>Remote</option>
                <option value={3}>Hybrid</option>
              </select>
            </div>

            <div className="sm:col-span-8">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>

            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Salary / Wage
              </label>
              <input
                type="text"
                name="salary"
                id="salary"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="$41,600/yr or $20.00/hr"
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>

            <div className="sm:col-span-12">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Write career description here"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="sm:col-span-12">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Requirements
              </label>
              <textarea
                id="requirments"
                rows={3}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Write career requirments here"
                value={description}
                onChange={(e) => {
                  setRequirements(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="sm:col-span-12">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Qualifications
              </label>
              <textarea
                id="qualifications"
                rows={3}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Write career qualifications here"
                value={description}
                onChange={(e) => {
                  setQualifications(e.target.value);
                }}
              ></textarea>
            </div>

            <button
              onClick={props.toggleModal}
              className="items-center gap-1 rounded-md bg-red-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-200 hover:text-gray-800 sm:col-span-6"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="items-center gap-1 rounded-md bg-blue-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-200 hover:text-gray-800 sm:col-span-6"
            >
              {isLoading ? "Submitting.." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerModal;

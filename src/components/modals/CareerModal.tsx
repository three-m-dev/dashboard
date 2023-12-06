import { useState } from "react";
import { useCreateCareerListing } from "../../hooks/useCreateCareerListing";
import BulletTextArea from "../forms/BulletTextArea";
import { IDepartment } from "../../interfaces/ICommon";

type Props = {
  toggleModal: () => void;
  departments: IDepartment[];
};

const CareerModal = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState<number>(0);
  const [location, setLocation] = useState<number>(0);
  const [department, setDepartment] = useState("");
  const [employmentType, setEmploymentType] = useState<number>(0);
  const [benefits, setBenefits] = useState<string>("");
  const [requirements, setRequirements] = useState<string>("");
  const [qualifications, setQualifications] = useState<string>("");
  const [startingAt, setStartingAt] = useState("");
  const [compensationType, setCompensationType] = useState<number>(0);

  const { createCareerListing, isLoading, error } = useCreateCareerListing();

  const parseBulletsToJsonArray = (bulletList: string): string => {
    return JSON.stringify(
      bulletList
        .split("\n")
        .filter((line) => line.trim().startsWith("• "))
        .map((line) => line.trim().substring(2)),
    );
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCompany(Number(e.target.value));
  };

  const handleEmploymentTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setEmploymentType(Number(e.target.value));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(Number(e.target.value));
  };

  const handleCompensationTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCompensationType(Number(e.target.value));
  };

  const handleBenefitsChange = (value: string) => {
    setBenefits(parseBulletsToJsonArray(value));
  };

  const handleRequirementsChange = (value: string) => {
    setRequirements(parseBulletsToJsonArray(value));
  };

  const handleQualificationsChange = (value: string) => {
    setQualifications(parseBulletsToJsonArray(value));
  };

  const handleSubmit = async () => {
    const careerData = {
      title,
      description,
      company,
      location,
      department,
      employmentType,
      benefits: JSON.parse(benefits),
      requirements: JSON.parse(requirements),
      qualifications: JSON.parse(qualifications),
      startingAt,
      compensationType,
    };

    const career = await createCareerListing(careerData);

    if (career !== null) {
      props.toggleModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white p-5 shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-900">
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
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Company
              </label>
              <select
                id="company"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                onChange={handleCompanyChange}
                value={company}
              >
                <option>Select Company</option>
                <option value={1}>Three M</option>
                <option value={2}>Ultra Grip</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Department
              </label>
              <select
                id="department"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                value={department}
              >
                <option>Select Department</option>
                {props.departments.map((department) => (
                  <option key={department.id} value={department.name}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Employment Type
              </label>
              <select
                id="employmentType"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                value={employmentType}
                onChange={handleEmploymentTypeChange}
              >
                <option>Select Type</option>
                <option value={1}>Full Time</option>
                <option value={2}>Part Time</option>
                <option value={3}>Contractor</option>
                <option value={4}>Internship</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Location
              </label>
              <select
                id="location"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                onChange={handleLocationChange}
                value={location}
              >
                <option>Select Location</option>
                <option value={1}>On Site</option>
                <option value={2}>Remote</option>
                <option value={3}>Hybrid</option>
              </select>
            </div>

            <div className="sm:col-span-6">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Starting At
              </label>
              <input
                type="text"
                name="compensation"
                id="compensation"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                placeholder="$42,000/$20.00"
                value={startingAt}
                onChange={(e) => {
                  setStartingAt(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Salary/Hourly
              </label>
              <select
                id="compensationType"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                onChange={handleCompensationTypeChange}
                value={compensationType}
              >
                <option>Select Type</option>
                <option value={1}>Salary</option>
                <option value={2}>Hourly</option>
              </select>
            </div>

            <div className="sm:col-span-12">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                placeholder="Write career description here"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="sm:col-span-12">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Benefits
              </label>
              <BulletTextArea
                placeholder="Write career benefits here"
                value={benefits}
                onChange={handleBenefitsChange}
              />
            </div>

            <div className="sm:col-span-12">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Responsibilities
              </label>
              <BulletTextArea
                placeholder="Write career responsibilities here"
                value={requirements}
                onChange={handleRequirementsChange}
              />
            </div>

            <div className="sm:col-span-12">
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Qualifications
              </label>
              <BulletTextArea
                placeholder="Write career qualifications here"
                value={qualifications}
                onChange={handleQualificationsChange}
              />
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

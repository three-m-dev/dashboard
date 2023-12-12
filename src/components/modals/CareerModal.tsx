import { useEffect, useState } from "react";
import { BulletTextArea } from "..";
import useGetTeamMemberByUser from "../../hooks/useGetTeamMemberByUser";
import { ICareer } from "../../shared/interfaces";
import { useCreateCareer } from "../../hooks/useCreateCareer";

type CareerModalProps = {
  toggleCareerModal: (mode: string) => void;
  careerModalMode: string;
  selectedCareer: ICareer | null;
  triggerDataRefresh: () => void;
};

const CareerModal = ({
  toggleCareerModal,
  careerModalMode,
  selectedCareer,
  triggerDataRefresh,
}: CareerModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState<number>(0);
  const [location, setLocation] = useState<number>(0);
  const [department, setDepartment] = useState("");
  const [employmentType, setEmploymentType] = useState<number>(0);
  const [benefits, setBenefits] = useState<string>("");
  const [responsibilities, setResponsibilities] = useState<string>("");
  const [qualifications, setQualifications] = useState<string>("");
  const [startingAt, setStartingAt] = useState("");
  const [compensationType, setCompensationType] = useState<number>(0);
  const [userId, setUserId] = useState("");

  const { createCareer, isLoading, error: createError } = useCreateCareer();

  const { teamMemberData, error } = useGetTeamMemberByUser(userId);

  const departments = [
    {
      id: 1,
      name: "Management",
    },
  ];

  const parseBulletsToJsonArray = (bulletList: string): string => {
    return JSON.stringify(
      bulletList
        .split("\n")
        .filter((line) => line.trim().startsWith("• "))
        .map((line) => line.trim().substring(2)),
    );
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const careerData = {
      title,
      description,
      company,
      location,
      department,
      employmentType,
      benefits: JSON.parse(benefits),
      responsibilities: JSON.parse(responsibilities),
      qualifications: JSON.parse(qualifications),
      startingAt: parseFloat(startingAt.replace(/[^0-9.]/g, "")),
      compensationType,
    };

    const career = await createCareer(careerData);

    if (career !== null) {
      toggleCareerModal("");
      triggerDataRefresh();
    }
  };

  useEffect(() => {
    if (careerModalMode === "view" && selectedCareer) {
      if (selectedCareer.updatedBy) {
        setUserId(selectedCareer.updatedBy);
      } else {
        setUserId("");
      }
    } else {
      setUserId("");
    }
  }, [careerModalMode, selectedCareer]);

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="flex items-center justify-between rounded-t border-b p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {careerModalMode === "view"
              ? `${selectedCareer?.title}`
              : "New Career Opening"}
          </h3>
          <button
            onClick={() => toggleCareerModal("")}
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
        {careerModalMode === "create" && (
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid gap-4 sm:grid-cols-12">
              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Company
                </label>
                <select
                  id="company"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  value={company}
                  onChange={(e) => setCompany(Number(e.target.value))}
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
                  {departments.map((department) => (
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
                  onChange={(e) => setEmploymentType(Number(e.target.value))}
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
                  value={location}
                  onChange={(e) => setLocation(Number(e.target.value))}
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
                  placeholder="Amount"
                  value={startingAt}
                  onChange={(e) => {
                    let value = e.target.value.replace(/[^\d.,$]/g, "");

                    if (value === "$") {
                      value = "";
                    }

                    if (value && !value.startsWith("$")) {
                      value = "$" + value;
                    }

                    const numberParts = value.replace(/[$,]/g, "").split(".");
                    if (numberParts[0]) {
                      numberParts[0] = parseInt(
                        numberParts[0],
                        10,
                      ).toLocaleString();
                    }
                    value = value.startsWith("$")
                      ? "$" + numberParts.join(".")
                      : numberParts.join(".");

                    setStartingAt(value);
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
                  value={compensationType}
                  onChange={(e) => setCompensationType(Number(e.target.value))}
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
                  onChange={(value: string) =>
                    setBenefits(parseBulletsToJsonArray(value))
                  }
                />
              </div>

              <div className="sm:col-span-12">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Responsibilities
                </label>
                <BulletTextArea
                  placeholder="Write career benefits here"
                  value={responsibilities}
                  onChange={(value: string) =>
                    setResponsibilities(parseBulletsToJsonArray(value))
                  }
                />
              </div>

              <div className="sm:col-span-12">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Qualifications
                </label>
                <BulletTextArea
                  placeholder="Write career benefits here"
                  value={qualifications}
                  onChange={(value: string) =>
                    setQualifications(parseBulletsToJsonArray(value))
                  }
                />
              </div>

              <button
                onClick={() => toggleCareerModal("")}
                className="items-center gap-1 rounded-md bg-red-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-200 hover:text-gray-800 sm:col-span-6"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="items-center gap-1 rounded-md bg-blue-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-200 hover:text-gray-800 sm:col-span-6"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {careerModalMode === "view" && selectedCareer && (
          <>
            <form className="max-h-[75vh] overflow-y-auto py-4">
              <div className="grid gap-4 px-4 sm:grid-cols-12">
                <div className="sm:col-span-3">
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Company
                  </label>
                  <div
                    id="company"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  >
                    {selectedCareer.company
                      .split("-")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
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
                    {selectedCareer.department}
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
                    {selectedCareer.employmentType
                      .split("-")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
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
                    {selectedCareer.location
                      .split("-")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
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
                    {selectedCareer.title}
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
                    {selectedCareer.startingAt}
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
                    {selectedCareer.compensationType
                      .split("-")
                      .map(
                        (word: string) =>
                          word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
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
                    {selectedCareer.description}
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
                    {selectedCareer.benefits &&
                    selectedCareer.benefits.length > 0
                      ? selectedCareer.benefits.map(
                          (benefit: string, index: number) => (
                            <div key={index}>• {benefit}</div>
                          ),
                        )
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
                    {selectedCareer.responsibilities &&
                    selectedCareer.responsibilities.length > 0
                      ? selectedCareer.responsibilities.map(
                          (responsibility: string, index: number) => (
                            <div key={index}>• {responsibility}</div>
                          ),
                        )
                      : "No responsibility information available"}
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
                    {selectedCareer.qualifications &&
                    selectedCareer.qualifications.length > 0
                      ? selectedCareer.qualifications.map(
                          (qualification: string, index: number) => (
                            <div key={index}>• {qualification}</div>
                          ),
                        )
                      : "No qualification information available"}
                  </div>
                </div>

                <div className="col-span-12 flex items-center justify-between">
                  <div>
                    <div>
                      Last updated on{" "}
                      <span className="font-medium text-blue-500">
                        {formatDate(selectedCareer.createdAt)}
                      </span>{" "}
                      by{" "}
                      <span className="font-medium text-blue-500">
                        {teamMemberData?.firstName} {teamMemberData?.lastName}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="flex gap-1 rounded border-2 border-blue-500 bg-white px-4 py-1.5 text-sm font-semibold capitalize text-blue-500 transition-colors hover:bg-blue-500 hover:text-white">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerModal;

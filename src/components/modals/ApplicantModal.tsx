import { useState } from "react";
import { BulletTextArea } from "..";
import { IApplication } from "../../shared/interfaces";

type ApplicantModalProps = {
  toggleApplicantModal: () => void;
  applicantModalMode: string;
  selectedApplicant: IApplication | null;
};

const ApplicantModal = ({
  toggleApplicantModal,
  applicantModalMode,
  selectedApplicant,
}: ApplicantModalProps) => {
  const [careerId, setCareerId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [source, setSource] = useState(0);
  const [resume, setResume] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [answers, setAnswers] = useState("");
  const [notes, setNotes] = useState("");

  const parseBulletsToJsonArray = (bulletList: string): string => {
    return JSON.stringify(
      bulletList
        .split("\n")
        .filter((line) => line.trim().startsWith("• "))
        .map((line) => line.trim().substring(2)),
    );
  };

  const handleSubmit = () => {};

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white p-5 shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {applicantModalMode === "view"
              ? `${selectedApplicant?.applicant.firstName} ${selectedApplicant?.applicant.lastName}`
              : "New Applicant"}
          </h3>
          <button
            onClick={toggleApplicantModal}
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
        {applicantModalMode === "create" && (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-12">
              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="sm:col-span-6">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="off"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  autoComplete="off"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Position
                </label>
                <select
                  id="career"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  value={careerId}
                  onChange={(e) => setCareerId(e.target.value)}
                >
                  <option>Select Career</option>
                  <option value={1}>Salary</option>
                  <option value={2}>Hourly</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Date
                </label>
                <select
                  id="career"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  value={careerId}
                  onChange={(e) => setCareerId(e.target.value)}
                >
                  <option>Select Date</option>
                  <option value={1}>Salary</option>
                  <option value={2}>Hourly</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Source
                </label>
                <select
                  id="source"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  value={source}
                  onChange={(e) => setSource(Number(e.target.value))}
                >
                  <option>Select Source</option>
                  <option value={1}>Indeed</option>
                  <option value={2}>Craigslist</option>
                  <option value={3}>Drop off</option>
                  <option value={4}>Other</option>
                </select>
              </div>

              <div className="sm:col-span-12">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Resume Link
                </label>
                <input
                  type="text"
                  name="resumeUrl"
                  id="resumeUrl"
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  placeholder="Resume Link"
                  value={resumeUrl}
                  onChange={(e) => {
                    setResumeUrl(e.target.value);
                  }}
                  autoComplete="off"
                />
              </div>

              <div className="sm:col-span-12">
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
                  placeholder="Write applicant notes here"
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                ></textarea>
              </div>

              <button
                onClick={toggleApplicantModal}
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
      </div>
    </div>
  );
};

export default ApplicantModal;

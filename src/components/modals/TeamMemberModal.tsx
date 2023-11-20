import { useState } from "react";
import { useCreateTeamMember } from "../../hooks/useCreateTeamMember";
import { ITeamMember } from "../../interfaces/ICommon";

type Props = {
  toggleModal: () => void;
  teamMembers: ITeamMember[];
};

const TeamMemberModal = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [company, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [directReport, setDirectReport] = useState("");
  const [hiredAt, setHiredAt] = useState("");
  const [type, setType] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const { createTeamMember, isLoading, error } = useCreateTeamMember();

  const departments = [
    {
      id: 1,
      name: "Executive",
    },
  ];

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const generateRandomPassword = () => {
    const length = 8;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
    setRepeatPassword(retVal);
  };

  const handleSubmit = async () => {
    if (repeatPassword !== password) {
      console.log("Passwords do not match");
      return;
    }

    const userData = {
      username,
      password,
      accountType: "employee",
    };

    const employeeData = {
      firstName,
      middleInitial,
      lastName,
      email,
      phoneNumber: phone,
      address: {
        addressLine,
        city,
        state,
        country,
        postalCode,
      },
      company: Number(company),
      department,
      role,
      directReport,
      hiredAt,
      type,
    };

    await createTeamMember(userData, employeeData);

    if (!error) {
      props.toggleModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative mx-4 w-full rounded-md border bg-white p-5 shadow-lg sm:mx-auto sm:max-w-screen-md">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            New Team Member
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
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Repeat Password
              </label>
              <input
                type="text"
                name="repeatPassword"
                id="repeatPassword"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="********"
                value={repeatPassword}
                onChange={(e) => {
                  setRepeatPassword(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-5">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="John"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>

            <div className="sm:col-span-5">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Middle Initial
              </label>
              <input
                type="text"
                name="middleInitial"
                id="middleInitial"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="A"
                value={middleInitial}
                onChange={(e) => {
                  setMiddleInitial(e.target.value);
                }}
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-6">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-6">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="123-456-7890"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-6">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Street Address
              </label>
              <input
                type="text"
                name="addressLine"
                id="addressLine"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="123 Main St"
                value={addressLine}
                onChange={(e) => {
                  setAddressLine(e.target.value);
                }}
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-6">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Detroit"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                State/Province
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Michigan"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="12345"
                value={postalCode}
                onChange={(e) => {
                  setPostalCode(e.target.value);
                }}
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="United States"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Role
              </label>
              <input
                type="text"
                name="role"
                id="role"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Team Member"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Start Date
              </label>
              <input
                type="date"
                name="hiredAt"
                id="hiredAt"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                value={hiredAt}
                onChange={(e) => {
                  setHiredAt(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Employment Type
              </label>
              <select
                id="type"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
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
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Company
              </label>
              <select
                id="company"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              >
                <option>Select Company</option>
                <option value={1}>Three M</option>
                <option value={2}>Ultra Grip</option>
              </select>
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Department
              </label>
              <select
                id="department"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              >
                <option>Select Department</option>
                {departments.map((department) => (
                  <option key={department.id} value={department.name}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Direct Report
              </label>
              <select
                id="directReport"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                onChange={(e) => {
                  setDirectReport(e.target.value);
                }}
              >
                <option>Select Direct Report</option>

                {props.teamMembers.map((teamMember) => (
                  <option key={teamMember.id} value={teamMember.id}>
                    {teamMember.firstName + " " + teamMember.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-12">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Notes
              </label>
              <textarea
                id="description"
                rows={4}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Write team member notes here"
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

export default TeamMemberModal;
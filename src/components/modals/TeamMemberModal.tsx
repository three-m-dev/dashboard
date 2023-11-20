import { useState } from "react";
import { useCreateTeamMember } from "../../hooks/useCreateTeamMember";

type Props = {
  toggleModal: () => void;
};

const TeamMemberModal = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
  const [status, setStatus] = useState("");
  const [hiredAt, setHiredAt] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const { createTeamMember, isLoading, error } = useCreateTeamMember();

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
  };

  const handleSubmit = async () => {
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
      status,
      hiredAt,
    };

    await createTeamMember(userData, employeeData);

    if (!error) {
      props.toggleModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50 backdrop-blur-sm">
      <div className="relative top-1/4 mx-auto w-1/3 rounded-md border bg-white p-5 shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">New Team Member</h3>
          <button
            className="rounded-md p-2.5 text-gray-600 hover:bg-gray-200"
            onClick={props.toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h1>Authentication</h1>
          <div className="flex gap-2">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                className="hover:bg-gray-20 rounded-md border border-gray-300 p-2.5 text-gray-600"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
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
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
              <button
                className="rounded-md border border-gray-300 p-2.5 text-gray-600 hover:bg-gray-200"
                onClick={generateRandomPassword}
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
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <h1>Profile</h1>
          <div className="flex gap-2">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              id="middleInitial"
              name="middleInitial"
              className="w-12 rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="M"
              value={middleInitial}
              onChange={(e) => setMiddleInitial(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              id="company"
              name="company"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="text"
              id="department"
              name="department"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <input
              type="text"
              id="role"
              name="role"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;

import { useState } from "react";
import { Layout } from "../components";

type Props = {};

const Profile = (props: Props) => {
  const [firstName, setFirstName] = useState("Jacob");
  const [middleInitial, setMiddleInitial] = useState("A");
  const [lastName, setLastName] = useState("Reppuhn");
  const [email, setEmail] = useState("jakereppuhn@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("2488213963");
  const [address, setAddress] = useState({
    street: "6000 Birchcrest Lane",
    city: "Commerce Township",
    state: "MI",
    zipCode: "48382",
    country: "United States",
  });
  const [dateOfBirth, setDateOfBirth] = useState("05/22/2000");
  const [company, setCompany] = useState("Three M");
  const [department, setDepartment] = useState("IT");
  const [role, setRole] = useState("Data Engineer");
  const [directReport, setDirectReport] = useState("Dan O'Connell");
  const [status, setStatus] = useState("Active");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [updatedBy, setUpdatedBy] = useState("August 29th, 2023 by Developer");
  const [hiredAt, setHiredAt] = useState("08/28/2023");
  const [terminatedAt, setTerminatedAt] = useState("N/A");
  const [resignedAt, setResignedAt] = useState("N/A");

  const isAdmin = true;

  return (
    <Layout>
      <section>
        <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-semibold">Employee Profile</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  First
                </label>
                <div className="mb-4">{firstName}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Middle
                </label>
                <div className="mb-4">{middleInitial}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Last
                </label>
                <div className="mb-4">{lastName}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Date of Birth
                </label>
                <div className="mb-4">{dateOfBirth}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Email
                </label>
                <div className="mb-4">{email}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Phone
                </label>
                <div className="mb-4">{phoneNumber}</div>
              </div>
            </div>

            <div className="mb-4 w-full">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Address
              </label>
              <div className="text-gray-800">
                <p>{address.street}</p>
                <p>
                  {address.city}, {address.state} {address.zipCode}
                </p>
                <p>{address.country}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Company
                </label>
                <div className="mb-4">{company}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Department
                </label>
                <div className="mb-4">{department}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Role
                </label>
                <div className="mb-4">{role}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Direct Report
                </label>
                <div className="mb-4">{directReport}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Status
                </label>
                <div className="mb-4">{status}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Start Date
                </label>
                <div className="mb-4">{hiredAt}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Terminated At
                </label>
                <div className="mb-4">{terminatedAt}</div>
              </div>

              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Resigned At
                </label>
                <div className="mb-4">{resignedAt}</div>
              </div>
            </div>

            <div className="flex">
              <div className="w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Last Updated
                </label>
                <div className="mb-4">{updatedBy}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 flex max-w-4xl justify-end">
          <button className="rounded-md border border-gray-300 bg-gray-200 px-4 py-1 text-gray-400 shadow transition-all hover:text-blue-500 hover:shadow-md">
            Edit
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;

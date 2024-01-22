import ModalBase from "../reusable/ModalBase";
import { IApplication } from "../../shared/interfaces";
import { Input } from "..";
import { useState } from "react";

type Props = {
  mode: string;
  onClose: () => void;
  selectedApplication: IApplication | null;
  triggerRefresh: () => void;
};

const ApplicationModal = ({ mode, onClose, selectedApplication }: Props) => {
  const [applicationData, setApplicationData] = useState({
    applicant: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const handleApplicationFormChange = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <ModalBase
      title={mode === "view" ? "Application Details" : "Add Application"}
      onClose={onClose}
    >
      {mode === "view" && selectedApplication ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              First Name
            </label>
            <p>{selectedApplication.applicant.firstName}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              Last Name
            </label>
            <p>{selectedApplication.applicant.lastName}</p>
          </div>
          <div className="col-span-6 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              Email
            </label>
            <p>{selectedApplication.applicant.email}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              First Name
            </label>
            <Input
              type="text"
              name="firstName"
              value={applicationData.applicant.firstName}
              onChange={handleApplicationFormChange}
            />
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              Last Name
            </label>
            <Input
              type="text"
              name="lastName"
              value={applicationData.applicant.lastName}
              onChange={handleApplicationFormChange}
            />
          </div>
          <div className="col-span-6 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              Email
            </label>
            <Input
              type="text"
              name="email"
              value={applicationData.applicant.email}
              onChange={handleApplicationFormChange}
            />
          </div>
        </div>
      )}
    </ModalBase>
  );
};

export default ApplicationModal;

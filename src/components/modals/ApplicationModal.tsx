import { useState } from "react";
import ModalBase from "../reusable/ModalBase";
import { IApplication } from "../../shared/interfaces";

type Props = {
  mode: string;
  onClose: () => void;
  selectedApplication: IApplication | null;
  triggerRefresh: () => void;
};

const ApplicationModal = ({
  mode,
  onClose,
  selectedApplication,
  triggerRefresh,
}: Props) => {
  const [applicationFormData, setApplicationFormData] = useState({});

  const handleApplicationFormChange = {};

  const handleApplicationFormSubmit = {};

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
          <div></div>
        </div>
      )}
    </ModalBase>
  );
};

export default ApplicationModal;

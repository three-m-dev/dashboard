import { useState } from "react";
import { IJob } from "../../shared/interfaces";
import ModalBase from "../reusable/ModalBase";
import { formatKebab } from "../../utils/formatter";
// import useGetEmployee from "../../hooks/useGetEmployee";

type Props = {
  mode: string;
  onClose: () => void;
  selectedJob: IJob | null;
  triggerDataRefresh: () => void;
};

const JobModal = ({ mode, onClose, selectedJob }: Props) => {
  const [jobFormData, setJobFormData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  // const { employee } = useGetEmployee(
  //   selectedJob?.updatedBy
  //     ? selectedJob.updatedBy
  //     : selectedJob?.createdBy || "",
  // );

  const handleNewJobFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobFormData({
      ...jobFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleNewJobFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(jobFormData);
  };

  return (
    <ModalBase
      title={mode === "view" && selectedJob ? selectedJob.title : "Add Opening"}
      onClose={onClose}
    >
      {mode === "view" && selectedJob ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              Job Title
            </label>
            <p>{selectedJob.title}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="company">
              Company
            </label>
            <p>{formatKebab(selectedJob.company)}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="department">
              Department
            </label>
            <p>{selectedJob.departmentId}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="location">
              Location
            </label>
            <p>{formatKebab(selectedJob.location)}</p>
          </div>
          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="type">
              Type
            </label>
            <p>{formatKebab(selectedJob.type)}</p>
          </div>

          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="startingAt">
              Starting At
            </label>
            <p>{selectedJob.salary ? selectedJob.salary : selectedJob.wage}</p>
          </div>

          <div className="col-span-3 flex flex-col">
            <label className="font-semibold" htmlFor="title">
              Pay Type
            </label>
            <p>{selectedJob.salary ? "Salary" : "Hourly"}</p>
          </div>

          <div className="col-span-12 flex flex-col">
            <label className="font-semibold" htmlFor="description">
              Description
            </label>
            <p>{selectedJob.description}</p>
          </div>

          <div className="col-span-12 flex flex-col">
            <label className="font-semibold" htmlFor="requirements">
              Requirements
            </label>
            {selectedJob.requirements ? (
              <ul className="list-disc pl-5">
                {selectedJob.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            ) : (
              <p>No requirements listed.</p>
            )}
          </div>

          <div className="col-span-12 flex flex-col">
            <label className="font-semibold" htmlFor="description">
              Qualifications
            </label>
            {selectedJob.qualifications ? (
              <ul className="list-disc pl-5">
                {selectedJob.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            ) : (
              <p>No qualifications listed.</p>
            )}
          </div>

          <div className="col-span-12 flex flex-col">
            <label className="font-semibold" htmlFor="benefits">
              Benefits
            </label>
            {selectedJob.benefits ? (
              <ul className="list-disc pl-5">
                {selectedJob.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            ) : (
              <p>No benefits listed.</p>
            )}
          </div>

          <div className="col-span-12 flex flex-col">
            <label className="font-semibold" htmlFor="schedule">
              Schedule
            </label>
            {selectedJob.schedule ? (
              <ul className="list-disc pl-5">
                {selectedJob.schedule.map((scheduleItem, index) => (
                  <li key={index}>{scheduleItem}</li>
                ))}
              </ul>
            ) : (
              <p>No schedule information available.</p>
            )}
          </div>

          {/* <div className="col-span-12">
            <p>
              Last updated on{" "}
              <span className="text-primary">
                {formatDate(selectedJob.updatedAt)}
              </span>{" "}
              by{" "}
              <span className="text-primary">
                {employee?.firstName
                  ? employee.firstName + " " + employee.lastName
                  : "Unknown"}
              </span>
            </p>
          </div> */}
        </div>
      ) : (
        <form onSubmit={handleNewJobFormSubmit}>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 flex flex-col">
              <label className="font-semibold" htmlFor="title">
                Job Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Job Title"
                onChange={handleNewJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold" htmlFor="title">
                Company
              </label>
              <input
                id="title"
                type="text"
                placeholder="Job Title"
                onChange={handleNewJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold" htmlFor="title">
                Department
              </label>
              <input
                id="title"
                type="text"
                placeholder="Job Title"
                onChange={handleNewJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold" htmlFor="title">
                Location
              </label>
              <input
                id="title"
                type="text"
                placeholder="Job Title"
                onChange={handleNewJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold" htmlFor="title">
                Type
              </label>
              <input
                id="title"
                type="text"
                placeholder="Job Title"
                onChange={handleNewJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold" htmlFor="startingAt">
                Starting At
              </label>
              <input
                id="title"
                type="text"
                placeholder="$0.00"
                onChange={handleNewJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold" htmlFor="title">
                Compensation
              </label>
              <input
                id="title"
                type="text"
                placeholder="Job Title"
                onChange={handleNewJobFormChange}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label className="font-semibold" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Description"
                onChange={() => {}}
              />
            </div>
          </div>
        </form>
      )}
    </ModalBase>
  );
};

export default JobModal;

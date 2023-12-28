import { useState } from "react";
import { IJob } from "../../shared/interfaces";
import ModalBase from "../reusable/ModalBase";
import { formatKebab } from "../../utils/formatter";
import { Button, TextArea } from "..";

type Props = {
  mode: string;
  onClose: () => void;
  selectedJob: IJob | null;
  triggerRefresh: () => void;
};

const JobModal = ({ mode, onClose, selectedJob }: Props) => {
  const [jobFormData, setJobFormData] = useState({
    jobTitle: "",
    company: 0,
    department: "",
    location: 0,
    type: 0,
    salary: 0,
    wage: 0,
    description: "",
    requirements: [],
    qualifications: [],
    benefits: [],
    schedule: [],
  });

  const [compensationType, setCompensationType] = useState("");

  const handleJobFormChange = (e: any) => {
    const { id, value } = e.target;

    if (
      ["requirements", "qualifications", "benefits", "schedule"].includes(id)
    ) {
      const arrayValues = value
        .split("\n")
        .map((item: any) => item.replace(/^•\s*/, ""));
      setJobFormData({ ...jobFormData, [id]: arrayValues });
    } else {
      setJobFormData({ ...jobFormData, [id]: value });
    }
  };

  const handleJobFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(jobFormData);
  };

  return (
    <ModalBase
      title={mode === "view" && selectedJob ? "Career Details" : "Add Career"}
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
        </div>
      ) : (
        <form onSubmit={handleJobFormSubmit}>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 flex flex-col">
              <label className="font-semibold">Job Title</label>
              <input
                id="jobTitle"
                type="text"
                placeholder="Job Title"
                value={jobFormData.jobTitle}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Company</label>
              <input
                id="company"
                type="text"
                placeholder="Company"
                value={jobFormData.company}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Department</label>
              <input
                id="department"
                type="text"
                placeholder="Department"
                value={jobFormData.department}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Location</label>
              <input
                id="location"
                type="text"
                placeholder="Location"
                value={jobFormData.location}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Type</label>
              <input
                id="type"
                type="text"
                placeholder="Type"
                value={jobFormData.type}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Starting At</label>
              <input
                id={compensationType === "salary" ? "salary" : "wage"}
                type="text"
                placeholder="$0.00"
                value={
                  compensationType === "salary"
                    ? jobFormData.salary
                    : jobFormData.wage
                }
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Compensation</label>
              <select
                id="compensationType"
                value={compensationType}
                onChange={(e) => setCompensationType(e.target.value)}
              >
                <option value="">Select Pay Type</option>
                <option value="salary">Salary</option>
                <option value="wage">Wage</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col">
              <label className="font-semibold">Description</label>
              <textarea
                id="description"
                placeholder="Description"
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label className="font-semibold">Requirements</label>
              <TextArea
                id="requirements"
                bullets={true}
                placeholder="Requirements"
                value={jobFormData.requirements.join("\n")}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label className="font-semibold">Qualifications</label>
              <TextArea
                id="qualifications"
                bullets={true}
                placeholder="Qualifications"
                value={jobFormData.qualifications.join("\n")}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label className="font-semibold">Benefits</label>
              <TextArea
                id="benefits"
                bullets={true}
                placeholder="Benefits"
                value={jobFormData.benefits.join("\n")}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label className="font-semibold">Schedule</label>
              <TextArea
                id="schedule"
                bullets={true}
                placeholder="Schedule"
                value={jobFormData.schedule.join("\n")}
                onChange={handleJobFormChange}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button text="Submit" type="button" />
          </div>
        </form>
      )}
    </ModalBase>
  );
};

export default JobModal;

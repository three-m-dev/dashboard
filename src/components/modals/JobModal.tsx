import { useState } from "react";
import { IJob } from "../../shared/interfaces";
import ModalBase from "../reusable/ModalBase";
import { formatKebab } from "../../utils/formatter";
import { Button, Dropdown, Input, TextArea } from "..";

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

  const handleSelect = (option: any) => {
    setCompensationType(option.value);
  };

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
              <Input
                type="text"
                name="jobTitle"
                value={jobFormData.jobTitle}
                onChange={handleJobFormChange}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Company</label>
              <Dropdown
                id="company"
                text="Company"
                options={[
                  { value: "three-m", label: "Three M" },
                  { value: "ultra-grip", label: "Ultra Grip" },
                ]}
                onSelect={handleSelect}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Department</label>
              <Dropdown
                id="department"
                text="Department"
                options={[
                  { value: "sales", label: "Sales" },
                  { value: "marketing", label: "Marketing" },
                ]}
                onSelect={handleSelect}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Location</label>
              <Dropdown
                id="location"
                text="Location"
                options={[
                  { value: "on-site", label: "On Site" },
                  { value: "remote", label: "Remote" },
                  { value: "hybrid", label: "Hybrid" },
                ]}
                onSelect={handleSelect}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Type</label>
              <Dropdown
                id="type"
                text="Type"
                options={[
                  { value: "full-time", label: "Full Time" },
                  { value: "part-time", label: "Part Time" },
                  { value: "contract", label: "Contract" },
                  { value: "internship", label: "Internship" },
                  { value: "temporary", label: "Temporary" },
                ]}
                onSelect={handleSelect}
              />
            </div>
            <div className="col-span-3 flex flex-col">
              <label className="font-semibold">Starting At</label>
              <Input
                type="text"
                name={compensationType === "salary" ? "salary" : "wage"}
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
              <Dropdown
                id="compensationType"
                text="Payment Type"
                onSelect={handleSelect}
                options={[
                  { value: "salary", label: "Salary" },
                  { value: "wage", label: "Wage" },
                ]}
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label className="font-semibold">Description</label>
              <TextArea
                id="description"
                bullets={false}
                placeholder="Description"
                value={jobFormData.description}
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
          <div className="flex justify-end">
            <Button text="Submit" type="button" />
          </div>
        </form>
      )}
    </ModalBase>
  );
};

export default JobModal;

import { useEffect, useState } from "react";
import useGetApplications from "../../hooks/useGetApplications";
import ArchiveIcon from "../../assets/icons/ArchiveIcon";

const ApplicantsTable = () => {
  const { applicationData, setPage, setPageSize, setSort } =
    useGetApplications();

  const initialPageSize = 10;
  const [localPage, setLocalPage] = useState<number>(1);
  const [localSort, setLocalSort] = useState<string>("applicant.firstName,ASC");

  const toggleArchiveModal = () => {};

  useEffect(() => {
    setPage(localPage);
    setPageSize(initialPageSize);
    setSort(localSort);
  }, [localPage, localSort, setPage, setPageSize, setSort]);

  return (
    <section>
      <div className="mx-auto">
        <div className="mb-4 overflow-x-auto rounded bg-white p-4 shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left text-xs text-gray-500">
                <th className="w-1/5 pb-2 pl-6 font-medium">Name</th>
                <th className="w-1/5 pb-2 font-medium">Date</th>
                <th className="w-1/5 pb-2 font-medium">Position</th>
                <th className="w-1/5 pb-2 font-medium">Status</th>
                <th className="w-1/5 pb-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicationData?.applications.map((application) => (
                <tr className="bg-gray-50 text-xs capitalize">
                  <td className="w-1/5 px-4 py-4 font-medium">
                    {application.applicant.firstName}{" "}
                    {application.applicant.lastName}
                  </td>
                  <td className="w-1/5 font-medium">{application.createdAt}</td>
                  <td className="w-1/5 font-medium">
                    {application.career.title}
                  </td>
                  <td className="w-1/5">
                    <span className="rounded bg-green-400 px-2 py-1 text-green-50">
                      {application.status}
                    </span>
                  </td>
                  <td className="w-1/5">
                    <div className="flex gap-2">
                      <button
                        onClick={toggleArchiveModal}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <ArchiveIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ApplicantsTable;

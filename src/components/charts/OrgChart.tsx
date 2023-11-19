import { Tree, TreeNode } from "react-organizational-chart";
import { ITeamMember } from "../../interfaces/ICommon";

type Props = {
  teamMembers: ITeamMember[];
};

const OrgChart = (props: Props) => {
  const renderTree = (teamMemberId: string) => {
    const teamMember = props.teamMembers.find((tm) => tm.id === teamMemberId);

    if (!teamMember) {
      return null;
    }

    const directReports = props.teamMembers.filter(
      (tm) => tm.directReport === teamMemberId,
    );

    return (
      <TreeNode
        key={teamMemberId}
        label={
          <div className="mx-auto w-52 overflow-hidden rounded-lg bg-white shadow-md">
            <div className="p-2">
              <h1 className="text-lg font-semibold text-gray-800">
                {teamMember.firstName + " " + teamMember.lastName}
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                {teamMember.department}
              </p>
              <p className="mt-1 text-sm text-gray-500">{teamMember.role}</p>
            </div>
          </div>
        }
      >
        {directReports.map((directReport) => (
          <>{renderTree(directReport.id)}</>
        ))}
      </TreeNode>
    );
  };

  const topLevelTeamMember = props.teamMembers.find(
    (teamMember) =>
      teamMember.directReport === "11111111-1111-1111-1111-111111111111",
  );

  if (!topLevelTeamMember) {
    return null;
  }

  return (
    <div className="h-full w-full overflow-auto">
      <Tree
        lineColor="#3b82f6"
        lineWidth="2px"
        label={
          <div className="mx-auto w-52 overflow-hidden rounded-lg bg-white shadow-md">
            <div className="p-2">
              <h1 className="text-lg font-semibold text-gray-800">
                {topLevelTeamMember.firstName +
                  " " +
                  topLevelTeamMember.lastName}
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                {topLevelTeamMember.department}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {topLevelTeamMember.role}
              </p>
            </div>
          </div>
        }
      >
        {topLevelTeamMember.id &&
          props.teamMembers
            .filter((tm) => tm.directReport === topLevelTeamMember.id)
            .map((tm) => renderTree(tm.id))}
      </Tree>
    </div>
  );
};

export default OrgChart;

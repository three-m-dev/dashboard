import { Link, useNavigate } from "react-router-dom";
import { IDepartment, ITeamMember } from "../../shared/interfaces";
import { useState } from "react";
import TeamMemberModal from "../modals/TeamMemberModal";

type Props = {
  teamMembers: ITeamMember[];
  departments: IDepartment[];
};

const TeamMembersTable = (props: Props) => {
  const [teamMemberModalOpen, setTeamMemberModalOpen] = useState(false);

  const navigate = useNavigate();

  const toggleTeamMemberModal = () => {
    setTeamMemberModalOpen(!teamMemberModalOpen);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {props.teamMembers.map((teamMember) => (
          <div className="mb-4 rounded bg-white p-10 shadow">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="mb-6 flex w-full px-4 lg:mb-0 lg:w-3/12">
                <img
                  className="mr-4 h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium">
                    {teamMember.firstName} {teamMember.lastName}
                  </p>
                  <p className="text-xs text-gray-500">{teamMember.email}</p>
                </div>
              </div>
              <div className="mb-6 w-1/2 px-4 lg:mb-0 lg:w-2/12">
                <a
                  className="rounded-full bg-purple-50 px-2 py-1 text-xs text-purple-500"
                  href="#"
                >
                  {teamMember.department}
                </a>
              </div>
              <div className="mb-6 w-1/2 px-4 lg:mb-0 lg:w-2/12">
                <p className="text-sm font-medium">{teamMember.company}</p>
              </div>
              <div className="mb-6 w-full px-4 lg:mb-0 lg:w-4/12">
                <a
                  className="mb-1 mr-2 inline-block rounded border px-2 py-1 text-xs lg:mb-0"
                  href="#"
                >
                  Marketing
                </a>
                <a
                  className="mb-1 mr-2 inline-block rounded border px-2 py-1 text-xs lg:mb-0"
                  href="#"
                >
                  Advertising
                </a>
                <a
                  className="mb-1 mr-2 inline-block rounded border px-2 py-1 text-xs lg:mb-0"
                  href="#"
                >
                  Sales
                </a>
                <a
                  className="mb-1 mr-2 inline-block rounded border px-2 py-1 text-xs lg:mb-0"
                  href="#"
                >
                  +2
                </a>
              </div>
              <div className="w-full px-4 lg:w-1/12">
                <div className="flex items-center">
                  <a className="mr-3 rounded bg-purple-100 p-2" href="#">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5602 5.21334L3.22683 0.546671C2.85849 0.363344 2.44258 0.298078 2.03579 0.359772C1.629 0.421466 1.25114 0.607118 0.953719 0.891415C0.656301 1.17571 0.4538 1.54482 0.373827 1.94841C0.293853 2.352 0.340299 2.77044 0.506832 3.14667L2.10683 6.72667C2.14314 6.81322 2.16183 6.90614 2.16183 7C2.16183 7.09386 2.14314 7.18678 2.10683 7.27334L0.506832 10.8533C0.371298 11.1578 0.314002 11.4913 0.34015 11.8236C0.366297 12.1558 0.47506 12.4763 0.656553 12.7558C0.838046 13.0353 1.08652 13.2651 1.37938 13.4241C1.67224 13.5832 2.00022 13.6666 2.3335 13.6667C2.64565 13.6636 2.95316 13.5907 3.2335 13.4533L12.5668 8.78667C12.8979 8.62013 13.1762 8.36487 13.3706 8.04939C13.5651 7.7339 13.668 7.3706 13.668 7C13.668 6.62941 13.5651 6.2661 13.3706 5.95062C13.1762 5.63513 12.8979 5.37988 12.5668 5.21334H12.5602ZM11.9668 7.59334L2.6335 12.26C2.51094 12.3188 2.37332 12.3388 2.23909 12.3172C2.10486 12.2956 1.98044 12.2335 1.88251 12.1392C1.78458 12.0449 1.71782 11.9229 1.69119 11.7896C1.66455 11.6563 1.67932 11.518 1.7335 11.3933L3.32683 7.81334C3.34746 7.76553 3.36527 7.71656 3.38017 7.66667H7.9735C8.15031 7.66667 8.31988 7.59643 8.4449 7.47141C8.56993 7.34638 8.64016 7.17681 8.64016 7C8.64016 6.82319 8.56993 6.65362 8.4449 6.5286C8.31988 6.40357 8.15031 6.33334 7.9735 6.33334H3.38017C3.36527 6.28345 3.34746 6.23448 3.32683 6.18667L1.7335 2.60667C1.67932 2.48198 1.66455 2.3437 1.69119 2.21038C1.71782 2.07706 1.78458 1.95507 1.88251 1.86077C1.98044 1.76647 2.10486 1.70436 2.23909 1.68277C2.37332 1.66119 2.51094 1.68116 2.6335 1.74L11.9668 6.40667C12.076 6.46262 12.1677 6.54761 12.2317 6.6523C12.2957 6.75699 12.3295 6.87731 12.3295 7C12.3295 7.1227 12.2957 7.24302 12.2317 7.34771C12.1677 7.45239 12.076 7.53739 11.9668 7.59334V7.59334Z"
                        fill="#382CDD"
                      ></path>
                    </svg>
                  </a>
                  <a className="rounded bg-purple-100 p-2" href="#">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9596 7.66662C11.8129 7.66662 11.6596 7.61995 11.5129 7.58662C11.2159 7.52117 10.924 7.43427 10.6396 7.32662C10.3303 7.21411 9.99034 7.21995 9.68512 7.34302C9.37989 7.4661 9.13097 7.69771 8.98624 7.99329L8.83958 8.29329C8.19025 7.93207 7.59357 7.48344 7.06625 6.95995C6.54276 6.43263 6.09413 5.83595 5.73291 5.18662L6.01291 4.99995C6.30849 4.85523 6.5401 4.60631 6.66317 4.30108C6.78625 3.99585 6.79209 3.65589 6.67958 3.34662C6.57373 3.06157 6.48687 2.76982 6.41958 2.47329C6.38625 2.32662 6.35958 2.17329 6.33958 2.01995C6.25862 1.55037 6.01266 1.12511 5.64599 0.820779C5.27932 0.516444 4.81604 0.353025 4.33958 0.359953H2.33958C2.05227 0.357255 1.76775 0.416495 1.50539 0.53364C1.24303 0.650784 1.00899 0.823083 0.819199 1.03881C0.629413 1.25453 0.488335 1.50862 0.405571 1.78376C0.322807 2.05891 0.300298 2.34866 0.339579 2.63329C0.694738 5.42621 1.97026 8.0212 3.96468 10.0084C5.9591 11.9955 8.55872 13.2616 11.3529 13.6066H11.6062C12.0979 13.6073 12.5725 13.427 12.9396 13.1C13.1505 12.9113 13.319 12.6801 13.4339 12.4215C13.5488 12.1629 13.6076 11.8829 13.6062 11.6V9.59995C13.5981 9.13688 13.4294 8.69099 13.1291 8.3384C12.8288 7.98581 12.4155 7.74837 11.9596 7.66662V7.66662ZM12.2929 11.6666C12.2928 11.7613 12.2725 11.8548 12.2334 11.941C12.1944 12.0272 12.1374 12.1041 12.0662 12.1666C11.9918 12.2309 11.9046 12.279 11.8105 12.3077C11.7164 12.3364 11.6173 12.3451 11.5196 12.3333C9.02285 12.0132 6.70374 10.8709 4.92806 9.08681C3.15238 7.30268 2.02119 4.97818 1.71291 2.47995C1.7023 2.3823 1.7116 2.28351 1.74025 2.18955C1.76889 2.09559 1.81629 2.00841 1.87958 1.93329C1.94205 1.86217 2.01895 1.80518 2.10516 1.7661C2.19138 1.72701 2.28492 1.70674 2.37958 1.70662H4.37958C4.53461 1.70317 4.68599 1.75387 4.80767 1.85C4.92935 1.94613 5.01372 2.08167 5.04624 2.23329C5.07291 2.41551 5.10625 2.59551 5.14625 2.77329C5.22326 3.12472 5.32575 3.47007 5.45291 3.80662L4.51958 4.23995C4.43978 4.27657 4.36799 4.32858 4.30835 4.39302C4.24871 4.45745 4.20238 4.53303 4.17203 4.61542C4.14167 4.6978 4.12789 4.78537 4.13148 4.8731C4.13506 4.96083 4.15594 5.04698 4.19291 5.12662C5.15238 7.18179 6.80441 8.83382 8.85958 9.79329C9.02189 9.85996 9.20394 9.85996 9.36625 9.79329C9.44939 9.76355 9.52579 9.71759 9.59103 9.65808C9.65626 9.59857 9.70902 9.52669 9.74625 9.44662L10.1596 8.51329C10.5042 8.63654 10.856 8.73894 11.2129 8.81995C11.3907 8.85995 11.5707 8.89329 11.7529 8.91995C11.9045 8.95248 12.0401 9.03684 12.1362 9.15852C12.2323 9.2802 12.283 9.43159 12.2796 9.58662L12.2929 11.6666Z"
                        fill="#382CDD"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="-mx-4 mt-2 flex flex-wrap items-center justify-between">
          <div className="mb-4 flex w-full items-center px-4 lg:mb-0 lg:w-1/3">
            <p className="text-xs text-gray-400">Show</p>
            <div className="mx-3 rounded border bg-white px-2 py-2 text-xs text-gray-500">
              <select name="" id="">
                <option value="1">10</option>
                <option value="1">15</option>
                <option value="1">20</option>
                <option value="1">50</option>
              </select>
            </div>
            <p className="text-xs text-gray-400">of 1200</p>
          </div>
          <div className="flex w-full items-center justify-center px-4 lg:w-auto">
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              <svg
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.53335 3.99999L4.86668 1.66666C5.13335 1.39999 5.13335 0.999992 4.86668 0.733325C4.60002 0.466659 4.20002 0.466659 3.93335 0.733325L1.13335 3.53333C0.866683 3.79999 0.866683 4.19999 1.13335 4.46666L3.93335 7.26666C4.06668 7.39999 4.20002 7.46666 4.40002 7.46666C4.60002 7.46666 4.73335 7.39999 4.86668 7.26666C5.13335 6.99999 5.13335 6.59999 4.86668 6.33333L2.53335 3.99999Z"
                  fill="#A4AFBB"
                ></path>
              </svg>
            </a>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              1
            </a>
            <span className="mr-3 inline-block">
              <svg
                className="h-3 w-3 text-gray-200"
                viewBox="0 0 12 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded bg-indigo-500 text-xs text-white"
              href="#"
            >
              12
            </a>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              13
            </a>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              14
            </a>
            <span className="mr-3 inline-block">
              <svg
                className="h-3 w-3 text-gray-200"
                viewBox="0 0 12 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <a
              className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs hover:bg-indigo-50"
              href="#"
            >
              62
            </a>
            <a
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              <svg
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.88663 3.52667L2.05996 0.700006C1.99799 0.637521 1.92425 0.587925 1.84301 0.554079C1.76177 0.520233 1.67464 0.502808 1.58663 0.502808C1.49862 0.502808 1.41148 0.520233 1.33024 0.554079C1.249 0.587925 1.17527 0.637521 1.1133 0.700006C0.989128 0.824915 0.919434 0.993883 0.919434 1.17001C0.919434 1.34613 0.989128 1.5151 1.1133 1.64001L3.4733 4.00001L1.1133 6.36001C0.989128 6.48491 0.919434 6.65388 0.919434 6.83001C0.919434 7.00613 0.989128 7.1751 1.1133 7.30001C1.17559 7.36179 1.24947 7.41068 1.33069 7.44385C1.41192 7.47703 1.49889 7.49385 1.58663 7.49334C1.67437 7.49385 1.76134 7.47703 1.84257 7.44385C1.92379 7.41068 1.99767 7.36179 2.05996 7.30001L4.88663 4.47334C4.94911 4.41136 4.99871 4.33763 5.03256 4.25639C5.0664 4.17515 5.08383 4.08801 5.08383 4.00001C5.08383 3.912 5.0664 3.82486 5.03256 3.74362C4.99871 3.66238 4.94911 3.58865 4.88663 3.52667Z"
                  fill="#A4AFBB"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersTable;

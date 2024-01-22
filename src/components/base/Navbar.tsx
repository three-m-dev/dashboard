import ListIcon from "../../assets/icons/ListIcon";
import { useGeneralContext } from "../../hooks/useGeneral";

type NavbarProps = {
  onToggleSidebar: () => void;
};

const Navbar = (props: NavbarProps) => {
  const { state } = useGeneralContext();
  const { user } = state;

  return (
    <section className="bg-white p-4">
      <nav className="relative">
        <div className="flex items-center">
          <div className="mr-auto items-center">
            <button
              onClick={props.onToggleSidebar}
              className="rounded-md bg-blue-50 px-2.5 py-2.5 text-primary hover:bg-blue-100"
            >
              <ListIcon />
            </button>
          </div>

          <div className="hidden lg:block">
            <button className="flex items-center">
              <div className="mr-3">
                <p className="text-sm">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-500">{user.title}</p>
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-100 text-lg text-gray-400">
                {user.firstName[0]}
              </div>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;

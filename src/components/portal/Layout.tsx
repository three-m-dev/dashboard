import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-grow">
        <div className="w-64">
          <Sidebar />
        </div>
        <main className="flex-grow mt-14 bg-red-50">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NewSide from "./NewSide";

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen">
      {/* <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      /> */}
      <NewSide />
      <div className="flex flex-1 flex-col">
        <Navbar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex flex-1 flex-col overflow-auto bg-gray-50 p-4">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

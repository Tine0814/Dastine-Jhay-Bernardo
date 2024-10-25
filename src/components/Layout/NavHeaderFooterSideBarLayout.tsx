import SideBarComponent from "../SideBarComponent";
import HeaderComponent from "../HeaderComponent";
import { ReactNode, useState } from "react";

type NavHeaderFooterSideBarProps = {
  children: ReactNode;
};

const NavHeaderFooterSideBarLayout = ({
  children,
}: NavHeaderFooterSideBarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex h-screen bg-gray-50 text-gray-900">
        <SideBarComponent isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <HeaderComponent onClick={toggleSidebar} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default NavHeaderFooterSideBarLayout;

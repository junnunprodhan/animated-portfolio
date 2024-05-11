import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { Toaster } from "sonner";

const DashboardLayout = () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);
  const closeSideNav = () => {
    setIsOpenSideNav(!isOpenSideNav);
  };
  return (
    <div className="flex flex-col md:flex-row">
       <Toaster richColors />
      <button
        onClick={() => setIsOpenSideNav(!isOpenSideNav)}
        className="px-5 pt-3 w-full md:hidden block"
      >
        <MdMenu className="h-10 w-10" />
      </button>
      <div className="w-0 md:w-1/5 bg-gray-800">
        <div className="">
          <DashboardSidebar />
        </div>
      </div>
      <div className="w-full md:w-4/5 ">
        <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%2380877f' fill-opacity='0.11'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
         className="bg-gray-100 h-full">
          <Outlet />
        </div>
      </div>

      <MobileSidebar
        closeSideNav={closeSideNav}
        isOpenSideNav={isOpenSideNav}
      />
    </div>
  );
};

export default DashboardLayout;

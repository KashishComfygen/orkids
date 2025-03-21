import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
// import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
// import AppSettings from "../../pages/AppSettings/index";
// import layoutJSON from "./layout.json";

function Layout() {
  return (
    <div className="overflow-hidden bg-gray-100">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="h-screen flex overflow-hidden">
          {/* Sidebar */}
          {/* <Sidebar SidebarJSON={layoutJSON.sidebarJSON} /> */}

          {/* Main Content */}
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            {/* <Header HeaderJSON={layoutJSON.headerJSON} /> */}

            {/* Define Routes inside Layout */}
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>

            {/* Ensure nested routes render correctly */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
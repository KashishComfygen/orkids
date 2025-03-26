import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
// import AppSettings from "../../pages/AppSettings/index";
import UserManagement from "../../pages/userManagement/UserManagement";
import layoutJSON from "./layout.json";
import StudentManagements from "../../pages/studentManagement/studentManagement";
import LanguageManagement from "../../pages/languageManagement/LanguageManagement";
import Introduction from "../../pages/Introduction/Introduction";
import StaticAudio from "../../pages/staticAudio/StaticAudio";
import Question from "../../pages/Question/Question";
import Service from "../../pages/Service/Service";
import LoginHistory from "../../pages/LoginHistory/LoginHistory";
import Report from "../../pages/ReportManagement/ReportManagement";
import FirstScreen from "../../pages/FirstScreen/FirstScreen";
import BoardManagement from "../../pages/BoardManagement/BoardManagement";
import Skillindicator from "../../pages/SkillIndicator/SkillIndicator";
import LanguageSetting from "../../pages/LanguageSetting/LanguageSetting";
import Notification from "../../pages/Notification/Notification";
import Donate from "../../pages/Donate/Donate";
import Help from "../../pages/Help/Help";
function Layout() {
  return (
    <div className="overflow-hidden bg-gray-100">
      <div className="min-h-screen flex flex-col justify-center">
      <Header HeaderJSON={layoutJSON.headerJSON} />
        <div className="h-screen flex overflow-hidden">
          {/* Sidebar */}
          <Sidebar SidebarJSON={layoutJSON.sidebarJSON} />

          {/* Main Content */}
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
        

            {/* Define Routes inside Layout */}
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="user-management" element={<UserManagement />} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="studentManagement" element={<StudentManagements />} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="lanugageManagement" element={<LanguageManagement />} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="introduction" element={<Introduction/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="StaticAudio" element={<StaticAudio/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="question" element={<Question/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="service" element={<Service/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="loginHistory" element={<LoginHistory/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="reportManagement" element={<Report/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="FirstScreen" element={<FirstScreen/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="boardManagement" element={<BoardManagement/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="skillindicator" element={<Skillindicator/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="languageSetting" element={<LanguageSetting/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="notification" element={<Notification/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="donate" element={<Donate/>} />
              {/* <Route path="app-settings" element={<AppSettings />} /> */}
            </Routes>
            <Routes>
            <Route path="help" element={<Help/>} />
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
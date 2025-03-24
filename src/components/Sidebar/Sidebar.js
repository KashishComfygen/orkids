import React from "react";
import { Link, useLocation, } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import { MdOutlineMovieCreation } from "react-icons/md";
import { BsBuildingFillGear } from "react-icons/bs";
import { PiChatsBold } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { BsCalendar3Event } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { LiaDonateSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiProjectorScreen } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaLanguage } from "react-icons/fa";
import { AiTwotoneAudio } from "react-icons/ai";
function Sidebar() {

  const location = useLocation();

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  let handlelogOut = () => {
    confirmAlert({
      title: '',
      message: `Are you sure want to Logout ?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            window.sessionStorage.removeItem('adminUser');
            window.location.replace('/login');
            window.location.reload()
          }
        },
        {
          label: 'No'
        }
      ]
    });
  }


  return (
    <>
      <button className={` ${navbarOpen ? 'hidden' : 'flex'} absolute top-0 left-0 px-5 items-center justify-center border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-800 focus:text-gray-600 z-50 h-16 xl:hidden `} onClick={() => setNavbarOpen(!navbarOpen)}>
        <MdMenu className=" h-10 w-10" />
      </button>
      <div style={{ fontFamily: 'Roboto Condensed' }} className={`${!navbarOpen ? 'hidden' : 'flex'} fixed h-screen left-0 inset-y-0 xl:static xl:flex  w-64 z-50 flex-col`} >
        <div className="flex flex-col w-64 relative flex-1 h-full  ">
          <div onClick={() => setNavbarOpen(prev => !prev)}
            className=" absolute right-0  top-5 z-50 block xl:hidden bg-[#1E5EFF] rounded-full "><IoCloseSharp className=" p-1 text-white h-5 w-5" /></div>
          <nav className="overflow-y-auto border bg-white flex flex-col h-[90vh] flex-wrap items-center justify-between relative w-64 z-10 px-3 py-2 m-3 rounded-lg ">
            <div className="px-0 flex flex-col flex-wrap h-full items-center w-full mx-auto flex-1">
              <div className={"relative z-40 flex-1 h-screen w-full space-y-1"}>
                <Link to={"/app/dashboard"} className={`items-center  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/dashboard" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <MdDashboard /> Dashboard
                </Link>
                <Link to={"/app/user-management"} className={`items-center whitespace-nowrap  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/userManagement" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <FaUserFriends /> User Management
                </Link>
                <Link to={"/app/studentManagement"} className={`items-center whitespace-nowrap  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/studentManagement" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <FaUserFriends /> Student Management
                </Link>
                
                <Link to={"/app/lanugageManagement"} className={`items-center whitespace-nowrap  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/lanugageManagement" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <FaLanguage className=" text-2xl" /> Language Management
                </Link>






                <Link
                  to={"/app/introduction"}
                  className={`items-center mt-1 font-bold hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700 flex justify-start px-5 py-3 rounded gap-4 ${location.pathname.startsWith("/app/introduction")
                    ? "text-blue-700 bg-[#7dd3fc]"
                    : ""
                    }`}
                >
                  <RiProfileFill />Introduction
                </Link>



                <Link
                  to={"/app/StaticAudio"}
                  className={`items-center whitespace-nowrap mt-1 font-bold hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700 flex justify-start px-5 py-3 rounded gap-4 ${location.pathname.startsWith("/app/StaticAudio")
                    ? "text-blue-700 bg-[#7dd3fc]"
                    : ""
                    }`}
                >
                  <AiTwotoneAudio />Audio Files
                </Link>



                <Link
                  to={"/app/question"}
                  className={`items-center mt-1 font-bold hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700 flex justify-start px-5 py-3 rounded gap-4 ${location.pathname.startsWith("/app/question")
                    ? "text-blue-700 bg-[#7dd3fc]"
                    : ""
                    }`}
                >
                  <BsCalendar3Event />Questions
                </Link>


                <Link
                  to={"/app/service"}
                  className={`items-center mt-1 font-bold hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700 flex justify-start px-5 py-3 rounded gap-4 ${location.pathname.startsWith("/app/service")
                    ? "text-blue-700 bg-[#7dd3fc]"
                    : ""
                    }`}
                >
                  <MdOutlineMovieCreation />Service
                </Link>




                <Link to={"/app/loginHistory"} className={`items-center whitespace-nowrap  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/loginHistory" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <MdManageAccounts /> Login History
                </Link>
                <Link
                  to={"/app/reportManagement"}
                  className={`items-center whitespace-nowrap mt-1 font-bold hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700 flex justify-start px-5 py-3 rounded gap-4 ${location.pathname.startsWith("/app/report")
                    ? "text-blue-700 bg-[#7dd3fc]"
                    : ""
                    }`}
                >
                  <PiChatsBold /> Report Management
                </Link>



                <Link to={"/app/FirstScreen"} className={`items-center whitespace-nowrap  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/FirstScreen" ? "text-blue-700 bg-[#7dd3fc]" : ""}`}>
                  <PiProjectorScreen /> First Screen
                </Link>





                <Link to={"/app/boardManagement"} className={`items-center whitespace-nowrap  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/boardManagement" ? "text-blue-700 bg-[#7dd3fc]" : ""}`}>
                  <FaSchool /> Board Management
                </Link>
                <Link to={"/app/skillindicator"} className={`items-center whitespace-nowrap  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/skillindicator" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <GiSkills /> Skill Indicator
                </Link>
                {/* <Link to={"/app/languageSetting"} className={`items-center whitespace-nowrap  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/languageSetting" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <LuLanguages /> Language Setting
                </Link> */}



                <Link
                  to={"/app/languageSetting"}
                  className={`items-center mt-1 font-bold hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700 flex justify-start px-5 py-3 rounded gap-4 ${location.pathname.startsWith("/app/languageSetting")
                    ? "text-blue-700 bg-[#7dd3fc]"
                    : ""
                    }`}
                >
                  <MdOutlineMovieCreation />Language Setting
                </Link>






                <Link to={"/app/notification"} className={`items-center  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/notification" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <IoIosNotificationsOutline /> Notification
                </Link>

                <Link to={"/app/donate"} className={`items-center  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/donate" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <LiaDonateSolid /> Donate
                </Link>


                <Link to={"/app/help"} className={`items-center  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 ${location.pathname === "/app/help" ? "text-blue-700  bg-[#7dd3fc]" : ""}`}>
                  <TfiHeadphoneAlt /> Help
                </Link>

                <div onClick={handlelogOut} to={"/app/help"} className={`items-center  mt-1 font-bold  hover:bg-[#7dd3fc] text-gray-600 hover:text-blue-700  flex justify-start  px-5 py-3 rounded gap-4 `}>
                  <IoLogOut /> Logout
                </div>

              </div>
            </div>
          </nav>
        </div >

      </div >
    </>
  );
}

export default Sidebar;

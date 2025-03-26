/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import HelpJSON from './Help.json';
import { IoMdSearch } from 'react-icons/io';
import { TbMessage } from "react-icons/tb";
import ReactPaginate from 'react-paginate';
import Tooltip from '@mui/material/Tooltip';

const Help = () => {
  // Static dummy data
  const dummyObject = {
    data: {
      total: 147,
      list: [
        {
          userId: {
            _id: "67c57b0c9950159b858432e9",
            mobNo: "+918527892848",
            roleId: 2,
            email: "dedhatanvi78@gmail.com",
            fullName: "Tanvi ",
            type: "TEACHER"
          },
          msg: "Difficulty to reading and writing ",
          ticketNo: "8398769041",
          isResolve: false,
          createdAt: 1740995919478,
          id: "67c57d4f9950159b85843aa8"
        },
        {
          userId: {
            _id: "67c57b0c9950159b858432e9",
            mobNo: "+918527892848",
            roleId: 2,
            email: "dedhatanvi78@gmail.com",
            fullName: "Tanvi ",
            type: "TEACHER"
          },
          msg: "No",
          ticketNo: "3668536632",
          isResolve: false,
          createdAt: 1740995885965,
          id: "67c57d2d9950159b85843a92"
        },
        {
          userId: {
            _id: "67b3083b1a771e0378b0015c",
            mobNo: "+919914240904",
            roleId: 2,
            email: "gurvanshsingh45835@gmail.com",
            fullName: "GURVANSH SINGH",
            type: "TEACHER"
          },
          msg: "Good knowledge ",
          ticketNo: "5920873171",
          isResolve: false,
          createdAt: 1739786612418,
          id: "67b309741a771e0378b00b08"
        },
        {
          userId: {
            _id: "67ab2e8c1a771e0378afa6bf",
            mobNo: "+918433098074",
            roleId: 2,
            email: "madhuribhardwaj97@gmail.com",
            fullName: "Madhuri Bhardwaj",
            type: "TEACHER"
          },
          msg: "The child is unable to write properly from frequently 6 months",
          ticketNo: "0554067358",
          isResolve: false,
          createdAt: 1739272329029,
          id: "67ab30891a771e0378afa6f3"
        },
        {
          userId: {
            _id: "67ab1f0b1a771e0378af4e13",
            mobNo: "+919460845674",
            roleId: 2,
            email: "ammichandammichand56@gmail.com",
            fullName: "Ammi Chand Meena ",
            type: "TEACHER"
          },
          audio: "https://res.cloudinary.com/dnd2isyjo/video/upload/v1739268426/your_folder_name/vrwfkkmukgs6fexfny0i.mp4",
          ticketNo: "3859533808",
          isResolve: false,
          createdAt: 1739268432054,
          id: "67ab21501a771e0378af60a9"
        }
      ]
    }
  };

  const [searchKeyword, setSearchKeyword] = useState("");

  // Handle Search
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  // Pagination
  const [size, setSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1">
        <div className="w-full h-full max-w-[100vw]">
          <div className="flex justify-between p-5">
            <div className="font-semibold text-2xl">{HelpJSON.Heading}</div>
          </div>
          <div className="md:py-0 md:px-10">
            <div className="flex flex-col items-start gap-4 text-[#7E84A3]">
              <div className="max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2">
                <IoMdSearch className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  className="flex-grow h-full outline-none text-sm"
                  onChange={handleSearch}
                  value={searchKeyword}
                  type="text"
                  placeholder="Search By Ticket Number"
                />
              </div>
            </div>

            {/* Table */}
            <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4">
                <thead className="text-[14px] text-[#5A607F] w-full bg-white capitalize">
                  <tr>
                    <th className="px-6 whitespace-nowrap font-bold py-3 w-1/6">Name & Mobile Number</th>
                    <th className="px-6 py-1 w-1/6 font-bold">Title</th>
                    <th className="px-6 py-1 w-1/6 font-bold">Reply</th>
                    <th className="px-6 py-1 w-1/6 whitespace-nowrap font-bold">Ticket Number</th>
                    <th className="px-6 py-1 w-1/6 whitespace-nowrap font-bold">Date/Time</th>
                    <th className="px-6 py-1 w-1/6 font-bold">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {dummyObject.data.list.map((e, i) => (
                    <tr key={i} className="bg-white w-full border-b hover:bg-gray-50">
                      <td className="w-4 px-4">
                        <div className="flex flex-col items-start justify-start">
                          <Tooltip title={e.userId.fullName || ""} arrow>
                            <div
                              className="w-40"
                              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                            >
                              {e.userId.fullName || ""}
                            </div>
                          </Tooltip>
                          <Tooltip title={e.userId.mobNo || ""} arrow>
                            <div
                              className="w-40"
                              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                            >
                              {e.userId.mobNo || ""}
                            </div>
                          </Tooltip>
                        </div>
                      </td>

                      <td className="w-4 px-4">
                        <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                          {e.audio ? (
                            <audio className="flex justify-start" controls>
                              <source src={e.audio} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          ) : (
                            <Tooltip title={e.msg || "--"} arrow>
                              <div
                                className="w-40"
                                style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                              >
                                {e.msg || "--"}
                              </div>
                            </Tooltip>
                          )}
                        </div>
                      </td>

                      <td className="w-4 px-4">
                        <div className="flex gap-2 items-center text-4xl cursor-pointer space-x-6 whitespace-nowrap">
                          <div title="Reply">
                            <TbMessage />
                          </div>
                        </div>
                      </td>

                      <td className="w-4 px-4">
                        <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">{e.ticketNo || "--"}</div>
                      </td>

                      <td className="w-4 px-4">
                        <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                          <Tooltip title={e.createdAt ? new Date(e.createdAt).toLocaleString() : "--"} arrow>
                            <div
                              className="w-40"
                              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                            >
                              {e.createdAt ? new Date(e.createdAt).toLocaleString() : "--"}
                            </div>
                          </Tooltip>
                        </div>
                      </td>

                      <td className="flex px-6 py-2 gap-3">
                        {e.isResolve ? (
                          <div className="bg-green-500 p-3 rounded-full cursor-pointer font-bold text-white">
                            Resolved
                          </div>
                        ) : (
                          <div className="bg-yellow-500 p-3 rounded-full cursor-pointer font-bold text-white">
                            Pending
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {/* <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(dummyObject.data.total / size)}
              marginPagesDisplayed={0}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-cls"}
              activeClassName={"active"}
              forcePage={currentPage}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;

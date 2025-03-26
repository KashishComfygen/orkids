/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import ReactPaginate from 'react-paginate';

// Static login history data
const loginHistoryData = {
  total: 2,
  list: [
    {
      userId: {
        _id: "67e395699950159b8584a13a",
        mobNo: "+918178141910",
        email: "poonampal1307@gmail.com",
        fullName: "Poonam Pal",
        type: "TEACHER",
      },
      desc: null,
      ipAddress: "192.168.1.1",
      device: "Windows 10",
      status: true,
      createdAt: 1742968169981,
      id: "67e395699950159b8584a13c",
    },
    {
      userId: {
        _id: "67e289839950159b8584a041",
        mobNo: "+917976860869",
        email: null,
        fullName: "John Doe",
        type: "STUDENT",
      },
      desc: null,
      ipAddress: "172.16.0.2",
      device: "MacBook Pro",
      status: true,
      createdAt: 1742899587943,
      id: "67e289839950159b8584a043",
    },
  ],
};

const LoginHistory = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const size = 10; // Page size

  // Filtered list based on search
  const filteredList = loginHistoryData.list.filter((entry) =>
    entry.userId.fullName?.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // Handle search input
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <>
      <div className="h-[90vh] w-full overflow-y-scroll py-2 md:px-5 px-1">
        <div className="w-full h-full max-w-[100vw]">
          <div className="flex justify-between p-5">
            <div className="font-semibold text-2xl whitespace-nowrap">
              Login History
            </div>
          </div>
          <div className="md:py-10 md:px-10">
            {/* Search Bar */}
            <div className="flex flex-col items-start gap-4 text-[#7E84A3]">
              <div className="max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2">
                <SearchIcon className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  className="flex-grow h-full outline-none text-sm"
                  onChange={handleSearch}
                  value={searchKeyword}
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Table */}
            <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left text-gray-500 divide-y-4">
                <thead className="text-[14px] text-[#5A607F] bg-white capitalize">
                  <tr>
                    <th className="px-6 py-2 whitespace-nowrap font-bold">User Name</th>
                    <th className="px-6 py-2 whitespace-nowrap font-bold">Email</th>
                    <th className="px-6 py-2 whitespace-nowrap font-bold">Mobile Number</th>
                    <th className="px-6 py-2 whitespace-nowrap font-bold">Device</th>
                    <th className="px-6 py-2 whitespace-nowrap font-bold">IP Address</th>
                    <th className="px-6 py-2 whitespace-nowrap font-bold">Type</th>
                    <th className="px-6 py-2 whitespace-nowrap font-bold">Created At</th>
                  </tr>
                </thead>
                <tbody className="divide-y-4">
                  {filteredList.length > 0 ? (
                    filteredList
                      .slice(currentPage * size, (currentPage + 1) * size)
                      .map((e, i) => (
                        <tr key={i} className="bg-white border-b hover:bg-gray-50">
                          <td className="px-6 py-2 whitespace-nowrap">
                            <Tooltip title={e.userId.fullName || "--"} arrow>
                              <div className="w-36 overflow-hidden text-ellipsis">
                                {e.userId.fullName || "--"}
                              </div>
                            </Tooltip>
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap">
                            <Tooltip title={e.userId.email || "--"} arrow>
                              <div className="w-36 overflow-hidden text-ellipsis">
                                {e.userId.email || "--"}
                              </div>
                            </Tooltip>
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap">{e.userId.mobNo || "--"}</td>
                          <td className="px-6 py-2 whitespace-nowrap">{e.device || "--"}</td>
                          <td className="px-6 py-2 whitespace-nowrap">
                            <Tooltip title={e.ipAddress || "--"} arrow>
                              <div className="w-20 overflow-hidden text-ellipsis">{e.ipAddress || "--"}</div>
                            </Tooltip>
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap">
                            <Tooltip title={e.userId.type || "--"} arrow>
                              <div className="w-20 overflow-hidden text-ellipsis">{e.userId.type || "--"}</div>
                            </Tooltip>
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap">
                            {e.createdAt ? new Date(e.createdAt).toLocaleString() : "--"}
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4">
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredList.length > size && (
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={Math.ceil(filteredList.length / size)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-cls'}
                activeClassName={'active'}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginHistory;

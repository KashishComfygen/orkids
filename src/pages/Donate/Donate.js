/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/scope */
import React, { useState } from 'react';
import DonateJSON from './Donate.json'
import { IoMdSearch } from "react-icons/io";
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from 'react-paginate';
import Loading from "../../components/Loader/Loader"

const Donate = () => {
  // Static data
  const dummyObject = {
    list: [
      {
        fullName: null,
        mobNo: null,
        email: null,
        panCard: null,
        orderId: "order_NlnF4sx1k5RYJD",
        receiptId: "3658903659",
        currency: "INR",
        userId: {
          _id: "65e0545e094e3a153d09a2d6",
          mobNo: "234342243",
          email: "fff@ffv.com",
          fullName: "Cfff",
          type: "TEACHER"
        },
        amount: 199,
        status: false,
        isDisable: false,
        isDeleted: false,
        date: 1710268200000,
        week: 1710009000000,
        month: 1709231400000,
        year: 1704047400000,
        createdAt: 1710322791336,
        id: "65f174677d23d9221c8986b6"
      }
    ]
  };

  let [searchKeyword, setsearchKeyword] = useState("")

  //--------Pagination-------------------------
  const [size, setSize] = useState(10);
  const [isMobile, setIsMobile] = useState(true);
  let [page, setPage] = useState(1)
  //--------Pagination-------------------------
  let [offset, setoffset] = useState(0)
 
  const handleSearch = (e) => {
    setsearchKeyword(e.target.value)
  };

  const handlePageClick = (data) => {
    setoffset(Math.ceil(data.selected * 10))
    setPage(data.selected + 1)
  };

  return (
    <>
      <Loading />
      <div className=' h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
        <div className=' w-full h-full max-w-[100vw]'>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className=' font-semibold text-2xl whitespace-nowrap'>{DonateJSON.Heading}</div>
          </div>

          <div className='md:py-10 md:px-10'>
            <div className=''>
              <div className='flex flex-col items-start gap-4 text-[#7E84A3]'>
                <div className=' max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2'>
                  <IoMdSearch className='w-6 h-6 text-gray-400 ml-2' />
                  <input
                    className='flex-grow h-full outline-none text-sm'
                    onChange={(e) => handleSearch(e)}
                    value={searchKeyword}
                    type='text'
                    placeholder='Search '
                  />
                </div>
              </div>

              {/* Table  */}
              <div className=''>
                <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5 ">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4">
                    <thead className="text-[14px] text-[#5A607F] w-full bg-white capitalize">
                      <tr className='w-full'>
                        <th scope="col" className="px-6 whitespace-nowrap font-bold py-3">Full Name</th>
                        <th scope="col" className="px-6 py-1 font-bold">Email</th>
                        <th scope="col" className="px-6 whitespace-nowrap py-3 font-bold">Mobile Number</th>
                        <th scope="col" className="px-6 py-1 font-bold">Date</th>
                        <th scope="col" className="px-6 py-1 font-bold">Amount</th>
                        <th scope="col" className="px-6 py-1 font-bold">Order No.</th>
                        <th scope="col" className="px-6 py-1 font-bold">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className=' divide-y-4'>
                      {dummyObject && dummyObject.list && Array.isArray(dummyObject.list) && dummyObject.list.length > 0 && dummyObject.list.map((e, i) => (
                        <tr key={i} className='bg-white'>
                          <td scope="col" className="px-6 whitespace-nowrap font-normal py-1">
                            {e?.userId?.fullName || "--"}
                          </td>
                          <td scope="col" className="px-6 py-4 font-normal">
                            {e?.userId?.email || "--"}
                          </td>
                          <td scope="col" className="px-6 whitespace-nowrap py-1 font-normal">
                            {e?.userId?.mobNo || "--"}
                          </td>
                          <td scope="col" className="px-6 py-1 font-normal">
                            {e?.createdAt ? new Date(e.createdAt).toLocaleString() : "--"}
                          </td>
                          <td scope="col" className="px-6 py-1 font-normal">
                            {e?.amount || "--"}
                          </td>
                          <td scope="col" className="px-6 py-1 font-normal">
                            {e?.orderId || "--"}
                          </td>
                          <td scope="col" className="px-6 py-1 font-normal">
                            {e?.receiptId || "--"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {isMobile ? (
                dummyObject.list.length > 10 ? (
                  <ReactPaginate
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(dummyObject.list.length / size)}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-cls'}
                    activeClassName={'active'}
                  />
                ) : null
              ) : (
                dummyObject.list.length > 10 ? (
                  <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(dummyObject.list.length / size)}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-cls'}
                    activeClassName={'active'}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;

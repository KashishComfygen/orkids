/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import SkillManagementJSON from './SkillManagement.json';
import Model from './Modle/Model';
import Modelupdate from './Modle/Modelupdate';
import { IoMdSearch } from "react-icons/io";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from 'react-paginate';
import Tooltip from '@mui/material/Tooltip';
import Loading from "../../components/Loader/Loader";


const Notification = () => {
  // Static data from your example
  const staticData = {
    list: [
      {
        msg: {
          notificationMsg: 'test Notification2222',
          title: 'Send Notification32432',
          image: 'https://res.cloudinary.com/dnd2isyjo/image/upload/v1710423782/your_folder_name/fc2srlwftn1cspv80mwb.jpg',
          id: '65fc3869c3f4a3d4f20105a7'
        },
        createdAt: 1711028329730,
        id: '65fc3869c3f4a3d4f20105aa'
      },
      {
        type: 'PARENT',
        msg: {
          notificationMsg: 'fdsfdsf',
          title: 'dsfds',
          image: '',
          id: '65fc3a62cf3409ec14fe2f20'
        },
        createdAt: 1711028834949,
        id: '65fc3a62cf3409ec14fe2f23'
      },
      {
        type: 'TEACHER',
        msg: {
          notificationMsg: 'asdsad',
          title: 'teach',
          image: '',
          id: '65fd5981e36a856408e615e1'
        },
        createdAt: 1711102338051,
        id: '65fd5982e36a856408e615e4'
      },
      {
        type: 'TEACHER',
        msg: {
          notificationMsg: 'test Notification2222',
          title: 'Send Notification32432',
          image: 'https://res.cloudinary.com/dnd2isyjo/image/upload/v1710423782/your_folder_name/fc2srlwftn1cspv80mwb.jpg',
          id: '667145e30d1e978dab209615'
        },
        createdAt: 1718699492313,
        id: '667145e40d1e978dab209618'
      },
      {
        type: 'ALL',
        msg: {
          notificationMsg: 'test Notification2222',
          title: 'Send Notification32432',
          image: 'https://res.cloudinary.com/dnd2isyjo/image/upload/v1710423782/your_folder_name/fc2srlwftn1cspv80mwb.jpg',
          id: '6671471f18f1f11e7e1b1fb5'
        },
        createdAt: 1718699807498,
        id: '6671471f18f1f11e7e1b1fb8'
      },
      {
        type: 'ALL',
        msg: {
          notificationMsg: 'fgvasdv',
          title: 'asdf',
          image: '',
          id: '66714cc033a3de3527e6d910'
        },
        createdAt: 1718701248722,
        id: '66714cc033a3de3527e6d913'
      },
      {
        type: 'PARENT',
        msg: {
          notificationMsg: 'fghy',
          title: 'gthy',
          image: '',
          id: '66a39a37e3871483efa1e1a4'
        },
        createdAt: 1721997879840,
        id: '66a39a37e3871483efa1e1a7'
      },
      {
        type: 'ALL',
        msg: {
          notificationMsg: 'gdfgdfsg',
          title: 'dfd',
          image: '',
          id: '66a39a4ee3871483efa1e1b2'
        },
        createdAt: 1721997902399,
        id: '66a39a4ee3871483efa1e1b5'
      }
    ],
    total: 8
  };

  let [openAddmodel, setopenAddmodel] = useState(false);
  let [searchKeyword, setsearchKeyword] = useState("");
  let [size, setSize] = useState(10);

  const handleSearch = (e) => {
    setsearchKeyword(e.target.value);
  };

  useEffect(() => {
    // Static data doesn't require a dispatch call, so we'll use it directly
  }, [searchKeyword]);

  const handlePageClick = (data) => {
    // Pagination logic for static data
  };

  // Pagination controls
  let isMobile = true; // Simulate for mobile view, change as needed.

  return (
    <>
      <Loading loading={false} />
      <div className='h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
        <div className='w-full h-full max-w-[100vw]'>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className='font-semibold text-2xl'>{SkillManagementJSON.Heading}</div>
            <div onClick={() => setopenAddmodel(true)}>
              <Button data={"Notification"} />
            </div>
          </div>
          <div className='md:py-10 md:px-10'>
            <div className=''>
              <div className='flex flex-col items-start gap-4 text-[#7E84A3]'>
                <div className='max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2'>
                  <IoMdSearch className='w-6 h-6 text-gray-400 ml-2' />
                  <input
                    className='flex-grow h-full outline-none text-sm'
                    onChange={(e) => handleSearch(e)}
                    value={searchKeyword}
                    type='text'
                    placeholder='Search Type ... '
                  />
                </div>
              </div>

              <div className=''>
                <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4">
                    <thead className="text-[14px] text-[#5A607F] bg-white capitalize">
                      <tr>
                        <th className="px-6 whitespace-nowrap font-bold py-3">Title</th>
                        <th className="px-6 whitespace-nowrap font-bold py-3">Message</th>
                        <th className="px-6 whitespace-nowrap font-bold py-3">Type</th>
                        <th className="px-6 whitespace-nowrap font-bold py-3">Image</th>
                        <th className="px-6 whitespace-nowrap font-bold py-3">Date</th>
                      </tr>
                    </thead>

                    {staticData.list.map((e, i) => (
                      <tbody key={i} className='divide-y-4'>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td className="w-4 p-4">
                            <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                              <Tooltip title={e?.msg?.title || ""} arrow>
                                <div className='w-40' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {e?.msg?.title || ""}
                                </div>
                              </Tooltip>
                            </div>
                          </td>

                          <td className="w-4 p-4">
                            <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                              <Tooltip title={e?.msg?.notificationMsg || ""} arrow>
                                <div className='w-40' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {e?.msg?.notificationMsg || ""}
                                </div>
                              </Tooltip>
                            </div>
                          </td>

                          <td className="w-4 p-4">
                            <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                              <Tooltip title={e?.type || ""} arrow>
                                <div className='w-40' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {e?.type || ""}
                                </div>
                              </Tooltip>
                            </div>
                          </td>

                          <td className="w-4 p-4">
                            {e?.msg?.image && 
                            <img className='h-10 w-10' src={e?.msg?.image }  alt='image-notification' />
                            }
                            </td>

                          <td className="w-4 p-4">
                            <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                              <Tooltip title={e?.createdAt ? new Date(e.createdAt).toLocaleDateString() : "--"} arrow>
                                <div className='w-40' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {e?.createdAt ? new Date(e.createdAt).toLocaleDateString() : "--"}
                                </div>
                              </Tooltip>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>

              {/* Pagination */}
              {isMobile && staticData.list.length > 10 && (
                <ReactPaginate
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={Math.ceil(staticData.total / size)}
                  marginPagesDisplayed={0}
                  pageRangeDisplayed={10}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  pageClassName={'page-cls'}
                  activeClassName={'active'}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* <Model formData={formData} setFormData={setFormData} errorCreate={errorCreate} handleChange={handleChange} handleSubmit={handleSubmit} openAddmodel={openAddmodel} setopenAddmodel={setopenAddmodel} />
      <Modelupdate updatedata={updatedata} handleSubmitUpdate={handleSubmitUpdate} updateError={updateError} handleChangeUpdate={handleChangeUpdate} openAddmodelUpdate={openAddmodelUpdate} setopenAddmodelUpdate={setopenAddmodelUpdate} /> */}
    </>
  );
};

export default Notification;

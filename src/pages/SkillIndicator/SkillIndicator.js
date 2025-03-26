/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import SkillManagementJSON from './SkillManagement.json'
import Model from "./Modle/Model"

import { RiEditLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import ReactPaginate from 'react-paginate';
import Loading from "../../components/Loader/Loader";
import SearchIcon from '@mui/icons-material/Search';
import Modelupdate from './Modle/Modelupdate';

const Skillindicator = () => {

  // Static Data
  const skills = [
    { _id: "65f193e7c00d427cd134a60f", name: "Reading" },
    { _id: "65f193f6c00d427cd134a613", name: "Writing" },
    { _id: "65f193f7c00d427cd134a614", name: "Math" },
    { _id: "65f193f8c00d427cd134a615", name: "Science" },
    { _id: "65f193f9c00d427cd134a616", name: "History" },
    { _id: "65f193f9c00d427cd134a617", name: "Geography" },
    { _id: "65f193fbc00d427cd134a618", name: "Art" },
    { _id: "65f193fbc00d427cd134a619", name: "Music" },
    { _id: "65f193fbc00d427cd134a620", name: "Physical Education" },
  ];

  const [searchKeyword, setsearchKeyword] = useState("");

  // Update Model
  let [openAddmodelUpdate, setopenAddmodelUpdate] = useState(false);
  let [updatedata, setupdatedata] = useState({});
  let handleUpdatemodel = (data) => {
    setopenAddmodelUpdate(true);
    setupdatedata({ ...data });
  };

  const handleSearch = (e) => {
    setsearchKeyword(e.target.value);
  };

  // Pagination Logic
  const size = 10;
  const isMobile = true;

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <Loading />
      <div className='h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
        <div className='w-full h-full max-w-[100vw]'>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className='font-semibold text-2xl'>{SkillManagementJSON.Heading}</div>
            <div onClick={() => setopenAddmodelUpdate(true)}>
              <Button data={"Add Skills"} />
            </div>
          </div>
          <div className='md:py-10 md:px-10'>
            <div className=''>
              {/* Search Area */}
              <div className='flex flex-col items-start gap-4 text-[#7E84A3]'>
                <div className='max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2'>
                  <SearchIcon className='w-6 h-6 text-gray-400 ml-2' />
                  <input
                    className='flex-grow h-full outline-none text-sm'
                    onChange={handleSearch}
                    value={searchKeyword}
                    type='text'
                    placeholder='Search '
                  />
                </div>
              </div>

              {/* Table Area */}
              <div>
                <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4">
                    <thead className="text-[14px] text-[#5A607F] bg-white capitalize">
                      <tr>
                        <th className="px-6 whitespace-nowrap font-bold py-3">
                          Skill Name
                        </th>
                        <th className="px-6 py-3 font-bold"></th>
                      </tr>
                    </thead>

                    {filteredSkills && filteredSkills.length > 0 && filteredSkills.map((e, i) => (
                      <tbody key={i} className='divide-y-4'>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <td className="w-4 p-4">
                            <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                              <input
                                id="checkbox-table-search-1"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                              />
                              <label htmlFor="checkbox-table-search-1" className="sr-only">
                                checkbox
                              </label>
                              <Tooltip title={e.name || "--"} arrow>
                                <div className='w-40' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                  {e.name || "--"}
                                </div>
                              </Tooltip>
                            </div>
                          </td>

                          <td className="flex items-center justify-end px-6 py-4 gap-3">
                            <div onClick={() => handleUpdatemodel(e)} className='cursor-pointer shadow-md border p-1'>
                              <RiEditLine className='text-blue-600 text-2xl' />
                            </div>
                            <div className='cursor-pointer shadow-md border p-1'>
                              <MdDeleteOutline className='text-blue-600 text-2xl' />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>

              {/* Pagination */}
              {isMobile ? (
                filteredSkills.length > 10 ? (
                  <ReactPaginate
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(filteredSkills.length / size)}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={5}
                    containerClassName={'pagination'}
                    pageClassName={'page-cls'}
                    activeClassName={'active'}
                  />
                ) : null
              ) : (
                filteredSkills.length > 10 ? (
                  <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(filteredSkills.length / size)}
                    marginPagesDisplayed={5}
                    pageRangeDisplayed={5}
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

      <Modelupdate updatedata={updatedata} setopenAddmodelUpdate={setopenAddmodelUpdate} />
    </>
  );
};

export default Skillindicator;

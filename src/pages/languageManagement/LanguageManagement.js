import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import { IoMdSearch } from "react-icons/io";
import Model from "./Modle/Model";
import Modelupdate from './Modle/Modelupdate';

import { RiEditLine } from "react-icons/ri";

const LanguageManagement = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [openAddmodel, setopenAddmodel] = useState(false);
  const [formData, setFormData] = useState({});
  const [errorCreate, seterrorCreate] = useState({});
  const [searchKeyword, setsearchKeyword] = useState("");
  const [openAddmodelUpdate, setopenAddmodelUpdate] = useState(false);
  const [updatedata, setupdatedata] = useState({});
  const [updateError, setupdateError] = useState({});
  const [languageList, setLanguageList] = useState([]);
  
  // Static Data
  const staticData = {
    "total": 12,
    "list": [
      { "_id": "65e0239137d8ba0f4dc3f703", "name": "Hindi", "shortName": "hi", "scriptName": "हिन्दी", "isDisabled": false },
      { "_id": "65e95bdbffc12b5da40c628a", "name": "English", "shortName": "en", "scriptName": "English", "isDisabled": false },
      { "_id": "65e9bba0d0c2041125f0563f", "name": "Gujrati", "shortName": "gu", "scriptName": "ગુજરાતી", "isDisabled": false },
      { "_id": "65eedc5ba4f23b3de652320d", "name": "Bangla", "shortName": "bn", "scriptName": "বাংলা", "isDisabled": false },
      { "_id": "65f28d8b118bd3ff2386a902", "name": "Malyalam", "shortName": "ml", "scriptName": "മലയാളം", "isDisabled": false },
      { "_id": "65f28dc77045e2bedc769457", "name": "Punjabi", "shortName": "pa", "scriptName": "ਪੰਜਾਬੀ", "isDisabled": false },
      { "_id": "65f28e73f7de021f3aaaf7f6", "name": "Marathi", "shortName": "mr", "scriptName": "मराठी", "isDisabled": false },
      { "_id": "65f28f180c224a796ffc3859", "name": "Telugu", "shortName": "te", "scriptName": "తెలుగు", "isDisabled": false },
      { "_id": "65f28f5a0c224a796ffc3862", "name": "Tamil", "shortName": "ta", "scriptName": "தமிழ்", "isDisabled": false },
      { "_id": "65f28f86f7de021f3aaaf80a", "name": "Urdu", "shortName": "ur", "scriptName": "اردو", "isDisabled": false }
    ]
  };

  useEffect(() => {
    // Set the static data as the initial list
    setLanguageList(staticData.list);
  }, []);

  const handleSearch = (e) => {
    setsearchKeyword(e.target.value);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleDisabled = (e) => {
    // Update the language status here
    const updatedList = languageList.map(item => {
      if (item._id === e._id) {
        return { ...item, isDisabled: !item.isDisabled };
      }
      return item;
    });
    setLanguageList(updatedList);
  };

  const handleUpdatemodel = (data) => {
    setopenAddmodelUpdate(true);
    setupdatedata({ ...data });
  };

  const handleChangeUpdate = (e) => {
    setupdatedata({ ...updatedata, [e.target.name]: e.target.value });
    setupdateError({ ...updateError, [e.target.name]: "" });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    // Handle the update logic here, like updating the language in the list.
    setopenAddmodelUpdate(false);
  };

  const size = 10;

  return (
    <>
     
      <div className=' h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
        <div className='w-full h-full max-w-[100vw]'>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className='font-semibold text-2xl'>Language Management</div>
            <div onClick={() => setopenAddmodel(true)}>
              <Button data={"Add Language"} />
            </div>
          </div>
          <div className='md:py-10 md:px-10'>
            <div className=''>
              <div className='flex flex-col items-start gap-4 text-[#7E84A3]'>
                <div className='max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2'>
                  <IoMdSearch className='w-6 h-6 text-gray-400 ml-2' />
                  <input
                    className='flex-grow h-full outline-none text-sm'
                    onChange={handleSearch}
                    value={searchKeyword}
                    type='text'
                    placeholder='Search'
                  />
                </div>
              </div>

              {/* Table */}
              <div className="relative overflow-x-scroll w-full shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y-4">
                  <thead className="text-[14px] text-[#5A607F] bg-white capitalize">
                    <tr>
                      <th className="px-6 whitespace-nowrap font-bold py-2">Language</th>
                      <th className="px-6 py-2 font-bold"></th>
                    </tr>
                  </thead>
                  {languageList.map((e, i) => (
                    <tbody key={i} className='divide-y-4'>
                      <tr className="bg-white border-b hover:bg-gray-50">
                        <td className="w-4 px-4 py-2">
                          <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            {e.name} <div>({e.scriptName})</div>
                          </div>
                        </td>

                        <td className="flex items-center justify-end px-3 py-2 gap-3">
                          <label
                            onClick={() => handleDisabled(e)}
                            className="flex items-center cursor-pointer"
                          >
                            <div className="relative" title={e.isDisabled ? 'Disabled' : 'Enabled'}>
                              <div className="red shadow-md border border-gray-300 w-10 h-6 rounded-full"></div>
                              <div className={`dot absolute ${e.isDisabled ? 'right-1 top-1 bg-red-400' : 'left-1 top-1 bg-blue-400'} w-4 h-4 rounded-full transition`}></div>
                            </div>
                          </label>

                          <div onClick={() => handleUpdatemodel(e)} className='cursor-pointer shadow-md border p-1'>
                            <RiEditLine className='text-blue-600 text-2xl' />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
              {/* Table End */}

              {/* <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={Math.ceil(staticData.total / size)}
                marginPagesDisplayed={0}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-cls'}
                activeClassName={'active'}
                forcePage={currentPage}
              /> */}
            </div>
          </div>
        </div>
      </div>

      <Model
        formData={formData}
        setFormData={setFormData}
        errorCreate={errorCreate}
        // handleChange={handleChange}
        // handleSubmit={handleSubmit}
        openAddmodel={openAddmodel}
        setopenAddmodel={setopenAddmodel}
      />
      <Modelupdate
        updatedata={updatedata}
        handleSubmitUpdate={handleSubmitUpdate}
        updateError={updateError}
        handleChangeUpdate={handleChangeUpdate}
        openAddmodelUpdate={openAddmodelUpdate}
        setopenAddmodelUpdate={setopenAddmodelUpdate}
      />
    </>
  );
};

export default LanguageManagement;

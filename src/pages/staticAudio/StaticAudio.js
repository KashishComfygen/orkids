/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import IntroductionJSON from './Introduction.json';
import Model from './Modle/Model';
import Modelupdate from './Modle/Modelupdate';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';

import Loading from "../../components/Loader/Loader"
import { RiEditLine } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';

const StaticAudio = () => {
  let dispatch = useDispatch()
  let selector = useSelector(state => state)
  
  // Static data
  const staticData = {
    "_id": "65fc18a77dc3e9bc4e7d7a54",
    "pageNo": "Start Screen Introduction",
    "audio": {
      "hi": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1712378128/your_folder_name/v1gle7est8p2ipo3cxl1.mp3",
      "en": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718887295/your_folder_name/bm1fdbnfjr6cp0pl1ctm.mp3",
      "bn": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375567/your_folder_name/zoxkwwc7bct1fl8omh6g.mp3",
      "mr": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375709/your_folder_name/e5ntctaa0fnbcsrlwmcu.mp3",
      "as": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1719929333/your_folder_name/bsepqfurlfvozfjzfrzy.mp3",
      "ur": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375764/your_folder_name/qzl7wdzeaehyircpyyea.mp3",
      "ml": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375676/your_folder_name/do8qvctrlpndegiuo40n.mp3",
      "pa": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375688/your_folder_name/ku29ozjnb7ipebmlpfpk.mp3",
      "gu": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375549/your_folder_name/geisnhsoszgkweocti3j.mp3",
      "te": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375926/your_folder_name/uymjs75rzhqe2icj7qri.mp3",
      "ta": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375756/your_folder_name/hcrszxfau7ka3aydgw7i.mp3",
      "kn": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718375782/your_folder_name/tlueqazht5wueckgdb4c.mp3"
    },
    "createdBy": "65defd93a553d5b9ff275f13",
    "isDisable": false,
    "isDeleted": false,
    "createdAt": 1711020199000,
    "updatedAt": 1711020199000,
    "date": 1710979200000,
    "week": 1710720000000,
    "month": 1709251200000,
    "year": 1704067200000,
    "slug": 3
  };

  let [searchKeyword, setsearchKeyword] = useState("");

  // Static list based on static data
  const list = [staticData];

  const handleSearch = (e) => {
    setsearchKeyword(e.target.value);
  };

  // Manage Loading and Redux states
  let { IntroductionReducer } = selector || {};
  let { loading } = IntroductionReducer && IntroductionReducer ? IntroductionReducer : {};

  let shortvalue = "en";

  return (
    <>
      <Loading loading={loading} />
      <div className='h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
        <div className='w-full h-full max-w-[100vw]'>
          <div className='flex justify-between p-5'>
            <div className='font-semibold text-2xl'>{IntroductionJSON.Heading}</div>
          </div>
          <div className='md:py-10 md:px-10'>
            <div className=''>
              <div className='flex items-center gap-4 text-[#7E84A3]'>
                <div className='flex flex-col items-start gap-4 text-[#7E84A3]'>
                  <div className='max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2'>
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
              </div>

              {/* Table */}
              <div className=''>
                <div className="relative overflow-y-scroll max-h-[70vh] shadow-md sm:rounded-lg mt-5">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-100 divide-y-4">
                    <thead className="text-[14px] text-[#5A607F] w-full bg-white capitalize">
                      <tr className='w-full'>
                        <th className="px-6 whitespace-nowrap font-bold py-3">Name</th>
                        <th className="px-6 py-3 font-bold">Audio</th>
                        <th className="px-6 py-3 font-bold">Action</th>
                      </tr>
                    </thead>

                    {
                      list && list.length > 0 && list.map((e, i) => (
                        <tbody key={i} className='text-gray-500'>
                          <tr className='bg-white'>
                            <td className="px-6 py-3 font-normal">
                            {e.pageNo || "--"}

                            </td>
                            <td className="px-6 py-3 font-normal">
                              <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                                {e.audio && e.audio[shortvalue] ? (
                                  <audio className="flex justify-start" controls>
                                    <source src={e.audio[shortvalue]} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                  </audio>
                                ) : (
                                    <div className='w-40' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {e.msg || "--"}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 whitespace-nowrap py-3 flex flex-wrap items-center justify-center lg:justify-start lg:gap-3 font-normal">
                              <Link title='Edit'>
                                   <RiEditLine className='text-blue-600 text-2xl'/>
                              </Link>
                             
                            </td>
                          </tr>
                        </tbody>
                      ))
                    }

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Model formData={{}} setFormData={() => {}} seterrorCreate={{}} errorCreate={{}} handleChange={() => {}} handleSubmit={() => {}} openAddmodel={false} setopenAddmodel={() => {}} />
      <Modelupdate shortvalue={shortvalue} updatedata={{}} setupdatedata={() => {}} handleSubmitUpdate={() => {}} setupdateError={{}} updateError={{}} handleChangeUpdate={() => {}} openAddmodelUpdate={false} setopenAddmodelUpdate={() => {}} />
    </>
  );
};

export default StaticAudio;

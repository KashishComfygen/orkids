import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import ServiceJSON from './Service.json';
import Model from './Modle/Model';
import Modelupdate from './Modle/Modelupdate';
import { useDispatch, useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from 'react-router-dom';

import parse from 'html-react-parser';
// import Tooltip from '@mui/material/Tooltip';
import Loading from "../../components/Loader/Loader";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";

// Static Data
const staticData = [
  {
    "_id": "65f85a749208e2344114f61f",
    "service": {
      "hi": "",
      "en": "Physiotherapy",
      "bn": "",
      "mr": "",
      "as": "",
      "ur": "",
      "ml": "",
      "pa": "",
      "gu": "",
      "te": "",
      "ta": "",
      "kn": ""
    },
    "content": {
      "hi": "",
      "en": "<p>Physical Therapy or physiotherapy helps to restore or maximize movement potential. It involves diagnosis, therapeutic management of pain, prevention, and treating injuries (which affects our movements)...</p><p><img src=\"https://res.cloudinary.com/dnd2isyjo/image/upload/v1714653911/your_folder_name/olgad45ai655w15dxxju.jpg\"></p><p><img src=\"https://res.cloudinary.com/dnd2isyjo/image/upload/v1714653925/your_folder_name/elekiqohacdy2z6qxreu.jpg\"></p><p><img src=\"https://res.cloudinary.com/dnd2isyjo/image/upload/v1714653940/your_folder_name/rko5lzhlbo7x2cjptkjh.jpg\"></p>",
      "bn": "",
      "mr": "",
      "as": "",
      "ur": "",
      "ml": "",
      "pa": "",
      "gu": "",
      "te": "",
      "ta": "",
      "kn": ""
    },
    "image": {
      "hi": "",
      "en": "https://res.cloudinary.com/dnd2isyjo/image/upload/v1710774887/your_folder_name/xkuexicgrps6twspen5f.png",
      "bn": "",
      "mr": "",
      "as": "",
      "ur": "",
      "ml": "",
      "pa": "",
      "gu": "",
      "te": "",
      "ta": "",
      "kn": ""
    },
    "createdBy": "65defd93a553d5b9ff275f13",
    "isDisable": false,
    "createdAt": 1710774900000,
    "slug": 34
  }
];

const Service = () => {
  // Static data assignment for rendering
  const serviceData = staticData;

  return (
    <>
      <Loading loading={false} />
      <div className=' h-[90vh] w-full overflow-y-scroll  py-3 md:px-5 px-1'>
        <div className=' w-full h-full  max-w-[100vw]'>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className=' font-semibold text-2xl'>{ServiceJSON.Heading}</div>
            <Link to={"/app/service/add"}>
              <Button data={"Add Services"} />
            </Link>
          </div>
          <div className='md:py-10 md:px-10'>
            <div className="">
              <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5">
                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4">
                  <thead className="text-[14px] text-[#5A607F] w-full bg-white capitalize">
                    <tr className='w-full'>
                      <th className="px-6 whitespace-nowrap font-bold py-3">service</th>
                      <th className="px-6 py-3 font-bold">Link</th>
                      <th className="px-6 whitespace-nowrap py-3 font-bold">Image</th>
                      <th className="px-6 py-3 font-bold">Action</th>
                    </tr>
                  </thead>

                  {serviceData && serviceData.length > 0 && serviceData.map((e, i) => {
                    return (
                      <tbody key={i} className=' text-gray-500'>
                        <tr className='bg-white'>
                          <td className="px-6 w-[25%] py-3 font-normal">
                            {/* <Tooltip title={e.service?.en || "--"} arrow>
                              <div className='w-[80%] overflow-ellipsis truncate' style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {e.service?.en || "--"}
                              </div>
                            </Tooltip> */}
                             <div className='w-[80%] overflow-ellipsis truncate' style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {e.service?.en || "--"}
                              </div>

                          </td>

                          <td className="px-6 w-96 h-5 whitespace-nowrap overflow-ellipsis truncate font-normal py-3">
                            {/* <Tooltip title={parse(e.content?.en || "--")} arrow>
                              <div className="overflow truncate lg:w-[14rem] w-60 h-5" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {parse(e.content?.en || "--")}
                              </div>
                            </Tooltip> */}
                             <div className="overflow truncate lg:w-[14rem] w-60 h-5" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {parse(e.content?.en || "--")}
                              </div>
                          </td>

                          <td className="px-6 py-3 w-[25%] font-normal">
                            <img className='h-10 w-10' src={e.image?.en || '/icons8-system-administrator-female-100.png'} onError={(e) => e.target.src = "/icons8-system-administrator-female-100.png"} alt='img' />
                          </td>

                          <td className="flex w-[25%] items-center justify-start px-6 py-2 gap-3">
                            <Link title='Edit' className='cursor-pointer shadow-md border p-1 '><RiEditLine className='text-blue-600 text-2xl' /></Link>
                             <div className='cursor-pointer shadow-md border p-1'>
                                                        <MdDeleteOutline className='text-blue-600 text-2xl'/>
                                                      </div>
                          </td>
                        </tr>
                      </tbody>
                    )
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Model formData={{}} setFormData={() => {}} seterrorCreate={() => {}} errorCreate={{}} handleChange={() => {}} handleSubmit={() => {}} openAddmodel={false} setopenAddmodel={() => {}} />
      <Modelupdate shortvalue={"en"} updatedata={{}} setupdatedata={() => {}} handleSubmitUpdate={() => {}} setupdateError={{}} updateError={{}} handleChangeUpdate={() => {}} openAddmodelUpdate={false} setopenAddmodelUpdate={() => {}} />
    </>
  );
};

export default Service;

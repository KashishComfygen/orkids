import React, { useState, useRef } from 'react'
import { IoClose } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';
export default function Model({ formData, errorCreate, setFormData, handleChange, handleSubmit, setopenAddmodel, openAddmodel }) {

  let [loaderImage, setLoaderImage] = useState(false)

  let handleChangeImage = async (e) => {
    let { name } = e.target;
   
  };

  const fileInputRef = useRef(null);
  const handleLabelClick = () => {
    fileInputRef.current.click();
  };



  return (
    <div>

      <div className={openAddmodel ? "fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
        <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[35rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
          {/*modal header*/}
          <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
            <p className="text-xl font-bold text-white uppercase">Add Notification</p>
            <div onClick={() => setopenAddmodel(false)} className="rounded-full cursor-pointer modal-close bg-white p-1">
              <IoClose />
            </div>
          </div>

          <div className='p-5'>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="type">Type:</label>
                <select
                  id="type"
                  name="type"
                  value={formData?.type || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                >
                  <option value="ALL">ALL</option>
                  <option value="TEACHER">TEACHER</option>
                  <option value="PARENT">PARENT</option>
                  <option value="OTHER">OTHER</option>
                </select>
                {errorCreate && errorCreate["type"] && <div className='text-sm text-red-500'>{errorCreate.type}</div>}

              </div>


              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData?.title || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Enter Title"
                />
                {errorCreate && errorCreate["title"] && <div className=' text-sm text-red-500'>{errorCreate.title}</div>}
              </div>


              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Message:</label>
                <textarea
                  rows={3}
                  type="text"
                  id="msg"
                  name="msg"
                  value={formData?.msg || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Enter Message"
                />
                {errorCreate && errorCreate["msg"] && <div className=' text-sm text-red-500'>{errorCreate.msg}</div>}
              </div>



              <div className='flex  flex-col md:flex-row gap-2 w-[90%]'>
                <label className='w-[9%]' >Image</label>
                {!loaderImage ? <div className=' relative'>
                  <label onClick={handleLabelClick} className='w-[9%] absolute top-1' ><FaPlusCircle /></label>
                  <img
                    className='h-16 w-16'
                    onError={(e) => e.target.src = "/icons8-system-administrator-female-100.png"}
                    src={formData?.img || '/icons8-system-administrator-female-100.png'}
                    alt="img"
                  />

                  <input
                    ref={fileInputRef}

                    name="img"
                    value={formData?.file || ""} accept='image/*' onChange={handleChangeImage} className=' w-full px-2  hidden py-1 rounded-md' type='file' />
                </div> : <div className=' flex justify-center items-center'><CircularProgress />Uploading....</div>}


              </div>



              <button type="submit" className="bg-blue-500 mt-2 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

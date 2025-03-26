import React from 'react'
import { IoClose } from "react-icons/io5";

export default function Model({formData,errorCreate,handleChange,handleSubmit,setopenAddmodel,openAddmodel}) {
  console.log(formData)
  return (
    <div>
        
        <div className={openAddmodel?"fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1":"hidden" } style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[35rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
        {/*modal header*/}
        <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
          <p className="text-xl font-bold text-white uppercase">Create Language Setting</p>
          <div onClick={()=>setopenAddmodel(false)} className="rounded-full cursor-pointer modal-close bg-white p-1">
       <IoClose/>
          </div>
        </div>
           
           <div className='p-5'>
           <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="languageShortName">Language Short Name:</label>
          <input 
            type="text" 
            id="languageShortName" 
            name="languageShortName" 
            value={formData.languageShortName||""} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter language Short Name" 
          />
          {errorCreate&&errorCreate["languageShortName"]&&<div className=' text-sm text-red-500'>{errorCreate.languageShortName}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Language Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name||""} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter Language Name" 
          />
  {errorCreate&&errorCreate["name"]&&<div className=' text-sm text-red-500'>{errorCreate.name}</div>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="key">Key:</label>
          <input 
            type="text" 
            id="key" 
            name="key" 
            value={formData.key||""} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter key" 
          />
            {errorCreate&&errorCreate["key"]&&<div className=' text-sm text-red-500'>{errorCreate.key}</div>}
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="value">Value:</label>
          <input 
            type="text" 
            id="value" 
            name="value" 
            value={formData.value||""} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter value" 
          />
            {errorCreate&&errorCreate["value"]&&<div className=' text-sm text-red-500'>{errorCreate.value}</div>}
        </div>



      
        <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
           </div>
    
      </div>
    </div>

    </div>
  )
}

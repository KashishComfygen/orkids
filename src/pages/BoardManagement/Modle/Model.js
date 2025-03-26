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
          <p className="text-xl font-bold text-white uppercase">Add Board</p>
          <div onClick={()=>setopenAddmodel(false)} className="rounded-full cursor-pointer modal-close bg-white p-1">
       <IoClose/>
          </div>
        </div>
           
           <div className='p-5'>
           <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Board Name:</label>
          <input 
            type="text" 
            id="name" 
            maxLength={50}
            name="name" 
            value={formData.name||""} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter Board Name (Full Form)" 
          />
          {errorCreate&&errorCreate["name"]&&<div className=' text-sm text-red-500'>{errorCreate.name}</div>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="shortName">Short Name:</label>
          <input 
            type="text" 
            id="shortName" 
            maxLength={20}
            name="shortName" 
            value={formData.shortName||""} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter Board Name (CBSE/ICSE/...)" 
          />
          {errorCreate&&errorCreate["shortName"]&&<div className=' text-sm text-red-500'>{errorCreate.shortName}</div>}
        </div>
   


      
        <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
           </div>
    
      </div>
    </div>

    </div>
  )
}

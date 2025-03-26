import React from 'react'
import { IoClose } from "react-icons/io5";

export default function Modelupdate({updatedata,setupdatedata,updateError,handleChangeUpdate,handleSubmitUpdate,setopenAddmodelUpdate,openAddmodelUpdate,setupdateError}) {

  let handleCloseModel = () =>{
    setupdatedata({})
    setupdateError({})
    setopenAddmodelUpdate(false)
  }


  return (
    <div>
        
    <div className={openAddmodelUpdate?"fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1":"hidden" } style={{ marginTop: '0rem', }}  >
  <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[35rem]  w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
    {/*modal header*/}
    <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
      <p className="text-xl font-bold text-white uppercase">Update Student</p>
      <div onClick={handleCloseModel} className="rounded-full cursor-pointer modal-close bg-white p-1">
   <IoClose/>
      </div>
    </div>
       
       <div className='p-5'>
       <form onSubmit={handleSubmitUpdate}>
<div className=' h-96 overflow-y-scroll w-full p-2'>  
    <div className=' flex flex-col gap-1'>

    
    <div className=' text-lg border-b-2 '>Student Information</div>         
  <div className='md:flex gap-2 '>
  <div className="mb-4 flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              value={updatedata?.fullName||""} 
              onChange={handleChangeUpdate} 
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter Student Name" 
            />
            {updateError&&updateError["fullName"]&&<div className=' text-sm text-red-500'>{updateError.fullName}</div>}
          </div>
          <div className="mb-4 flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={updatedata?.email||""} 
              onChange={handleChangeUpdate} 
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter Student email" 
            />
    {updateError&&updateError["email"]&&<div className=' text-sm text-red-500'>{updateError.email}</div>}
          </div>
  </div>


  <div className=' md:flex gap-2'>
  <div className="mb-4 flex-1 ">
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="gender">Gender:</label>
    <select
      id="gender"
      name="gender"
      value={updatedata?.gender||""}
      onChange={handleChangeUpdate}
      className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
    >
      <option value="">Select Student Gender</option>
      <option value="MALE">Male</option>
      <option value="FEMALE">Female</option>
      <option value="OTHER">Other</option>
    </select>
    {updateError && updateError["gender"] && <div className='text-sm text-red-500'>{updateError.gender}</div>}
  </div>
  <div className="mb-4 flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Date of Birth:</label>
            <input 
              type="date" 
              id="dob" 
              name="dob" 
              value={updatedata?.dob||""} 
              onChange={handleChangeUpdate} 
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter Date of Birth" 
            />
    {updateError&&updateError["dob"]&&<div className=' text-sm text-red-500'>{updateError.dob}</div>}
          </div>
    </div>     



    <div className=' md:flex gap-2'>
  <div className="mb-4 flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Mobile Number:</label>
            <input 
              type="number" 
              id="mobNo" 
              name="mobNo" 
              value={updatedata?.mobNo||""} 
              onChange={handleChangeUpdate} 
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter Mobile Number" 
            />
    {updateError&&updateError["mobNo"]&&<div className=' text-sm text-red-500'>{updateError.mobNo}</div>}
          </div>
          <div className="mb-4 flex-1">

          </div>
    </div> 
    </div>   

<div className=' flex flex-col gap-1'>


<div className=' text-lg border-b-2 '>Education Information</div>         
<div className='md:flex gap-2 '>
<div className="mb-4 flex-1">
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Grade:</label>
    <input 
      type="text" 
      id="grade" 
      name="grade" 
      value={updatedata?.grade||""} 
      onChange={handleChangeUpdate} 
      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
      placeholder="Enter Student Grade" 
    />
    {updateError&&updateError["grade"]&&<div className=' text-sm text-red-500'>{updateError.grade}</div>}
  </div>
  <div className="mb-4 flex-1 ">
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="medium">Medium:</label>
<select
id="medium"
name="medium"
value={updatedata?.medium||""}
onChange={handleChangeUpdate}
className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
>
<option value="">Select Medium</option>
<option value="English">English</option>
<option value="Hindi">Hindi</option>
</select>
{updateError && updateError["medium"] && <div className='text-sm text-red-500'>{updateError.medium}</div>}
</div>

</div>


<div className=' md:flex gap-2'>

<div className="mb-4 flex-1">
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">SchoolName</label>
    <input 
      type="text" 
      id="schoolName" 
      name="schoolName" 
      value={updatedata?.schoolName||""} 
      onChange={handleChangeUpdate} 
      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
      placeholder="Enter SchoolName" 
    />
{updateError&&updateError["schoolName"]&&<div className=' text-sm text-red-500'>{updateError.schoolName}</div>}
  </div>

  <div className="mb-4 flex-1">
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="board">Board:</label>
<select
id="board"
name="board"
value={updatedata?.board||""}
onChange={handleChangeUpdate}
className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
>
<option value="">Select Board</option>
<option value="CBSE">CBSE</option>
<option value="ICSE">ICSE</option>
</select>
{updateError && updateError["board"] && <div className='text-sm text-red-500'>{updateError.board}</div>}
</div>


</div>    

<div className=' flex gap-2'>


<div className="mb-4 flex-1">
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">MotherTongue:</label>
    <input 
      type="text" 
      id="motherTongue" 
      name="motherTongue" 
      value={updatedata?.motherTongue||""} 
      onChange={handleChangeUpdate} 
      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
      placeholder="Enter MotherTongue" 
    />
{updateError&&updateError["motherTongue"]&&<div className=' text-sm text-red-500'>{updateError.motherTongue}</div>}
  </div>
  <div className="mb-4 flex-1">
  </div>
  </div>
</div>   






<div className=' flex flex-col gap-1'>


<div className=' text-lg border-b-2 '>Parent Information</div>         
<div className='md:flex gap-2 '>
<div className="mb-4 flex-1">
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="parentEducation">Parent Education:</label>
<select
id="parentEducation"
name="parentEducation"
value={updatedata?.parentEducation||""}
onChange={handleChangeUpdate}
className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
>
<option value="">Select Parent Education</option>
<option value="10th">10th</option>
<option value="12th">12th</option>
<option value="Graduation">Graduation</option>
<option value="Masters">Masters</option>
</select>
{updateError && updateError["parentEducation"] && <div className='text-sm text-red-500'>{updateError.parentEducation}</div>}
</div>

<div className="mb-4 flex-1">
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="parentIncome">Parent Income:</label>
<select
id="parentIncome"
name="parentIncome"
value={updatedata?.parentIncome||""}
onChange={handleChangeUpdate}
className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
>
<option value="">Select Parent Income</option>
<option value="Below 50,000">Below 50,000</option>
<option value="50,000 - 1,00,000">50,000 - 1,00,000</option>
<option value="1,00,000 - 2,00,000">1,00,000 - 2,00,000</option>
<option value="Above 2,00,000">Above 2,00,000</option>
</select>
{updateError && updateError["parentIncome"] && <div className='text-sm text-red-500'>{updateError.parentIncome}</div>}
</div>

</div>
</div>  
</div>

    <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
  </form>
       </div>

  </div>
</div>

</div>
  )
}

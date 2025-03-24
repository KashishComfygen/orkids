import React from 'react'
import { IoClose } from "react-icons/io5";

export default function Model({ BoardData, getUserManagementList, formData, setFormData, setErrorCreate, errorCreate, handleChange, handleSubmit, setopenAddmodel, openAddmodel }) {

  const today = new Date().toISOString().split('T')[0];
  let handleClose = () => {
    setFormData({})
    setErrorCreate({})
    setopenAddmodel(false)
  }

  let { data } = BoardData && BoardData ? BoardData : {}
  let { list, total } = data && data ? data : {}

  return (
    <div>

      <div className={openAddmodel ? "fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
        <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[35rem]  w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
          {/*modal header*/}
          <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
            <p className="text-xl font-bold text-white uppercase">Add Student</p>
            <div onClick={()=>handleClose()} className="rounded-full cursor-pointer modal-close bg-white p-1">
              <IoClose />
            </div>
          </div>

          <div className='p-5'>
            <form onSubmit={handleSubmit}>
              <div className=' h-96 overflow-y-scroll w-full p-2'>
                <div className=' flex flex-col gap-1'>


                  <div className=' text-lg border-b-2 '>Student Information</div>
                  <div className='md:flex gap-2 '>
                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name:</label>
                      <input
                        type="text"
                        maxLength={30}
                        id="fullName"
                        name="fullName"
                        value={formData?.fullName || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Enter Student Name"
                      />
                      {errorCreate && errorCreate["fullName"] && <div className=' text-sm text-red-500'>{errorCreate.fullName}</div>}
                    </div>
                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Email:</label>
                      <input
                        type="email"
                        maxLength={30}
                        id="email"
                        name="email"
                        value={formData?.email || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Enter Student Email"
                      />
                      {errorCreate && errorCreate["email"] && <div className=' text-sm text-red-500'>{errorCreate.email}</div>}
                    </div>
                  </div>


                  <div className=' md:flex gap-2'>
                    <div className="mb-4 flex-1 ">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="gender">Gender:</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData?.gender || ""}
                        onChange={handleChange}
                        className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Student Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                      </select>
                      {errorCreate && errorCreate["gender"] && <div className='text-sm text-red-500'>{errorCreate.gender}</div>}
                    </div>
                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Date of Birth:</label>
                      <input
                        type="date"
                        max={today}
                        id="dob"
                        name="dob"
                        value={formData?.dob || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Enter Date of Birth"
                      />
                      {errorCreate && errorCreate["dob"] && <div className=' text-sm text-red-500'>{errorCreate.dob}</div>}
                    </div>
                  </div>



                  <div className=' md:flex gap-2'>
                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Mobile Number:</label>
                      <input
                        type="number"
                        id="mobNo"
                        name="mobNo"
                        value={formData?.mobNo || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Enter Mobile Number"
                      />
                      {errorCreate && errorCreate["mobNo"] && <div className=' text-sm text-red-500'>{errorCreate.mobNo}</div>}
                    </div>



                    <div className="mb-4 flex-1 ">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="userId">User:</label>
                      <select
                        id="userId"
                        name="userId"
                        value={formData?.userId || ""}
                        onChange={handleChange}
                        className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select User</option>
                        {getUserManagementList && Array.isArray(getUserManagementList) && getUserManagementList.length > 0 &&
                          getUserManagementList.filter(e => e.fullName).map(e => (
                            <option key={e._id} value={e._id}>{e.fullName}</option>
                          ))
                        }
                      </select>
                      {errorCreate && errorCreate["userId"] && <div className='text-sm text-red-500'>{errorCreate.userId}</div>}
                    </div>






                  </div>
                </div>

                <div className=' flex flex-col gap-1'>


                  <div className=' text-lg border-b-2 '>Education Information</div>
                  <div className='md:flex gap-2 '>
                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Grade:</label>
                      <input
                        type="number"
                        id="grade"
                        name="grade"
                        value={formData?.grade || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Enter Student Grade"
                      />
                      {errorCreate && errorCreate["grade"] && <div className=' text-sm text-red-500'>{errorCreate.grade}</div>}
                    </div>
                    <div className="mb-4 flex-1 ">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="medium">Medium:</label>
                      <select
                        id="medium"
                        name="medium"
                        value={formData?.medium || ""}
                        onChange={handleChange}
                        className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Medium</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                      </select>
                      {errorCreate && errorCreate["medium"] && <div className='text-sm text-red-500'>{errorCreate.medium}</div>}
                    </div>

                  </div>


                  <div className=' md:flex gap-2'>

                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">School Name</label>
                      <input
                        type="text"
                        maxLength={30}
                        id="schoolName"
                        name="schoolName"
                        value={formData?.schoolName || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Enter School Name"
                      />
                      {errorCreate && errorCreate["schoolName"] && <div className=' text-sm text-red-500'>{errorCreate.schoolName}</div>}
                    </div>

                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="board">Board:</label>
                      <select
                        id="board"
                        name="board"
                        value={formData?.board || ""}
                        onChange={handleChange}
                        className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Board</option>
                        {list && total > 0 && list.map((e) => (

                          <option value={e?.shortName}>{e?.shortName || "--"}</option>
                        ))}

                      </select>
                      {errorCreate && errorCreate["board"] && <div className='text-sm text-red-500'>{errorCreate.board}</div>}
                    </div>


                  </div>

                  <div className=' flex gap-2'>


                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">MotherTongue:</label>
                      <input
                        type="text"
                        maxLength={30}
                        id="motherTongue"
                        name="motherTongue"
                        value={formData?.motherTongue || ""}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                        placeholder="Enter MotherTongue"
                      />
                      {errorCreate && errorCreate["motherTongue"] && <div className=' text-sm text-red-500'>{errorCreate.motherTongue}</div>}
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
                        value={formData?.parentEducation || ""}
                        onChange={handleChange}
                        className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Parent Education</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Masters">Masters</option>
                      </select>
                      {errorCreate && errorCreate["parentEducation"] && <div className='text-sm text-red-500'>{errorCreate.parentEducation}</div>}
                    </div>

                    <div className="mb-4 flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="parentIncome">Parent Income:</label>
                      <select
                        id="parentIncome"
                        name="parentIncome"
                        value={formData?.parentIncome || ""}
                        onChange={handleChange}
                        className="border bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Parent Income</option>
                        <option value="Below 50,000">Below 50,000</option>
                        <option value="50,000 - 1,00,000">50,000 - 1,00,000</option>
                        <option value="1,00,000 - 2,00,000">1,00,000 - 2,00,000</option>
                        <option value="Above 2,00,000">Above 2,00,000</option>
                      </select>
                      {errorCreate && errorCreate["parentIncome"] && <div className='text-sm text-red-500'>{errorCreate.parentIncome}</div>}
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

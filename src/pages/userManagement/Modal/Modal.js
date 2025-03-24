import React from 'react';
import { IoClose } from "react-icons/io5";

export default function Model({ seterrorCreate, setopenAddmodel, openAddmodel }) {
  // Static data
  const formData = {
    fullName: "John Doe",
    type: "TEACHER",
    email: "john.doe@example.com",
    mobNo: "1234567890",
    noOfChilderen: "2"
  };

  const errorCreate = {
    fullName: "Name is required",
    type: "Category is required",
    email: "Email is required",
    mobNo: "Mobile number is required",
    noOfChilderen: "Number of children is required"
  };

  // Static close modal function
  const handleCloseModel = () => {
    seterrorCreate({});
    setopenAddmodel(false);
  };

  return (
    <div>
      <div
        className={openAddmodel ? "fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"}
        style={{ marginTop: '0rem' }}
      >
        <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb] md:w-[35rem] w-full mx-auto rounded shadow-lg overflow-y-auto mt-2">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
            <p className="text-xl font-bold text-white uppercase">Add User</p>
            <div onClick={handleCloseModel} className="rounded-full cursor-pointer modal-close bg-white p-1">
              <IoClose />
            </div>
          </div>

          <div className='p-5'>
            <form>
              <div className='lg:flex gap-2'>
                <div className="mb-4 flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">User Name:</label>
                  <input
                    maxLength={30}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData?.fullName || ""}
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                    placeholder="Enter User Name"
                    readOnly
                  />
                  {errorCreate && errorCreate["fullName"] && <div className='text-sm text-red-500'>{errorCreate.fullName}</div>}
                </div>

                <div className="mb-4 flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="role">Select Category:</label>
                  <select
                    name="type"
                    id="type"
                    className="border border-gray-300 w-full rounded-md p-2 bg-white focus:outline-none focus:border-blue-500"
                    value={formData.type}
                    readOnly
                  >
                    <option value="TEACHER">Teacher</option>
                    <option value="PARENT">Parent</option>
                    <option value="OTHER">Other</option>
                  </select>
                  {errorCreate && errorCreate["type"] && <div className='text-sm text-red-500'>{errorCreate.type}</div>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="scriptName">Email:</label>
                <input
                  maxLength={30}
                  type="email"
                  id="email"
                  name="email"
                  value={formData?.email || ""}
                  className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Enter Email"
                  readOnly
                />
                {errorCreate && errorCreate["email"] && <div className='text-sm text-red-500'>{errorCreate.email}</div>}
              </div>

              <div className='md:flex gap-2'>
                <div className="mb-4 flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Mobile Number:</label>
                  <input
                    type="number"
                    id="mobNo"
                    name="mobNo"
                    maxLength={10}
                    max={9999999999}
                    value={formData?.mobNo || ""}
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                    placeholder="Enter Mobile Number"
                    readOnly
                  />
                  {errorCreate && errorCreate["mobNo"] && <div className='text-sm text-red-500'>{errorCreate.mobNo}</div>}
                </div>

                <div className="mb-4 flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="noOfChilderen">Number of Children:</label>
                  <input
                    type="number"
                    id="noOfChilderen"
                    name="noOfChilderen"
                    maxLength={2}
                    max={99}
                    value={formData?.noOfChilderen || ""}
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                    placeholder="Enter Number Of Children"
                    readOnly
                  />
                  {errorCreate && errorCreate["noOfChilderen"] && <div className='text-sm text-red-500'>{errorCreate.noOfChilderen}</div>}
                </div>
              </div>

              <button
                type="button"
                className="bg-blue-500 w-full text-white px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600"
                onClick={() => alert('Static data cannot be updated')}
               
              >
                Submit (Disabled for static data)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

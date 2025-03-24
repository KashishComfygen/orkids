import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

export default function Modelupdate({ openAddmodelUpdate, setopenAddmodelUpdate }) {

    // Static data for the form fields
    const [updatedata, setupdatedata] = useState({
        fullName: "John Doe",
        type: "TEACHER",
        email: "john.doe@example.com",
        mobNo: "9876543210",
        noOfChilderen: "2"
    });

    // Static error data (simulating validation errors)
    const [updateError, setupdateError] = useState({
        fullName: "User name is required",
        type: "",
        email: "",
        mobNo: "Mobile number is required",
        noOfChilderen: ""
    });

    // Function to handle input changes and update the form state
    const handleChangeUpdate = (e) => {
        const { name, value } = e.target;
        setupdatedata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        // Add validation logic or form submission logic here
        console.log("Form submitted", updatedata);
    };

    // Function to close the modal
    let handleClose = () => {
        setopenAddmodelUpdate(false);
        setupdateError({});
    };

    return (
        <div>
            <div className={openAddmodelUpdate ? "fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}>
                <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[35rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
                    {/*modal header*/}
                    <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
                        <p className="text-xl font-bold text-white uppercase">Update User</p>
                        <div onClick={handleClose} className="rounded-full cursor-pointer modal-close bg-white p-1">
                            <IoClose />
                        </div>
                    </div>

                    <div className='p-5'>
                        <form onSubmit={handleSubmitUpdate}>
                            <div className='lg:flex gap-2'>
                                <div className="mb-4 flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">User Name:</label>
                                    <input
                                        type="text"
                                        maxLength={30}
                                        id="fullName"
                                        name="fullName"
                                        value={updatedata?.fullName || ""}
                                        onChange={handleChangeUpdate}
                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                        placeholder="Enter User Name"
                                    />
                                    {updateError && updateError["fullName"] && <div className='text-sm text-red-500'>{updateError.fullName}</div>}
                                </div>

                                <div className="mb-4 flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="role">Select Category:</label>
                                    <select onChange={handleChangeUpdate} value={updatedata?.type || ""} name="type" id="type" className="border border-gray-300 w-full rounded-md p-2 bg-white focus:outline-none focus:border-blue-500">
                                        <option value="TEACHER">Teacher</option>
                                        <option value="PARENT">Parent</option>
                                        <option value="OTHER">Other</option>
                                    </select>
                                    {updateError && updateError["type"] && <div className='text-sm text-red-500'>{updateError.type}</div>}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="scriptName">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    maxLength={30}
                                    name="email"
                                    value={updatedata?.email || ""}
                                    onChange={handleChangeUpdate}
                                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                    placeholder="Enter Email"
                                />
                                {updateError && updateError["email"] && <div className='text-sm text-red-500'>{updateError.email}</div>}
                            </div>

                            <div className='md:flex gap-2'>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">Mobile Number:</label>
                                    <input
                                        type="number"
                                        id="mobNo"
                                        name="mobNo"
                                        max={999999999}
                                        maxLength={10}
                                        value={updatedata?.mobNo || ""}
                                        onChange={handleChangeUpdate}
                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                        placeholder="Enter Mobile Number"
                                    />
                                    {updateError && updateError["mobNo"] && <div className='text-sm text-red-500'>{updateError.mobNo}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="noOfChilderen">Number of Children:</label>
                                    <input
                                        type="number"
                                        id="noOfChilderen"
                                        name="noOfChilderen"
                                        max={99}
                                        maxLength={2}
                                        min={0}
                                        value={updatedata?.noOfChilderen || ""}
                                        onChange={handleChangeUpdate}
                                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                        placeholder="Enter Number Of Children"
                                    />
                                    {updateError && updateError["noOfChilderen"] && <div className='text-sm text-red-500'>{updateError.noOfChilderen}</div>}
                                </div>
                            </div>

                            <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
}

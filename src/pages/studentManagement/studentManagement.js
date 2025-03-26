/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import ReactPaginate from 'react-paginate';
import Model from './Modle/Model';
import Modelupdate from './Modle/ModelUpdate';
import Loading from "../../components/Loader/Loader";

const StudentManagements = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [openAddmodel, setOpenAddModel] = useState(false);
    const [formData, setFormData] = useState({});
    const [errorCreate, setErrorCreate] = useState({});
    const [updatedata, setupdatedata] = useState({});
    const [updateError, setupdateError] = useState({});
    const [size, setSize] = useState(10);
    const [openAddmodelUpdate, setOpenAddModelUpdate] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState("");

    // Static Data for Student List
    const studentList = [
        { _id: 1, fullName: "John Doe", dob: "2005-05-15", mobNo: "1234567890", email: "john@example.com", grade: "A" },
        { _id: 2, fullName: "Jane Smith", dob: "2006-07-20", mobNo: "9876543210", email: "jane@example.com", grade: "B" },
        { _id: 3, fullName: "Mark Johnson", dob: "2004-11-05", mobNo: "1122334455", email: "mark@example.com", grade: "C" },
        // Add more students here as needed
    ];

    const total = studentList.length; // Static total count based on studentList length

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const handleDelete = (data) => {
        // Simulate delete action for static data
        alert(`Deleted student: ${data.fullName}`);
    };

    const handleUpdatemodel = (data) => {
        setupdatedata(data);
        setOpenAddModel(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here if needed for static data
        console.log("Form submitted:", formData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorCreate({ ...errorCreate, [e.target.name]: "" });
    };

    return (
        <>
            <Loading loading={false} />
            <div className=' h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
                <div className=' w-full h-full max-w-[100vw]'>
                    <div className=' flex justify-between w-[80vw] flex-wrap gap-2 p-5'>
                        <div className=' font-semibold text-2xl'>Student Management</div>
                        <div onClick={() => setOpenAddModel(true)}>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded'>Add Student</button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className='flex flex-col items-start gap-4 text-[#7E84A3]'>
                        <div className='max-w-lg bg-white h-[40px] flex items-center border border-[#D9E1EC] rounded gap-2'>
                            <MdSearch className='w-6 h-6 text-gray-400 ml-2' />
                            <input
                                className='flex-grow h-full outline-none text-sm'
                                onChange={(e) => handleSearch(e)}
                                value={searchKeyword}
                                type='text'
                                placeholder='Search by Name and Email...'
                            />
                        </div>
                    </div>

                    {/* Student Table */}
                    <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4">
                            <thead className="text-[14px] text-[#5A607F] bg-white capitalize">
                                <tr>
                                    <th className="px-6 py-3 font-bold">Student</th>
                                    <th className="px-6 py-3 font-bold">DOB</th>
                                    <th className="px-6 py-3 font-bold">Mobile No</th>
                                    <th className="px-6 py-3 font-bold">E-mail</th>
                                    <th className="px-6 py-3 font-bold">Grade</th>
                                    <th className="px-6 py-3 font-bold"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList
                                    .filter(student => student.fullName.toLowerCase().includes(searchKeyword.toLowerCase()) || student.email.toLowerCase().includes(searchKeyword.toLowerCase()))
                                    .slice(currentPage * size, (currentPage + 1) * size)
                                    .map((e, i) => (
                                        <tr key={i} className='bg-white'>
                                            <td className="px-6 py-3">{e.fullName}</td>
                                            <td className="px-6 py-3">{new Date(e.dob).toLocaleDateString()}</td>
                                            <td className="px-6 py-3">{e.mobNo}</td>
                                            <td className="px-6 py-3">{e.email}</td>
                                            <td className="px-6 py-3">{e.grade}</td>
                                            <td className="flex items-center justify-end px-6 py-2 gap-3">
                                                <div onClick={() => handleUpdatemodel(e)} className='cursor-pointer shadow-md border p-1'>
                                                    <RiEditLine className='text-blue-600 text-2xl' />
                                                </div>
                                                <div onClick={() => handleDelete(e)} className='cursor-pointer shadow-md border p-1'>
                                                    <MdDeleteOutline className='text-blue-600 text-2xl' />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {studentList.length > 10 && (
                        <ReactPaginate
                            previousLabel={'Prev'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={Math.ceil(total / size)}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-cls'}
                            activeClassName={'active'}
                            forcePage={currentPage}
                        />
                    )}
                </div>
            </div>

            <Model formData={formData} setFormData={setFormData} setErrorCreate={setErrorCreate} errorCreate={errorCreate} handleChange={handleChange} handleSubmit={handleSubmit} openAddmodel={openAddmodel} setopenAddmodel={setOpenAddModel} />
            <Modelupdate updatedata={updatedata} setupdatedata={setupdatedata} handleSubmitUpdate={handleSubmit} setupdateError={setupdateError} updateError={updateError} handleChangeUpdate={handleChange} openAddmodelUpdate={openAddmodelUpdate} setOpenAddModelUpdate={setOpenAddModelUpdate} />
        </>
    );
};

export default StudentManagements;

import React, { useState } from 'react';
import { Button } from '@headlessui/react';
import { MdDeleteOutline } from 'react-icons/md';
import { RiEditLine } from 'react-icons/ri';
import Model from './Modal/Modal';
import Modelupdate from './Modal/Modelupdate';
import ReactPaginate from 'react-paginate';
import { MdSearch } from 'react-icons/md';
const UserManagement = () => {
  const staticUsersData = [
    { _id: '1', fullName: 'John Doe', email: 'john@example.com', mobNo: '1234567890', type: 'Teacher', noOfChilderen: 2 },
    { _id: '2', fullName: 'Jane Smith', email: 'jane@example.com', mobNo: '2345678901', type: 'Admin', noOfChilderen: 1 },
    { _id: '3', fullName: 'Alice Brown', email: 'alice@example.com', mobNo: '3456789012', type: 'Teacher', noOfChilderen: 3 },
 
  ];

  const [users, setUsers] = useState(staticUsersData);
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [updatedata, setupdatedata] = useState({});
  const [openAddmodel, setopenAddmodel] = useState(false);
  const [openAddmodelUpdate, setopenAddmodelUpdate] = useState(false);
  const [updateError,setupdateError]=useState("")
  let [errorCreate, seterrorCreate] = useState({})
 
  const handleAddUser = (e) => {
    e.preventDefault();
    if (handleValidationCreate()) {
      const newUser = { ...formData, _id: (users.length + 1).toString() };
      setUsers([...users, newUser]);
      setFormData({});
      setopenAddmodel(false);
    }
  };

 
  const handleValidationCreate = () => {
    let formIsValid = true;
    let errors = {};
    if (!formData.fullName || formData.fullName === '') {
      formIsValid = false;
      errors.fullName = 'User Name cannot be empty';
    }
    if (!formData.email) {
      formIsValid = false;
      errors.email = 'Email cannot be empty';
    }
    if (!formData.mobNo) {
      formIsValid = false;
      errors.mobNo = 'Mobile Number cannot be empty';
    }
    if (!formData.noOfChilderen) {
      formIsValid = false;
      errors.noOfChilderen = 'No of Children cannot be empty';
    }
    seterrorCreate(errors);
    return formIsValid;
  };

  // Handle user update
  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (handleValidationUpdate()) {
      const updatedUsers = users.map((user) =>
        user._id === updatedata._id ? { ...updatedata } : user
      );
      setUsers(updatedUsers);
      setopenAddmodelUpdate(false);
    }
  };

  // Handle validation for updating a user
  const handleValidationUpdate = () => {
    let formIsValid = true;
    let errors = {};
    if (!updatedata.fullName || updatedata.fullName === '') {
      formIsValid = false;
      errors.fullName = 'User Name cannot be empty';
    }
    if (!updatedata.email) {
      formIsValid = false;
      errors.email = 'Email cannot be empty';
    }
    if (!updatedata.mobNo) {
      formIsValid = false;
      errors.mobNo = 'Mobile Number cannot be empty';
    }
    if (!updatedata.noOfChilderen) {
      formIsValid = false;
      errors.noOfChilderen = 'No of Children cannot be empty';
    }
    setupdateError(errors);
    return formIsValid;
  };

  // Handle pagination change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Handle deleting a user
  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user._id !== userId);
    setUsers(updatedUsers);
  };

  // Static user search functionality
  const [searchKeyword, setsearchKeyword] = useState('');
  const handleSearch = (e) => {
    setsearchKeyword(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      user.email.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <div className="h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1">
        <div className="w-full h-full max-w-[100vw] mx-auto">
          <div className="lg:flex justify-between items-center gap-2 lg:space-y-0 space-y-2 px-10">
            <div className="font-semibold text-2xl whitespace-nowrap">User Management</div>
            <div className="lg:flex items-center gap-2 lg:space-y-0 space-y-2">
              <div onClick={() => setopenAddmodel(true)}>
                <Button data={'Add User'} />
              </div>
            </div>
          </div>

          <div className="md:py-6 py-4 md:px-10 ">
            <div className="lg:flex justify-between w-full items-center lg:space-y-0 space-y-2 gap-4 lg:px-0 px-10 text-[#7E84A3]">
            <div className="max-w-lg bg-white h-[40px] w-full flex items-center border border-[#D9E1EC] rounded gap-2">
  <MdSearch className="w-6 h-6 text-gray-400 ml-2" />
  <input
    className="flex-grow h-full outline-none text-sm"
    onChange={handleSearch}
    value={searchKeyword}
    type="text"
    placeholder="Search"
  />
</div>

            </div>

            {/* Table */}
            <div>
              <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4">
                  <thead className="text-[14px] text-[#5A607F] w-full bg-white capitalize">
                    <tr className="w-full">
                      <th className="px-6 py-2 font-bold">User Name</th>
                      <th className="px-6 py-2 font-bold">Category</th>
                      <th className="px-6 py-2 font-bold">Mobile No.</th>
                      <th className="px-6 py-2 font-bold">E-mail</th>
                      <th className="px-6 py-2 font-bold">No. of Children</th>
                      <th className="px-6 py-2 font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-4">
                    {filteredUsers.map((e) => (
                      <tr key={e._id} className="bg-white">
                        <td className="px-6 whitespace-nowrap">{e.fullName}</td>
                        <td className="px-6">{e.type}</td>
                        <td className="px-6">{e.mobNo}</td>
                        <td className="px-6">{e.email}</td>
                        <td className="px-6">{e.noOfChilderen}</td>
                        <td className="flex items-center px-6 py-2 gap-3">
                          <div
                            onClick={() => {
                              setupdatedata(e);
                              setopenAddmodelUpdate(true);
                            }}
                            className="cursor-pointer shadow-md border p-1"
                          >
                            <RiEditLine className="text-blue-600 text-2xl" />
                          </div>
                          <div
                            onClick={() => handleDeleteUser(e._id)}
                            className="cursor-pointer shadow-md border p-1"
                          >
                            <MdDeleteOutline className="text-blue-600 text-2xl" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {filteredUsers.length > 10 && (
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(filteredUsers.length / 10)}
                marginPagesDisplayed={0}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-cls'}
                activeClassName={'active'}
                forcePage={currentPage}
              />
            )}
          </div>
        </div>
      </div>

    
      <Model
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleAddUser}
        openAddmodel={openAddmodel}
        setopenAddmodel={setopenAddmodel}
      />
      <Modelupdate
        updatedata={updatedata}
        handleSubmitUpdate={handleUpdateUser}
        setupdateError={() => {}}
        updateError={{}}
        openAddmodelUpdate={openAddmodelUpdate}
        setopenAddmodelUpdate={setopenAddmodelUpdate}
        setupdatedata={setupdatedata}
      />
    </>
  );
};

export default UserManagement;

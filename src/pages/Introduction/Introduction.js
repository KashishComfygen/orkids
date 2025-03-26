import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import IntroductionJSON from './Introduction.json'
import Model from './Modle/Model';
import Modelupdate from './Modle/Modelupdate';
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import Loading from "../../components/Loader/Loader"
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const Introduction = () => {
  // Static Data
  const staticData = [
    {
      _id: "1",
      name: { en: "Introduction 1" },
      content: { en: "This is the content of Introduction 1." },
      image: { en: "/path/to/image1.jpg" },
    },
    {
      _id: "2",
      name: { en: "Introduction 2" },
      content: { en: "This is the content of Introduction 2." },
      image: { en: "/path/to/image2.jpg" },
    },
    {
      _id: "3",
      name: { en: "Introduction 3" },
      content: { en: "This is the content of Introduction 3." },
      image: { en: "/path/to/image3.jpg" },
    },
  ];

  let shortvalue = "en";

  // Local State
  let [openAddmodel, setopenAddmodel] = useState(false);
  const [formData, setFormData] = useState({});
  let [errorCreate, seterrorCreate] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    seterrorCreate({ ...errorCreate, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidationCreate()) {
      // You can use static data here to simulate an action
      setFormData({});
      seterrorCreate({});
      setopenAddmodel(false);
    }
  };

  const handleValidationCreate = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.fullName || formData.fullName === "") {
      formIsValid = false;
      errors.fullName = "Name cannot be empty";
    }

    if (!formData.email) {
      formIsValid = false;
      errors.email = "Email cannot be empty";
    }
    if (!formData.mobNo) {
      formIsValid = false;
      errors.mobNo = "Mobile Number cannot be empty";
    }
    if (!formData.dob) {
      formIsValid = false;
      errors.dob = "Date of Birth cannot be empty";
    }
    if (!formData.gender) {
      formIsValid = false;
      errors.gender = "Gender cannot be empty";
    }

    seterrorCreate(errors);
    return formIsValid;
  };

  // Delete Function
  let handleDelete = (data) => {
    const deletedData = staticData.filter(item => item._id !== data._id);
    console.log("Deleted Data:", deletedData);
    // Here you could update your state if you have it as an array.
  };

  return (
    <>
      <Loading loading={false} />
      <div className=' h-[90vh] w-full overflow-y-scroll  py-3 md:px-5 px-1  '>
        <div className=' w-full h-full  max-w-[100vw] '>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className=' font-semibold text-2xl'>{IntroductionJSON.Heading}</div>
            <Link to={"/app/introduction/add"}>
              <Button data={"Introduction"} />
            </Link>
          </div>
          <div className='md:py-10 md:px-10 '>
            {/* Table Rendering Static Data */}
            <div className="relative overflow-y-scroll max-h-[70vh] shadow-md sm:rounded-lg mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-100 divide-y-4">
                <thead className="text-[14px] text-[#5A607F] w-full bg-white capitalize">
                  <tr className='w-full'>
                    <th className="px-6 whitespace-nowrap font-bold py-3">Introduction</th>
                    <th className="px-6 py-3 font-bold">Content</th>
                    <th className="px-6 whitespace-nowrap py-3 font-bold">Image</th>
                    <th className="px-6 py-3 font-bold">Action</th>
                  </tr>
                </thead>

                {staticData.map((e, i) => {
                  return (
                    <tbody key={i} className='text-gray-500'>
                      <tr className='bg-white'>
                        <td className="px-6 py-3 font-normal">
                          {e.name?.[shortvalue] || "--"}
                        </td>

                        <td className="px-6 w-[50%] whitespace-nowrap overflow-ellipsis font-normal py-3">
                       
                            <div className='overflow-hidden w-[60rem] h-10'>
                              {parse(e.content?.[shortvalue] || "--")}
                            </div>
                         
                        </td>

                        <td className="px-6 py-3 font-normal">
                          <img className='h-10 w-10' src={e.image?.[shortvalue] || '/icons8-system-administrator-female-100.png'} alt='img'/>
                        </td>

                        <td className="flex items-center justify-start px-6 py-2 gap-3">
                          <Link title='Edit' to={`/app/introduction/${e._id}`} className='cursor-pointer shadow-md border p-1 '>
                            <RiEditLine className='text-blue-600 text-2xl'/>
                          </Link>
                          <div onClick={() => handleDelete(e)} className='cursor-pointer shadow-md border p-1'>
                            <MdDeleteOutline className='text-blue-600 text-2xl'/>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Model formData={formData} setFormData={setFormData} seterrorCreate={seterrorCreate} errorCreate={errorCreate} handleChange={handleChange} handleSubmit={handleSubmit} openAddmodel={openAddmodel} setopenAddmodel={setopenAddmodel} />
      <Modelupdate shortvalue={shortvalue} updatedata={{}} setupdatedata={() => {}} handleSubmitUpdate={() => {}} setupdateError={() => {}} updateError={{}} handleChangeUpdate={() => {}} openAddmodelUpdate={false} setopenAddmodelUpdate={() => {}} />
    </>
  );
};

export default Introduction;

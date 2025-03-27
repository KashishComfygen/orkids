import React, { useState } from 'react';
import QuestionJSON from './QuestionAdd.json'
import Model from './Modle/Model';
import Modelupdate from './Modle/Modelupdate';
import AddQuestionModel from './Modle/AddQuestionModel'
import { studentManagementaction } from '../../_actions';
import { useDispatch } from 'react-redux';


const QuestionAdd = () => {
  let dispatch = useDispatch()

  //create
  let [openAddmodel, setopenAddmodel] = useState(false)
  const [formData, setFormData] = useState({});
  let [errorCreate, seterrorCreate] = useState({})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    seterrorCreate({ ...errorCreate, [e.target.name]: "" })
    console.log(formData)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidationCreate()) {
      let datas = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
      }
      dispatch(studentManagementaction.createNewStudent(formData, datas))
      setFormData({})
      seterrorCreate({})
      setopenAddmodel(false)
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
      errors.gender = "Gender  cannot be empty";
    }

    if (!formData.email) {
      formIsValid = false;
      errors.email = "Email  cannot be empty";
    }

    if (!formData.grade) {
      formIsValid = false;
      errors.grade = "Grade  cannot be empty";
    }
    seterrorCreate(errors);
    return formIsValid;
  };

  // updatemodel
  let [openAddmodelUpdate, setopenAddmodelUpdate] = useState(false)
  let [updatedata, setupdatedata] = useState({})
  let [updateError, setupdateError] = useState({})

  let handleChangeUpdate = (e) => {
    setupdatedata({
      ...updatedata,
      [e.target.name]: e.target.value
    });
    setupdateError({ ...errorCreate, [e.target.name]: "" })
  }

  let handleSubmitUpdate = (e) => {
    e.preventDefault();
    if (handleValidationUpdate()) {


      const studentData = {
        "id": updatedata._id,
        "fullName": updatedata.fullName,
        "email": updatedata.email,
        "mobNo": updatedata.mobNo,
        "dob": updatedata.dob,
        "gender": updatedata.gender,
        "grade": updatedata.grade,
        board: updatedata.board,
        medium: updatedata.medium,
        motherTongue: updatedata.motherTongue,
        parentEducation: updatedata.parentEducation,
        parentIncome: updatedata.parentIncome,
        schoolName: updatedata.schoolName,
      };
      let temp = {
        "keyWord": "",
        "pageNo": 1,
        "sortBy": "slug",
        "sortOrder": "asc",
        "fromDate": "",
        "toDate": "",
        "size": 10
      }
      dispatch(studentManagementaction.updateStudent(studentData, temp))
      setupdatedata({})
      setopenAddmodelUpdate(false)
    }

  }

  const handleValidationUpdate = () => {
    let formIsValid = true;
    let errors = {};

    if (!updatedata.fullName || updatedata.fullName === "") {
      formIsValid = false;
      errors.fullName = "Name cannot be empty";
    }

    if (!updatedata.email) {
      formIsValid = false;
      errors.email = "Email cannot be empty";
    }
    if (!updatedata.mobNo) {
      formIsValid = false;
      errors.mobNo = "Mobile Number cannot be empty";
    }
    if (!updatedata.dob) {
      formIsValid = false;
      errors.dob = "Date of Birth cannot be empty";
    }
    if (!updatedata.gender) {
      formIsValid = false;
      errors.gender = "Gender  cannot be empty";
    }

    if (!updatedata.grade) {
      formIsValid = false;
      errors.grade = "Grade  cannot be empty";
    }

    setupdateError(errors);
    return formIsValid;
  };


  return (
    <>
      <div className=' h-[90vh] w-full  overflow-y-scroll  py-3 px-5  '>
        <div className=' w-full h-full max-w-[90vw] '>
          <div className=' flex justify-between p-5'>
            <div className=' font-semibold text-2xl'>{QuestionJSON.Heading}</div>
          </div>
          <div className='p-10'>
            <div className=''>
              {/*Table  */}


              <div className="">
                <AddQuestionModel />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Model formData={formData} setFormData={setFormData} seterrorCreate={seterrorCreate} errorCreate={errorCreate} handleChange={handleChange} handleSubmit={handleSubmit} openAddmodel={openAddmodel} setopenAddmodel={setopenAddmodel} />
      <Modelupdate updatedata={updatedata} setupdatedata={setupdatedata} handleSubmitUpdate={handleSubmitUpdate} setupdateError={setupdateError} updateError={updateError} handleChangeUpdate={handleChangeUpdate} openAddmodelUpdate={openAddmodelUpdate} setopenAddmodelUpdate={setopenAddmodelUpdate} />
    </>
  );
};

export default QuestionAdd;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { alertActions, languageAction, questionaction } from '../../../_actions';
import QuestionAddComponent from './QuestionAddComponent';
import Loader from '../../../components/Loader/Loader'
import { useNavigate } from 'react-router';

export default function AddQuestionModel() {
  let dispatch = useDispatch();
  let selector = useSelector(state => state)

  let [dataToSubmit, setDataToSubmit] = useState({
  })

  let [dataToSubmitImage, setDataToSubmitImage] = useState({
  })

  let [dataToSubmitAudio, setDataToSubmitAudio] = useState({
  })

  let [loaderAudio, setLoaderAudio] = useState(false)



  let handleChange = (e) => {
    let { name, value } = e.target;
    setDataToSubmit({ ...dataToSubmit, [name]: value });

  };



  useEffect(() => {
    let temp = {
      "keyWord": "",
      "pageNo": 1,
      "sortBy": "",
      "sortOrder": "asc",
      "fromDate": "",
      "toDate": "",
      "size": 150,
      // "isDisabled": false
    }
    dispatch(languageAction.getLanguageList(temp))
    dispatch(languageAction.getAllSkillIndicator())
  }, [])


  const navigate = useNavigate()

  const create = (obj) => {
    dispatch(questionaction.createNewQuestion(obj))
    navigate("/app/question")
  }


  let [shortname, setshortname] = useState('')
  const [setId, setSetId] = useState("1");
  let [error, setError] = useState("")
  let handleSubmitQuestion = () => {
    if (handleValidation()) {

      let obj = {
        "question": dataToSubmit,
        "image": dataToSubmitImage,
        "isSpecial": isSpecial?.toString() === "true",
        "setId": parseInt(setId),
        "audio": dataToSubmitAudio,
        "skillIndicatorId": isSpecial?.toString() === "true" ? "" : skillIndicator,
      }

      if (parseInt(setId) === -1) {
        Object.keys(obj.image).length !== 0 ? create(obj) : alertActions.error("Image Fields are Empty")
      } else {
        Object.keys(obj.question).length !== 0 ? create(obj) : alertActions.error("Fields are Empty")
      }
    }
  }

  let handleValidation = () => {
    let valid = true;
    if (!isSpecial) {
      if (!skillIndicator) {
        valid = false
        setError("Error skillIndicator can not be empty")
      }
    }
    return valid
  }

  const handleSetChange = (event) => {

    if (String(event.target.value) === "-1") {
      setIsSpecial(false);
      setSetId(event.target.value);
    } else {
      setSetId(event.target.value);
    }


  };













  let [skillIndicator, setskillIndicator] = useState("")

  let { language } = selector || {}
  let { getSkillAllIndicatior, loading } = language && language ? language : {}


  let { list } = language && language?.getlanguageSuccess ? language?.getlanguageSuccess : {}

  const handleSKillChange = (event) => {
    const selectedSkillId = event.target.value;
    setskillIndicator(selectedSkillId);
    setError("")
  };


  let [isSpecial, setIsSpecial] = useState(false)
  const handleSpecialChange = (event) => {
    setIsSpecial(event.target.value === 'true');
  };

  return (
    <div className=''>
      <Loader loading={loading} />
      <div className='  gap-4 flex flex-col mb-3 '>
        <div className=' w-96 flex flex-col gap-5 p-2'>

          <div className='flex justify-between'>
            <label htmlFor="set">Set</label>
            <select id="set" value={setId} onChange={handleSetChange} className='bg-white w-[50%] p-1'>
              <option value="-1">Splash</option>
              <option value="1">Set-1</option>
              <option value="2">Set-2</option>
              <option value="3">Set-3</option>
            </select>
          </div>

          <div className='flex justify-between'>
            <label htmlFor="set">Special</label>
            <select id="set" value={isSpecial?.toString()} onChange={handleSpecialChange} className='bg-white w-[50%] p-1'>
              {String(setId) !== "-1" && <option value="true">Special Question</option>}
              <option value="false">Normal Question</option>
            </select>
          </div>

          {isSpecial?.toString() === "true" ?
            <div className=' hidden justify-between'>
              <label htmlFor="set">Skill</label>
              <select id="set" value={skillIndicator?.name} onChange={handleSKillChange} >
                <option value="">Select Skill</option>
                {getSkillAllIndicatior && getSkillAllIndicatior?.data && getSkillAllIndicatior?.data.length > 0 && getSkillAllIndicatior?.data.map((e) => (

                  <option value={e?._id}>{e?.name || "--"}</option>
                ))}

              </select>
            </div>

            :
            <div className='flex justify-between'>
              <label htmlFor="set">Skill</label>
              <select id="set" value={skillIndicator?.name} onChange={handleSKillChange} className={`${error ? 'bg-white border-2 border-red-600  w-1/2 p-1' : 'bg-white  w-1/2 p-1'}`}>
                <option value="">Select Skill</option>
                {getSkillAllIndicatior && getSkillAllIndicatior?.data && getSkillAllIndicatior?.data.length > 0 && getSkillAllIndicatior?.data.map((e) => (

                  <option value={e?._id}>{e?.name || "--"}</option>
                ))}

              </select>
            </div>}


        </div>
      </div>
      {list && list.map((elem, index) => (
        <div key={index}>
          <QuestionAddComponent
            setDataToSubmit={setDataToSubmit}
            shortname={shortname}
            setshortname={setshortname}
            elem={elem}
            handleChange={handleChange}
            // handleChangeImage={handleChangeImage}
            id={elem.indi}
            setDataToSubmitImage={setDataToSubmitImage}
            // handleChangeAudio={handleChangeAudio}

            setDataToSubmitAudio={setDataToSubmitAudio}
            dataToSubmitAudio={dataToSubmitAudio}
            dataToSubmitImage={dataToSubmitImage}
            dataToSubmit={dataToSubmit}
            error={error}
            setError={setError}
            //  loaderImage={loaderImage}
            //  setLoaderImage={setLoaderImage}
            loaderAudio={loaderAudio}
            setLoaderAudio={setLoaderAudio}
          />
        </div>
      ))}

      <div className=' w-full flex' >
        <div onClick={handleSubmitQuestion}>

          <button className=' w-[147px] h-[40px] bg-[#1E5EFF] flex justify-center items-center text-white gap-1 rounded-md mt-4'>Add</button>
        </div>

      </div>

    </div>


  )
}

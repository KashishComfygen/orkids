/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import ReactQuill from 'react-quill';

export default function Modelupdate({ shortvalue, updatedata, setupdatedata, updateError, setopenAddmodelUpdate, openAddmodelUpdate, setupdateError }) {



  let handleCloseModel = () => {
    setupdatedata({})
    setupdateError({})
    setopenAddmodelUpdate(false)
  }

  const quillOptions = {
    modules: {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ]
    },
    formats: [
      'header',
      'bold', 'italic', 'underline', 'strike',
      'list', 'indent', 'align',
      'link', 'image', 'video'
    ]
  };







  const [value, setValue] = useState('');
  //Service
  const [dummyObj, setdummyObj] = useState({})
  useEffect(() => {
    setdummyObj({ [shortvalue]: updatedata && updatedata?.service ? updatedata?.service[shortvalue] : "" });
    const contentValue = updatedata?.content?.[shortvalue] || "";
    setValue(contentValue);
  }, [updatedata]);

  let handleChangeUpdate = (e) => {
    let { name, value } = e.target
    console.log(name, value)
    setdummyObj({ ...dummyObj, [name]: value })

  }





  const handleSubmitUpdate = (e) => {
    e.preventDefault();
  };


  return (
    <div>

      <div className={openAddmodelUpdate ? "fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
        <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[35rem]  w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
          {/*modal header*/}
          <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
            <p className="text-xl font-bold text-white uppercase">Update Service</p>
            <div onClick={handleCloseModel} className="rounded-full cursor-pointer modal-close bg-white p-1">
              <IoClose />
            </div>
          </div>

          <div className='p-5'>
            <form onSubmit={handleSubmitUpdate}>
              <div className=' h-96 overflow-y-scroll w-full p-2'>
                <div className=' flex flex-col gap-1'>


                  <div className=' text-lg border-b-2 h-full '>Service Information</div>
                  <img src='/icons8-system-administrator-female-100.png' className=' h-20 w-20' alt='img' />

                  <div className="mb-4 flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Service:</label>
                    <input
                      type="text"
                      id="service"
                      name={shortvalue}
                      value={dummyObj[shortvalue] || ""}
                      onChange={handleChangeUpdate}
                      className="border border-gray-300 rounded-md p-2 w-full outline-none "
                      placeholder="Language"
                    />
                    {updateError && updateError["service"] && <div className=' text-sm text-red-500'>{updateError.service}</div>}
                  </div>


                  <div className="mb-4 flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Content:</label>
                    <ReactQuill className=' bg-white h-20 ' modules={quillOptions.modules}
                      formats={quillOptions.formats} name="content" theme="snow" value={value} onChange={setValue} />

                    {updateError && updateError["service"] && <div className=' text-sm text-red-500'>{updateError.service}</div>}
                  </div>

                </div>

                <div className=' flex flex-col gap-1'>


                </div>


              </div>

              <button type="submit" className="bg-blue-500 mt-2 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

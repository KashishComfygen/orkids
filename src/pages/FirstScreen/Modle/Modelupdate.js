import axios from 'axios';
import React, { useMemo, useRef } from 'react'
import { IoClose } from "react-icons/io5";
import ReactQuill from 'react-quill';


export default function Modelupdate({ setupdateError, loaderImage, updatedata, imageChange, setLoaderImage, setimageChange, updateError, handleChangeUpdate, handleSubmitUpdate, setopenAddmodelUpdate, openAddmodelUpdate }) {
  console.log(updatedata)
  const imgRef = useRef(null)
  const quillRef = useRef(null);

  const handleImage = async (e) => {
    e.preventDefault();
   
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

   
  };


  let close = () => {
    setopenAddmodelUpdate(false)
    setupdateError({})
  }

  // console.log(imagedata.target.file)
  const handleImageUpload = async (value) => {
    if (value) {
      await imgRef.current.click();

    }

  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['link'],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#fabcbc', '#ffebcc', '#fffaac', '#d4fa8f', '#cbf0f8', '#ffcccc', '#f2f2f2', '#cccccc', '#fabbbb', '#f7c6a0', '#fef6b6', '#d3f08a', '#b7ebf6', '#f0baba', '#e6e6e6', '#4D207A'] }],
        ['clean', "image"]
      ],
      handlers: {
        image: handleImageUpload
      }
    }
  }), []);



  const quillOptions = {
    modules: {
      toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'align': [] }],
          ['link'],
          [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#fabcbc', '#ffebcc', '#fffaac', '#d4fa8f', '#cbf0f8', '#ffcccc', '#f2f2f2', '#cccccc', '#fabbbb', '#f7c6a0', '#fef6b6', '#d3f08a', '#b7ebf6', '#f0baba', '#e6e6e6', '#4D207A'] }],
          ['clean']
        ]

      },
    },
    formats: [
      'header',
      'bold', 'italic', 'underline', 'strike',
      'list', 'indent', 'align',
      'link',
      'color',
      'image',
    ],

  };




  return (
    <div >

      <div className={openAddmodelUpdate ? "fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1" : "hidden"} style={{ marginTop: '0rem', }}  >
        <div className="animate__animated    animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[35rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
          {/*modal header*/}
          <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
            <p className="text-xl font-bold text-white uppercase">Update First Screen</p>
            <div onClick={() => close()} className="rounded-full cursor-pointer modal-close bg-white p-1">
              <IoClose />
            </div>
          </div>



          {loaderImage && <div className=' absolute top-1/2 right-1/2'>
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>}




          <div className='p-5 h-[60vh] overflow-scroll'>
            <form onSubmit={handleSubmitUpdate}>

              <ReactQuill ref={quillRef} value={updatedata.link} formats={quillOptions.formats} modules={modules} onChange={(content) => handleChangeUpdate(content)} className='h-full rounded-md w-full p-3 outline-none' />

              <input accept='image/*' ref={imgRef} className=' hidden' onChange={(e) => handleImage(e)} type='file' />

              {/*  */}
              <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

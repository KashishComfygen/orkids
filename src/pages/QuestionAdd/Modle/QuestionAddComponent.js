/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6"
import { FaPlusCircle } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import { authHeader } from '../../../_helpers';
import axios from 'axios'
export default function QuestionAddComponent({ setDataToSubmitAudio, setDataToSubmitImage, dataToSubmitAudio, dataToSubmitImage, dataToSubmit, elem, setshortname, handleChange }) {
    let [open, setOpen] = useState(false)
    let [loaderImage, setLoaderImage] = useState(false)

    let handleChangeImage = async (e) => {
        let { name } = e.target;
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        try {
            setLoaderImage(true)
            const response = await axios.post(`https://orkid.jamsara.com/api/upload`, formData, {
                headers: {
                    'Authorization': authHeader().Authorization,
                    'Content-Type': 'multipart/form-data'
                }
            });
            const responseData = response.data;
            setDataToSubmitImage({ ...dataToSubmitImage, [name]: responseData?.imageURL });
            setLoaderImage(false)
            return responseData;
        } catch (error) {
            console.error('Error:', error);
            setLoaderImage(false)
            throw error;
        }
    };

    let [loaderAudio, setLoaderAudio] = useState(false)
    let handleChangeAudio = async (e) => {
        let { name } = e.target;
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        try {
            setLoaderAudio(true)
            const response = await axios.post(`https://orkid.jamsara.com/api/upload`, formData, {
                headers: {
                    'Authorization': authHeader().Authorization,
                    'Content-Type': 'multipart/form-data'
                }
            });
            const responseData = response.data;

            console.log(responseData?.imageURL);
            setDataToSubmitAudio({ ...dataToSubmitAudio, [name]: responseData?.imageURL });
            setLoaderAudio(false)
            return responseData;
        } catch (error) {
            console.error('Error:', error);
            setLoaderAudio(false)
            throw error;
        }
    };




    const fileInputRef = useRef(null);

    const fileInputRefAudio = useRef(null);

    useEffect(() => {
        setshortname({ shortName: elem?.shortName })

    }, [open])


    let handleOpen = () => {
        setOpen(true);
    }


    const handleLabelClickAudio = () => {
        fileInputRefAudio.current.click();
    };

    const handleLabelClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className=' mb-2'>
            <div  >
                {!open && <div className=' bg-[#C7C7C7] px-2 py-1 items-center mb-1 flex justify-between'>
                    <div>{elem && elem?.name ? elem?.name : ""}</div>
                    <FaPlus onClick={handleOpen} />
                </div>}


                {open && <div className='flex  flex-col items-center justify-center gap-2 relative  p-2 bg-[#EAEAEA]'>
                    <div className='flex gap-2 w-[90%] '>
                        <label className='w-[9%] hidden md:block' >Language</label>
                        <input disabled name='language' className='w-full px-2 py-1 rounded-md outline-none ' type='text' value={elem && elem?.name ? elem?.name : ""} />

                    </div>
                    <div className=' top-0 p-2 absolute right-0 cursor-pointer'> <FaMinus onClick={() => setOpen(false)} /></div>
                    <div className='flex flex-wrap gap-2 w-[90%]'>
                        <label className='w-[9%]' >Question</label>
                        <textarea
                            id={elem.shortName}
                            value={dataToSubmit && dataToSubmit[elem.shortName] ? dataToSubmit[elem.shortName] : ""}
                            name={elem.shortName}
                            onChange={handleChange}
                            rows={5}
                            className='resize-none w-full px-2 py-1 rounded-md'
                        />


                    </div>
                    <div className='flex-col md:flex-row flex gap-2 w-[90%]'>
                        <label className='w-[9%]' >Audio</label>
                        {!loaderAudio ? <div className=' relative  flex'>
                            <label onClick={handleLabelClickAudio} className='w-[9%] absolute top-1' ><FaPlusCircle /></label>

                            {dataToSubmitAudio[elem?.shortName] ? <audio className='ml-3' controls>
                                <source src={dataToSubmitAudio[elem?.shortName]} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio> : ""}



                            <input
                                ref={fileInputRefAudio}
                                id={elem.shortName}
                                name={elem.shortName}
                                value={dataToSubmit?.file || ""}
                                onChange={handleChangeAudio}
                                className='w-full px-2 hidden py-1 rounded-md'
                                accept='audio/*'
                                type='file' />

                        </div> : <div className=' flex justify-center items-center'><CircularProgress />Uploading....</div>}
                    </div>

                    <div className='flex  flex-col md:flex-row gap-2 w-[90%]'>
                        <label className='w-[9%]' >Image</label>
                        {!loaderImage ? <div className=' relative'>
                            <label onClick={handleLabelClick} className='w-[9%] absolute top-1' ><FaPlusCircle /></label>
                            <img
                                className='h-16 w-16'
                                onError={(e) => e.target.src = "/icons8-system-administrator-female-100.png"}
                                src={dataToSubmitImage[elem?.shortName] || '/icons8-system-administrator-female-100.png'}
                                alt="img"
                            />
                            <input
                                ref={fileInputRef}
                                id={elem.shortName}
                                name={elem.shortName}
                                value={dataToSubmit?.file || ""} accept='image/*' onChange={handleChangeImage} className=' w-full px-2  hidden py-1 rounded-md' type='file' />
                        </div> : <div className=' flex justify-center items-center'><CircularProgress />Uploading....</div>}


                    </div>

                    {/* <div className='flex gap-2 w-[90%]'>
                        <label className='w-[9%]' >Answer</label>
                        <div className=' flex justify-between w-full gap-4'>
                            {data && data.length > 0 && data?.map((e, i) => (

                                <input key={i} value={e?.name?.[elem && elem?.shortName ? elem?.shortName : ""] || ""} onChange={handleChange} name='value1' className=' w-full px-2 py-1 rounded-md' type='text' />
                            ))}

                        </div>
                    </div> */}

                    {/* <div className='flex gap-2 w-[90%]'>
                        <label className='w-[9%]'>Correct Option</label>
                        <div className='flex justify-between w-full gap-4'>
                            <select onChange={handleChange} value={dataToSubmit ? dataToSubmit.correctOption : ""}   name='correctOption'   className='w-full px-2 py-1 rounded-md'>
                                <option value="">
                                    Choose Correct Option
                                </option>
                                {data && data.length > 0 && data.map((e, i) => (
                                    <option key={i} value={e?._id || ""}>
                                        {e?.name?.[elem && elem?.shortName ? elem?.shortName : ""] || ""}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div> */}



                </div>}

            </div>
        </div>
    )
}

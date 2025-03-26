import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import Loading from "../../components/Loader/Loader";
import Tooltip from '@mui/material/Tooltip';
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
// Static Data for the Question
const questionData = {
    "indexing": null,
    "_id": "65f305a212b00f874dc9fec1",
    "question": {
        "hi": "वाक्यों की उचित बनावट / व्याकरण में कठिनाई होना। । ",
        "en": "Has difficulty with sentence structure and/ or grammar.",
        "bn": "বাক্য গঠন এবং/অথবা ব্যাকরণে সমস্যা হয়।",
        "mr": "वाक्याची योग्य रचना करणे आणि/ किंवा व्याकरण अवघड जाते.",
        "as": "বাক্যৰ গাঁথনি আৰু/অথবা ব্যাকৰণত অসুবিধা হয়।",
        "ur": "جملوں کو مرتب کر نے اور گرائمر میں مشکل ہوتی ہے۔",
        "ml": "വാക്യഘടനയിലും / വ്യാകരണത്തിലും ബുദ്ധിമുട്ടുണ്ട് .",
        "pa": "ਵਾਕ ਬਣਾਉਣ ਅਤੇ/ਜਾਂ ਵਿਆਕਰਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਆਉਂਦੀ ਹੈ।",
        "gu": "વાક્યોની યોગ્ય રચના/ વ્યાકરણમાં કઠિનાઈ હોવી.",
        "te": "వాక్యనిర్మాణం చేయడంలో ఇబ్బందిపడటం లేదా వ్యాకరణం ఉపయోగించడంలో ఇబ్బందిపడటం.",
        "ta": "வாக்கிய அமைப்பு மற்றும்/அல்லது இலக்கணத்தில் சிரமம்",
        "kn": "ವಾಕ್ಯ ರಚನೆ/ವ್ಯಾಕರಣ ಕುರಿತ ತೊಂದರೆ."
    },
    "image": {
        "hi": "https://res.cloudinary.com/dnd2isyjo/image/upload/v1712322761/your_folder_name/abtqywuhyw3q9t4wz6h1.jpg",
        "en": "https://res.cloudinary.com/dnd2isyjo/image/upload/v1711635311/your_folder_name/l9d28cdrthznluivbxgd.jpg",
        // Add other language images here if needed
    },
    "setId": 1,
    "isSpecial": false,
    "skillIndicatorId": "65f193f6c00d427cd134a613",
    "audio": {
        "hi": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1712215529/your_folder_name/z56jpnykkgylt3rzftyh.mp3",
        "en": "https://res.cloudinary.com/dnd2isyjo/video/upload/v1718179597/your_folder_name/hg7dqhkhtvxvnxeeidqo.mp3",
        // Add other language audio links here if needed
    },
    "options": [],
    "isMultiLanguage": "YES",
    "slug": 29
};

const Question = () => {
    const [filter, setFilter] = useState("1");
    const [specialFilter, setspecialFilter] = useState(true);

    // Handle special filter
    const handleSpecialChange = (e) => {
        const value = e.target.value === 'true';
        setspecialFilter(value);
    };

    // Handle question set filter
    const handleQuestionChange = (e) => {
        if (e.target.value === "-1") {
            setspecialFilter(true);
            setFilter(e.target.value);
        } else {
            setFilter(e.target.value);
        }
    };

    // Handle delete action
    const handleDelete = (data) => {
        confirmAlert({
            title: 'Delete',
            message: `Are you sure want to Delete?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => console.log('Deleted', data),
                },
                {
                    label: 'No',
                }
            ]
        });
    };

    // Static rendering of the question list
    const renderQuestionList = (specialFilter) => {
        return specialFilter
            ? [questionData] // If specialFilter is true, render this question (you can extend this if needed)
            : [questionData]; // Can render a different list if specialFilter is false
    };

    return (
        <>
            <Loading loading={false} />
            <div className=' h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
                <div className=' w-full h-full max-w-[100vw]'>
                    <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
                        <div className=' font-semibold text-2xl'>Questions</div>
                        <Link to={"/app/question/add"}>
                            <Button data={"Add Question"} />
                        </Link>
                    </div>
                    <div className='md:py-10 md:px-10'>
                        <div className=''>
                            {/* search and filter area */}
                            <div className='flex items-start gap-4 text-[#7E84A3]'>

                                <div className=' max-w-lg bg-white h-[40px] flex items-center px-2 border border-[#D9E1EC] rounded gap-2'>
                                    <label htmlFor="set"></label>
                                    <select id="set" value={filter} onChange={handleQuestionChange} className='bg-white p-1 outline-none'>
                                        <option value="-1">Splash</option>
                                        <option value="1">Set-1</option>
                                        <option value="2">Set-2</option>
                                        <option value="3">Set-3</option>
                                    </select>
                                </div>

                                <div className=' max-w-lg bg-white h-[40px] flex items-center px-2 border border-[#D9E1EC] rounded gap-2'>
                                    <label htmlFor="set"></label>
                                    <select id="set" value={specialFilter} onChange={handleSpecialChange} className='bg-white p-1 outline-none'>
                                        <option value="false">Special</option>
                                        <option value="true">Normal</option>
                                    </select>
                                </div>

                            </div>

                            {/* Table */}
                            <div className=''>
                                <div className="relative overflow-y-scroll shadow-md sm:rounded-lg mt-5 ">
                                    <table className=" w-full text-sm text-left rtl:text-right  text-gray-500 divide-y-4">
                                        <thead className="text-[14px] text-[#5A607F] w-full bg-white capitalize">
                                            <tr className='w-full'>
                                                <th className="px-6 py-3 font-bold">Q.No</th>
                                                <th className="px-6 py-3 font-bold">Question</th>
                                                <th className="px-6 py-3 font-bold">Image</th>
                                                <th className="px-6 py-3 font-bold">Answer Option</th>
                                                <th className="px-6 py-3 font-bold">Multi Language</th>
                                                <th className="px-6 py-3 font-bold">Set</th>
                                                <th className="px-6 py-3 font-bold">Audio</th>
                                                <th className="px-6 py-3 font-bold">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderQuestionList(specialFilter).map((question, index) => (
                                                <tr key={index} className="bg-white">
                                                    <td className="px-6 py-3 font-normal">{index + 1}</td>
                                                    <td className="px-6 py-3 font-normal">
                                                        <div className="flex gap-2 items-center w-32 space-x-6">
                                                            <Tooltip title={question.question.en || "--"} arrow>
                                                                <div className=' w-32 h-10 overflow-hidden text-nowrap text-ellipsis flex justify-start items-center'>
                                                                    {question.question.en || "--"}
                                                                </div>
                                                            </Tooltip>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-3 font-normal">
                                                        <img className='h-10 w-10' src={question.image.en || '/icons8-system-administrator-female-100.png'} alt="img" />
                                                    </td>
                                                    <td className="px-6 py-3 font-normal">YES | NO | Sometime</td>
                                                    <td className="px-6 py-3 font-normal">{question.isMultiLanguage || "--"}</td>
                                                    <td className="px-6 py-3 font-normal">{question.setId}</td>
                                                    <td className="px-6 py-3 font-normal">YES</td>
                                                    <td className="px-6 py-3 flex items-center justify-center lg:justify-start lg:gap-3">
                                                        <td className="flex items-center justify-start px-6 py-2 gap-3">
                                                                                 <Link title='Edit' className='cursor-pointer shadow-md border p-1 '>
                                                                                   <RiEditLine className='text-blue-600 text-2xl'/>
                                                                                 </Link>
                                                                                 <div className='cursor-pointer shadow-md border p-1'>
                                                                                   <MdDeleteOutline className='text-blue-600 text-2xl'/>
                                                                                 </div>
                                                                               </td>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { languageAction } from '../../../_actions/language.action';
import { IoSend } from "react-icons/io5";
import { IoReloadOutline } from "react-icons/io5";

import CircularProgress from '@mui/material/CircularProgress';
export default function Model({formData,setFormData,errorCreate,handleChange,handleSubmit,setopenAddmodel,openAddmodel}) {
let dispatch  = useDispatch()
let selector = useSelector(state=>state)

let {ticketId}=  formData&&formData?formData:{}
  let handleClose=()=>{
   setFormData({...formData,msg:''})
    setopenAddmodel(false)
  }

  let [refresh,setRefresh] = useState(false)

  let handleRefresh = () =>{
    setRefresh(prevRefresh => !prevRefresh);
   setFormData({...formData,msg:''})

  }


  useEffect(() => {
    if (ticketId) {
      dispatch(languageAction.getMsgListByTicketId({"ticketId":ticketId}));
     setFormData({...formData,msg:''})
    }
  }, [ticketId,refresh]);

let {language} = selector&&selector?selector:{}
let {getChatById,loading} = language&&language?language:{}
let {data} = getChatById&&getChatById?getChatById:{}

  

  return (
    <div>
        {/* <Loader loading={loading}/> */}

        <div className={openAddmodel?"fixed w-full top-0 left-0 h-full inset-0 z-50 overflow-hidden mt-0 flex justify-center items-center overflow-y-auto bg-black/40 md:p-0 p-1":"hidden" } style={{ marginTop: '0rem', }}  >
      <div className="animate__animated animate__fadeInDown animate__faster bg-[#f8f8fb]  md:w-[30rem] w-full  mx-auto rounded shadow-lg  overflow-y-auto mt-2">
        {/*modal header*/}
        <div className="flex items-center justify-between p-6 py-2 bg-[#1E5EFF] border-b">
          <p className="text-xl font-bold text-white uppercase">Chat</p>
          <div className=' flex gap-5'>

          <div title='Reload' onClick={()=>handleRefresh()}  className="rounded-full cursor-pointer modal-close bg-white p-1">
       <IoReloadOutline/>
          </div>


          <div title='Close' onClick={()=>handleClose()} className="rounded-full cursor-pointer modal-close bg-white p-1">
       <IoClose/>
          </div>
          </div>

          
        </div>
        
           
           <div className='p-5 h-[25rem]'>
           <div className='h-[90%] overflow-y-scroll relative'>
            {loading?<div className=' flex justify-center items-center h-full'>

              <CircularProgress />
            </div>
             :
            
            <div>
            {data && data.length > 0 && data.map((e) => {
      return (
        <>
        <div className={`flex flex-col my-3 ${e?.isAdmin ? 'justify-end items-end' : 'justify-start items-start'}`}>
          <div className={`${e?.isAdmin ? 'bg-blue-500 items-end' : 'bg-green-400 items-start'} text-white mr-2 relative flex flex-col rounded-full p-2 px-4`} style={{ borderBottomLeftRadius: e?.isAdmin ? '' : 0, borderBottomRightRadius: e?.isAdmin ? 0 : '' }}>
            <div className='pb-2'>{e?.msg}</div>
            <div className="text-xs">{e?.createdAt ? new Date(e.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "--"}</div>
          </div>
        </div>
        </>
      );
    })}
            </div>
            }
          
   
  </div>
           {/* : (

)} */}

            <div className=' flex h-[10%]  gap-2 '>
      <input type='text' name='msg' value={formData?.msg||""} onChange={handleChange}  placeholder='Enter Message' className={`flex-1 rounded-md shadow-sm outline-none border px-2 ${errorCreate.msg ? 'border-red-500 border' : ''}`}
 />
      <button onClick={handleSubmit} className=' flex  bg-[#1E5EFF] text-white justify-center items-center px-2  rounded-lg '> <IoSend /></button>
</div>
           {/* <form onSubmit={handleSubmit}>
 
       
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">ShortName:</label>
          <input 
            type="text" 
            id="shortName" 
            name="shortName" 
            value={formData.shortName||""} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter ShortName" 
          />
  {errorCreate&&errorCreate["shortName"]&&<div className=' text-sm text-red-500'>{errorCreate.shortName}</div>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="scriptName">Script Name:</label>
          <input 
            type="text" 
            id="scriptName" 
            name="scriptName" 
            value={formData.scriptName||""} 
            onChange={handleChange} 
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter ScriptName" 
          />
            {errorCreate&&errorCreate["scriptName"]&&<div className=' text-sm text-red-500'>{errorCreate.scriptName}</div>}
        </div>



      
        <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form> */}
           </div>
    
      </div>
    </div>

    </div>
  )
}

import React from 'react'
import { IoMdAdd } from "react-icons/io";

export default function Button({ data }) {
  return (

    <button className='w-full px-4 py-2 bg-[#1E5EFF] flex justify-center items-center text-white gap-1 rounded-md'><IoMdAdd className='' />{data}</button>

  )
}

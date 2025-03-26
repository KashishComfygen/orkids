import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import ReportJSON from './Report.json'
import Model from './Modle/Model';
import Modelupdate from './Modle/Modelupdate';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import Tooltip from '@mui/material/Tooltip';
import ReactPaginate from 'react-paginate';

// Static Data (provided in the question)
const staticData = [
  {
    "_id": "660ba4ed5df494774fd89104",
    "name": {
      "hi": "",
      "en": "Comprehension",
      "bn": "",
      "mr": "",
      "as": "",
      "ur": "",
      "ml": "",
      "pa": "",
      "gu": "",
      "te": "",
      "ta": "",
      "kn": ""
    },
    "desc": {
      "hi": "",
      "en": "Ability of the child to process text, understand its meaning, and to integrate\nwith what the he/she already knows.",
      "bn": "",
      "mr": "",
      "as": "",
      "ur": "",
      "ml": "",
      "pa": "",
      "gu": "",
      "te": "",
      "ta": "",
      "kn": ""
    },
    "skillIndicatorId": "65f193e7c00d427cd134a60f",
    "createdBy": "65defd93a553d5b9ff275f13",
    "isDisable": false,
    "isDeleted": false,
    "createdAt": 1712039149000,
    "updatedAt": 1712039149000,
    "date": 1712016000000,
    "week": 1711929600000,
    "month": 1711929600000,
    "year": 1704067200000,
    "slug": 12
  }
];

const Report = () => {
  // State for pagination
  const [size, setSize] = useState(10);
  const [isMobile, setIsMobile] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  // Handle delete
  const handleDelete = (data) => {
    // Logic for delete action (you can implement your confirmation dialog or API call here)
    console.log(`Delete report with ID: ${data._id}`);
  };

  // Pagination handler
  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <>
      <div className='h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
        <div className='w-full h-full max-w-[100vw]'>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className='font-semibold text-2xl'>{ReportJSON.Heading}</div>
            <Link>
              <Button data={"Add Report"} />
            </Link>
          </div>

          <div className='md:py-10 md:px-10'>
            <div className=''>
              {/* Table for rendering static data */}
              <div className="relative overflow-y-scroll max-h-[70vh] shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 divide-y-4">
                  <thead className="text-[14px] text-[#5A607F] w-full bg-white capitalize">
                    <tr className='w-full'>
                      <th className="px-6 whitespace-nowrap font-bold py-3">Q.No</th>
                      <th className="px-6 py-3 font-bold">Name</th>
                      <th className="px-6 py-3 font-bold">Description</th>
                      <th className="px-6 py-3 font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staticData && staticData.length > 0 && staticData.map((e, i) => (
                      <tr key={i} className='bg-white'>
                        <td className="px-6 py-3 font-normal">{i + 1}</td>
                        <td className="px-6 whitespace-nowrap font-normal py-3">
                          <Tooltip title={e?.name?.en || "--"} arrow>
                            <div className='w-32 h-10 overflow-hidden text-nowrap text-ellipsis flex justify-start items-center'>
                              {e?.name?.en || "--"}
                            </div>
                          </Tooltip>
                        </td>
                        <td className="px-6 whitespace-nowrap overflow-ellipsis font-normal py-3">
                          <Tooltip title={e?.desc?.en || "--"} arrow>
                            <div className='overflow-hidden w-96'>
                              {e?.desc?.en || "--"}
                            </div>
                          </Tooltip>
                        </td>
                        <td className="flex items-center justify-start px-6 py-2 gap-3">
                          <Link title='Edit'  className='cursor-pointer shadow-md border p-1'>
                            <RiEditLine className='text-blue-600 text-2xl' />
                          </Link>
                          <div onClick={() => handleDelete(e)} className='cursor-pointer shadow-md border p-1'>
                            <MdDeleteOutline className='text-blue-600 text-2xl' />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {isMobile && staticData.length > size ? (
                <ReactPaginate
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={Math.ceil(staticData.length / size)}
                  marginPagesDisplayed={0}
                  pageRangeDisplayed={10}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  pageClassName={'page-cls'}
                  activeClassName={'active'}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Model formData={{}} setFormData={{}} seterrorCreate={{}} errorCreate={{}} handleChange={{}} handleSubmit={{}} openAddmodel={false} setopenAddmodel={{}} />
      <Modelupdate updatedata={{}} setupdatedata={{}} handleSubmitUpdate={{}} setupdateError={{}} updateError={{}} handleChangeUpdate={{}} openAddmodelUpdate={false} setopenAddmodelUpdate={{}} />
    </>
  );
};

export default Report;

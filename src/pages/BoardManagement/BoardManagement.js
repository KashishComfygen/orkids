/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Model from "./Modle/Model";
import Modelupdate from './Modle/Modelupdate';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from 'react-paginate';
import Tooltip from '@mui/material/Tooltip';
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

// Static JSON Data
const boardData = {
  total: 7,
  list: [
    {
      name: "Other",
      shortName: "Other",
      isDisable: false,
      isDeleted: false,
      createdAt: 1713943543964,
      slug: 10,
      id: "6628b3f71e45d9e4d275d0ca"
    },
    {
      name: "State board",
      shortName: "State board",
      isDisable: false,
      isDeleted: false,
      createdAt: 1713943389832,
      slug: 9,
      id: "6628b35d1e45d9e4d275d0b5"
    }
  ]
};

const BoardManagement = () => {
  const [boards, setBoards] = useState(boardData.list);
  const [page, setPage] = useState(0);
  const size = 10; // Number of items per page

  // Handle Delete
  const handleDelete = (boardId) => {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this board?",
      buttons: [
        {
          label: "Yes",
          onClick: () => setBoards(boards.filter(board => board.id !== boardId))
        },
        {
          label: "No"
        }
      ]
    });
  };

  // Pagination Handler
  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  // Paginate Data
  const paginatedBoards = boards.slice(page * size, (page + 1) * size);

  return (
    <>
      <div className='h-[90vh] w-full overflow-y-scroll py-3 md:px-5 px-1'>
        <div className='w-full h-full max-w-[100vw]'>
          <div className='flex justify-between md:flex-row flex-col gap-2 p-5'>
            <div className='font-semibold text-2xl'>Board Management</div>
            <Link>
            <Button data={"Add Board"} />
            </Link>
          
          </div>
          
          <div className='md:py-10 md:px-10'>
            <div className='relative overflow-y-scroll shadow-md sm:rounded-lg mt-5'>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 divide-y-4">
                <thead className="text-[14px] text-[#5A607F] bg-white capitalize">
                  <tr>
                    <th className="px-6 py-3 font-bold">Board Name</th>
                    <th className="px-6 py-3 font-bold">Board Short Name</th>
                    <th className="px-6 py-3 font-bold"></th>
                  </tr>
                </thead>
                <tbody className='divide-y-4'>
                  {paginatedBoards.map((board, i) => (
                    <tr className="bg-white border-b text-[#121212] hover:bg-gray-50" key={board.id}>
                      <td className="w-[55%] p-4">
                        <div className="flex gap-2 items-center space-x-6 whitespace-nowrap">
                          <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"/>
                          {board.name || "--"}
                        </div>
                      </td>
                      <td className="w-1/3 p-4">
                        <Tooltip title={board.shortName || "--"} arrow>
                          <div className='' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {board.shortName || "--"}
                          </div>
                        </Tooltip>
                      </td>
                      <td className="flex items-center justify-end px-6 py-4 gap-3">
                        <div className='cursor-pointer shadow-md border p-1'><RiEditLine className='text-blue-600 text-2xl' /></div>
                        <div className='cursor-pointer shadow-md border p-1' onClick={() => handleDelete(board.id)}>
                          <MdDeleteOutline className='text-blue-600 text-2xl' />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {boards.length > size && (
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={Math.ceil(boards.length / size)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-cls'}
                activeClassName={'active'}
                forcePage={page}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardManagement;

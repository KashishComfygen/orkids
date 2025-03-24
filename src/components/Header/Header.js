import React, { Fragment } from "react";
import { Menu } from '@headlessui/react';
import { Button } from '@headlessui/react';
import HeaderJSON from "./Header.json"
export default function Header() {


  return (
    <Fragment>
      <div className="bg-white justify-between items-center px-4 relative z-10 flex-shrink-0 flex h-16 border-b border-black border-opacity-10">

        <div className=" flex items-center w-64  ">

          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div className=" hidden xl:block">
                  <Button className="max-w-xs  flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline">
                    <img src={`/${HeaderJSON["Admin-image"]}`} alt="" className="rounded-full relative flex justify-center items-center mr-4" width={"30px"} />
                  </Button>
                </div>
              </>
            )}
          </Menu>


          <div className="font-semibold ml-20 xl:ml-0 xl:flex text-lg  justify-center items-center gap-2">{HeaderJSON["Admin-name"]}
            {/* <MdKeyboardArrowDown className=" cursor-pointer" /> */}
          </div>

        </div>
        {/* <div className=" ml-8 gap-1 flex w-full items-center ">

          <IoSearch className="text-blue-600" />

          <input type="text" className=" text-sm outline-none" placeholder="Quick search" />
        </div> */}


        <div>

          {/* <Badge overlap="circular" variant="dot" color="error">
            <NotificationsIcon color="primary" />
          </Badge> */}


        </div>

      </div>
    </Fragment>
  );
}

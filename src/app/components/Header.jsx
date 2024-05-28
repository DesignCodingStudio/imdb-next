import React, { Fragment } from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
const Header = () => {
  return (
    <Fragment>
      <div className=" flex justify-between items-center p-8 bg-slate-100 dark:bg-gray-800">
        <div className=" flex space-x-2">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
          <MenuItem
            title="About"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
        </div>
        <div className=" flex items-center space-x-2">
          <DarkModeSwitch />
          <Link
            href="/"
            className=" p-1 font-bold text-2xl bg-amber-500 rounded-lg"
          >
            IMDb
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

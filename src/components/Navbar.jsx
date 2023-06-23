import React, { useState } from "react";
import { Link } from "react-scroll";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavbarLinks({ to, title, className }) {
  return (
    <Link
      to={to}
      className={className}
      smooth={true}
      spy={true}
      activeClass="active"
    >
      {title}
    </Link>
  );
}

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="text-lig dark:text-dark_headline fixed top-0 w-screen left-0 z-10 dark:bg-dark bg-light border-light_headline dark:border-b border-b-2 animate__animated animate__slideInDown">
        <div className="max-w-screen-2xl m-auto flex justify-between items-center z-10 px-2 md:px-10 py-5">
          <NavbarLinks
            to={"home"}
            className="text-xl font-semibold m-0 logo cursor-pointer"
            title={"MC"}
          />
          <ul
            className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-200  text-light_tertiary dark:text-gray-400 dark:bg-dark bg-light  ${
              menu && "top-[50px] opacity-100"
            } `}
          >
            <li className="md:ml-10 text-center h-full py-5 md:py-0 hover:text-light_headline dark:hover:text-slate-300 links ">
              <NavbarLinks
                to={"home"}
                title={"Home"}
                className={`cursor-pointer
                `}
              />
            </li>

            <li className="md:ml-10 text-center py-5 md:py-0 hover:text-light_headline dark:hover:text-slate-300 links">
              <NavbarLinks
                to={"about"}
                title={"About"}
                className={`cursor-pointer `}
              />
            </li>
            <li className="md:ml-10 text-center py-5 md:py-0 hover:text-light_headline dark:hover:text-slate-300 links">
              <NavbarLinks
                to={"projects"}
                title={"Projects"}
                className={`cursor-pointer`}
              />
            </li>
            <li className="md:ml-10 text-center  text-light_highlights dark:text-dark_highlights py-5 md:py-0 hover:opacity-90 links">
              <NavbarLinks
                to={"contact"}
                title={"Contact"}
                className={`cursor-pointer `}
              />
            </li>
          </ul>
          <span className="block md:hidden mr-3 items-center flex text-xl cursor-pointer">
            <button onClick={() => setMenu(!menu)}>
              {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

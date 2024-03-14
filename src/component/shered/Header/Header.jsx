import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { PiShoppingBagOpenBold, PiStudent } from "react-icons/pi";
import { MdOutlineContactPhone } from "react-icons/md";
import { useTheme } from "../../ThemContex/ThemContext";
const Header = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  const img = "https://i.ibb.co/YXQyPBD/md-png.png";

  return (
    <>
      <div className=" fixed hidden md:block z-40">
        <nav className="flex items-center justify-between  bg-[#393E46] w-[1260px] py-2 text-white mb-24 pr-28 fixed font-[Poppins] font-bold">
          <div className="scale-100 cursor-pointer flex rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            <img className="rounded-full" src={img} width="40" height="40" />
            <h2 className=" flex items-center gap-1"> Junnun <p className=" text-red-400"> Prodhan</p></h2>
          </div>
          <ul className="hidden items-center justify-between gap-10 md:flex">
            <li className="group flex  cursor-pointer flex-col">
              <Link to={"/"}>Home</Link>
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link to={"/about"}>About</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link to={'/project'}>Project</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              <Link to={'/contact'}>Contact</Link>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          {/* <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-red-600 ">
                  Home
                </li>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-red-600 ">
                  About
                </li>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-red-600 ">
                  Contact
                </li>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-red-600 ">
                  Project
                </li>
              </ul>
            )}
          </div> */}
        </nav>
      </div>
      {/* <div className="flex justify-center"> */}

      <div className=" fixed bottom-0 z-40 w-full">
        <div className="  w-full md:hidden shadow-2xl mx-auto">
          <div className="flex space-x-8 justify-center items-center w-full">
            <Link to={"/"}>
              <div className="px-2 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg">
                <AiFillHome size={30} />
              </div>
            </Link>

            <Link to={"/about"}>
              <div className="px-2 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg">
                <AiOutlineUser size={30} />
              </div>
            </Link>

            <Link to={"/project"}>
              <div className="px-2 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg">
                <PiShoppingBagOpenBold size={30} />
              </div>
            </Link>

            <Link to={"/contact"}>
              <div className="px-2 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg">
                <MdOutlineContactPhone size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  //   return (
  //       <>
  //           <div className='hidden md:block absolute top-1'>
  //               <div className=' bg-gray-500  font-bold font-[Montserrat] text-[18px]  flex justify-between px-10 items-center py-3 shadow-2xl opacity-80 fixed z-30 w-full md:max-w-[1260px] mx-auto uppercase pr-24' >
  //                   <div className=''>
  //                       Kawsar hasah <span className=' text-[#00FFFF]'>joy</span>
  //                   </div>
  //                   <div className=' flex gap-6  '>
  //                       <div className=' px-2 rounded-md h-10 hover:bg-slate-600 '>
  //                           <Link className='text-white hover:text-white px-2 h-10 flex justify-center items-center' to={'/'}>Home</Link>
  //                       </div>
  //                       <div className=' px-2 rounded-md h-10 hover:bg-slate-600 '>
  //                           <Link className='text-white hover:text-white px-2 h-10 flex justify-center items-center' to={'/about'}>About me</Link>
  //                       </div>
  //                       <div className=' px-2 rounded-md h-10 hover:bg-slate-600 '>
  //                           <Link className='text-white hover:text-white px-2 h-10 flex justify-center items-center' to={'/project'}>Project</Link>
  //                       </div>
  //                       <div className=' px-2 rounded-md h-10 hover:bg-slate-600 '>
  //                           <Link className='text-white hover:text-white px-2 h-10 flex justify-center items-center' to={'/contact'}>Contact</Link>
  //                       </div>
  //                   </div>
  //               </div>
  //           </div>

  //           {/* mobile device responsive navbar */}

  //   <div className="flex justify-center">
  //     //{" "}
  //     <div className=" fixed bottom-0 z-40 ">
  //       //{" "}
  //       <div className="  w-full md:hidden shadow-2xl">
  //         //{" "}
  //         <div className="flex space-x-8 ">
  //           //{" "}
  //           <Link to={"/"}>
  //             //{" "}
  //             <div className="px-2 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg">
  //               // <AiFillHome size={30} />
  //               //{" "}
  //             </div>
  //             //{" "}
  //           </Link>
  //           //{" "}
  //           <Link to={"/about"}>
  //             //{" "}
  //             <div className="px-2 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg">
  //               // <AiOutlineUser size={30} />
  //               //{" "}
  //             </div>
  //             //{" "}
  //           </Link>
  //           //{" "}
  //           <Link to={"/project"}>
  //             //{" "}
  //             <div className="px-2 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg">
  //               // <PiShoppingBagOpenBold size={30} />
  //               //{" "}
  //             </div>
  //             //{" "}
  //           </Link>
  //           //{" "}
  //           <Link to={"/contact"}>
  //             //{" "}
  //             <div className="px-2 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 text-white rounded-lg">
  //               // <MdOutlineContactPhone size={30} />
  //               //{" "}
  //             </div>
  //             //{" "}
  //           </Link>
  //           //{" "}
  //         </div>
  //         //{" "}
  //       </div>
  //       //{" "}
  //     </div>
  //     //{" "}
  //   </div>;
  //       </>
  //   );
};

export default Header;

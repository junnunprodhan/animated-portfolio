import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { PiShoppingBagOpenBold, PiStudent } from "react-icons/pi";
import { MdOutlineContactPhone } from "react-icons/md";
import { useTheme } from "../../ThemContex/ThemContext";
import { motion } from "framer-motion";

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
        <motion.nav 
          className="flex items-center justify-between bg-black/80 backdrop-blur-md w-[1260px] py-3 text-white mb-24 pr-28 fixed font-[Poppins] font-bold border-b border-purple-500/20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div 
            className="scale-100 cursor-pointer flex rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img className="rounded-full" src={img} width="40" height="40" />
            <h2 className="flex items-center gap-1">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Junnun</span>
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Prodhan</span>
            </h2>
          </motion.div>
          <ul className="hidden items-center justify-between gap-10 md:flex">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/project", label: "Project" },
              { to: "/blogs", label: "Blog" },
              { to: "/contact", label: "Contact" }
            ].map((item, index) => (
              <motion.li 
                key={item.to}
                className="group flex cursor-pointer flex-col relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <Link 
                  to={item.to}
                  className="relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300"
                >
                  {item.label}
                </Link>
                <motion.span 
                  className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"
                  layoutId="underline"
                />
              </motion.li>
            ))}
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
        </motion.nav>
      </div>
      {/* <div className="flex justify-center"> */}

      {/* Enhanced Mobile Navigation */}
      <motion.div 
        className="fixed bottom-0 z-40 w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="w-full md:hidden mx-auto">
          <div className="flex space-x-2 justify-center items-center w-full bg-black/80 backdrop-blur-md py-3 border-t border-purple-500/20">
            {[
              { to: "/", icon: AiFillHome, color: "from-purple-500 to-pink-500" },
              { to: "/about", icon: AiOutlineUser, color: "from-blue-500 to-purple-500" },
              { to: "/project", icon: PiShoppingBagOpenBold, color: "from-green-500 to-blue-500" },
              { to: "/contact", icon: MdOutlineContactPhone, color: "from-pink-500 to-red-500" }
            ].map((item, index) => (
              <Link key={item.to} to={item.to}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300`}></div>
                  <div className="relative px-4 py-3 bg-black/80 backdrop-blur-sm cursor-pointer text-white rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai'
import { PiShoppingBagOpenBold, PiStudent } from 'react-icons/pi'
import { MdOutlineContactPhone } from 'react-icons/md'
const Header = () => {
    return (
        <>
            <div className='hidden md:block '>
                <div className=' bg-gray-500 text-white font-bold font-[Radio Canada,sans-serif] text-[18px]  flex justify-between px-10 items-center py-3 shadow-2xl opacity-80 fixed z-30 w-full md:max-w-[1160px] mx-auto uppercase ' >
                    <div className=''>
                        Kawsar hasah <span className=' text-[#00FFFF]'>joy</span>
                    </div>
                    <div className=' flex gap-6  '>
                        <div className=' px-2 rounded-md h-10 hover:bg-slate-600 '>
                            <Link className='text-white hover:text-white px-2 h-10 flex justify-center items-center' to={'/'}>Home</Link>
                        </div>
                        <div className=' px-2 rounded-md h-10 hover:bg-slate-600 '>
                            <Link className='text-white hover:text-white px-2 h-10 flex justify-center items-center' to={'/about'}>About me</Link>
                        </div>
                        <div className=' px-2 rounded-md h-10 hover:bg-slate-600 '>
                            <Link className='text-white hover:text-white px-2 h-10 flex justify-center items-center' to={'/project'}>Project</Link>
                        </div>
                        <div className=' px-2 rounded-md h-10 hover:bg-slate-600 '>
                            <Link className='text-white hover:text-white px-2 h-10 flex justify-center items-center' to={'/contact'}>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile device responsive navbar */}

            <div>
                <div className=' fixed bottom-0 z-40'>
                    <div className='  w-full px-4 md:hidden shadow-2xl'>
                        <div className=' space-x-2'>
                            <Link to={'/'}>
                                <div className='px-8 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 hover:text-white rounded-lg'>
                                    <AiFillHome size={30} />
                                </div>
                            </Link>

                            <Link to={'/about'}>
                                <div className='px-8 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 hover:text-white rounded-lg'>
                                    <AiOutlineUser size={30} />
                                </div>
                            </Link>

                            <Link to={'/project'}>
                                <div className='px-8 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 hover:text-white rounded-lg'>
                                    <PiShoppingBagOpenBold size={30} />
                                </div>
                            </Link>

                            <Link to={'/contact'}>
                                <div className='px-8 bg-slate-800 py-2 cursor-pointer hover:bg-orange-500 hover:text-white rounded-lg'>
                                    <MdOutlineContactPhone size={30} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
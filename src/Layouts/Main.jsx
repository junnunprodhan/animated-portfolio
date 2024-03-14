import React from 'react';
import Header from '../component/shered/Header/Header';
import { Outlet } from 'react-router-dom';
import { CiDark } from 'react-icons/ci';
import { useTheme } from '../component/ThemContex/ThemContext';
import { MdLightMode } from 'react-icons/md';

const Main = () => {
    const { currentTheme, toggleTheme } = useTheme()
    // const mode = localStorage.getItem('theme')
    

    return (
        <div className={` ${currentTheme.backgroundColor} ${currentTheme.textColor}`}>
            <div onClick={toggleTheme} className=' bg-white w-10 h-10 rounded-full text-black flex items-center justify-center fixed z-50 cursor-pointer md:right-20 right-4 top-2 border border-[#00FFFF]'>
                {
                    currentTheme.backgroundColor == 'bg-black' ? <CiDark size={30} /> : <MdLightMode size={30} />
                }
            </div>
            <div><Header /></div>
            <div className='md:pt-20'><Outlet /></div>

        </div>
    );
};

export default Main;
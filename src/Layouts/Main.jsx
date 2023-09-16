import React from 'react';
import Header from '../component/shered/Header/Header';
import { Outlet } from 'react-router-dom';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { PiShoppingBagOpenBold, PiStudent } from 'react-icons/pi';
import { MdOutlineContactPhone } from 'react-icons/md';
const Main = () => {
    return (
        <div className=''>
            <div> <Header /></div>

            <div className=' pt-20 mb-20'><Outlet /></div>

        </div>
    );
};

export default Main;
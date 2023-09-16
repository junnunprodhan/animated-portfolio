import React from 'react';
import { BiSolidBook } from 'react-icons/bi'
import { MdWorkHistory } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';

const MyResume = () => {
    return (
        <div className=' md:flex md:w-full'>
            <div className=" md:w-6/12">
                <div className="grid flex-grow  card rounded-box 2">
                    <div className='flex gap-4 items-center'>
                        <p className=' text-[#00FFFF] pb-2'><BiSolidBook className='' size={20} /></p>
                        <p className=' text-3xl font-bold text-white mb-4'>Educational Qualification</p>
                    </div>
                    <p className='flex gap-2 mb-1 font-bold'><BsCalendarDate className=' text-[#00FFFF] mt-1' />2020-2022</p>
                    <p className=' text-xl text-[#00FFFF] font-bold'>Secondary  School Certificate</p>
                    <p className=' font-mono'>I have completed Secondary  School Certificate from madrasah board ,Mymensingh</p>
                </div>
                <div className="grid flex-grow h-32 card rounded-box ">
                    <p className='flex gap-2 mb-1 font-bold'><BsCalendarDate className=' text-[#00FFFF] mt-1' />2023-2025</p>
                    <p className=' text-xl text-[#00FFFF] font-bold'>Higher Secondary School Certificate</p>
                    <p className=' font-mono'>I have not completed Higher Secondary School Certificate, I am studying in Higher Secondary School Certificate, I am admitted in Higher Secondary School Certificate 2022</p>
                </div>
            </div>


            <div className="divider lg:divider-horizontal mt-20"><p className=' bg-[#00FFFF] w-7 h-7 rounded-full'></p></div>


            <div className="md:w-6/12">
                <div className="grid flex-grow  card rounded-box ">
                    <div className='flex gap-4 items-center'>
                        <p className=' text-[#00FFFF] pb-2'><MdWorkHistory className='' size={20} /></p>
                        <p className=' text-3xl font-bold text-white mb-4'>Working Experience</p>
                    </div>
                    <p className='flex gap-2 mb-1 font-bold'><BsCalendarDate className=' text-[#00FFFF] mt-1' />2023</p>
                    <p className=' text-xl text-[#00FFFF] font-bold'>Front-end Developer</p>
                    <p className=' font-mono'>I have completed Front-end developing from Programming hero course and other social platform </p>

                </div>
                <div className="grid flex-grow h-32 card rounded-box ">
                    <p className='flex gap-2 mb-1 font-bold'><BsCalendarDate className=' text-[#00FFFF] mt-1' />2023</p>
                    <p className=' text-xl text-[#00FFFF] font-bold'>Mern-stack Developer</p>
                    <p className=' font-mono'>I have competed Mern-stack developing from programming hero courses </p>
                </div>

            </div>
        </div>
    );
};

export default MyResume;
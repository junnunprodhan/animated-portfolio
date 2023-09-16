import React from 'react';
import { TypeAnimation } from 'react-type-animation';
const img = 'https://i.ibb.co/ts6fs6p/Remini20220221000233124.jpg'
import './Home.css'
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
    return (
        <div className=' md:flex w-full bgg'>
            <div className=' md:w-4/12 md:rounded-md md:shadow-2xl rounded-full'>
                <img className=' md:w-full md:h-full md:rounded-md border-2 shadow-2xl hidden md:block' src={img} alt="" title='Kawsar Hasan Joy' />
                <div className=' relative rounded-full  md:w-4/12 w-60 h-60 md:h-0 mx-auto border overflow-hidden md:hidden'>
                <img className=' rounded-full w-60 h-60' src={img} alt="" />
                <div className='absolute rounded-full bg-gradient-to-r from-orange-700 via-orange-400 to-transparent w-60 h-60 animate-spin-slow  origin-bottom-right -top-[50%] -left-[50%]'></div>

                <div className='absolute rounded-full bg-gradient-to-r from-green-700 via-green-400 to-transparent w-60 h-60  animate-spin-delay origin-bottom-right -top-[50%] -left-[50%] delay-5000'></div>

        
                <div className=' absolute inset-2 rounded-full'><img className=' pb-5 rounded-full w-60 h-60' src={img} alt="" /></div>


            </div>
            </div>
            <div className=' md:w-8/12 md:flex justify-center items-center md:mt-0 mt-5'>
                <div className=' w-full text-center text-white'>
                    <p className=' text-xl font-mono'>Hello I'm</p>
                    <p className=' text-2xl text-[#00FFFF] mt-3 mb-4'><TypeAnimation
                        sequence={[

                            ' Kawsar Hasan Joy',
                            1000,
                            'A Web Developer',
                            1000,
                            'A Front-end Developer',
                            1000,
                            'A Mern Stack Developer',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity} /></p>
                    <p className=' mx-8 text-[20px] font-medium'>
                        With proficiency in a wide range of technologies, including MongoDB, React, and Node.js, I thrive on turning ideas into fully functional, user-centric web solutions. From crafting sleek, responsive front-end interfaces to architecting robust back-end systems, I'm here to bring your web projects to life
                    </p>
                    <div className=' font-mono mt-8 space-x-8'>
                        <button className=' bg-[#00FFFF] px-6 py-2 rounded-full border-none outline-none hover:bg-white hover:text-black'><p className='flex gap-2 items-center'><FaDownload/>Download Resume</p></button>
                        <Link to={'/project'}><button className=' px-6 py-2 rounded-full border btn-outline btn-info'>Portfolio</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
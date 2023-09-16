import React from 'react';
const img = 'https://i.ibb.co/HzH0HQn/Remini20220221000233124.jpg'
import './edin.css'
const AboutAuthor = () => {

    return (
        <div className=' md:flex mt-20 gap-40 mx-auto'>
            <div className=' relative rounded-lg  md:w-4/12 border overflow-hidden'>
                <img src={img} alt="" />
                <div className='absolute bg-gradient-to-r from-orange-700 via-orange-400 to-transparent w-[400px] h-[488px] animate-spin-slow  origin-bottom-right -top-[50%] -left-[50%]'></div>

                <div className='absolute bg-gradient-to-r from-green-700 via-green-400 to-transparent w-[400px] h-[488px]  animate-spin-delay origin-bottom-right -top-[50%] -left-[50%] delay-5000'></div>

        
                <div className=' absolute inset-1 rounded-lg '><img className='  md:w-[400px] md:h-[488px] rounded-lg pb-6' src={img} alt="" /></div>


            </div>
            <div className=' mt-20'>
                <div className=' text-start text-2xl font-bold text-white font-[Radio Canada,sans-serif]'>
                    Hi, I am <span className=' text-[#00FFFF] font-bold font-mono text-2xl'>Kawsar Hasan Joy</span>
                </div>
                <div className='flex text-start text-xl  mt-4'>
                    <div className=' w-48 space-y-3 text-xl font-bold font-mono'>

                        <div className='flex items-center space-x-2'>
                            <p className='w-2 bg-[#00FFFF] h-2 rounded-full'></p>
                            <p>Last Name</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <p className='w-2 bg-[#00FFFF] h-2 rounded-full'></p>
                            <p>Last Name</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <p className='w-2 bg-[#00FFFF] h-2 rounded-full'></p>
                            <p>Date of birth</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <p className='w-2 bg-[#00FFFF] h-2 rounded-full'></p>
                            <p>Nationality</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <p className='w-2 bg-[#00FFFF] h-2 rounded-full'></p>
                            <p>Languages</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <p className='w-2 bg-[#00FFFF] h-2 rounded-full'></p>
                            <p>Address</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <p className='w-2 bg-[#00FFFF] h-2 rounded-full'></p>
                            <p>Study</p>
                        </div>
                        <div className='space-y-3 font-mono font-bold'>
                        </div>
                    </div>

                    <div className=' space-y-3 font-mono font-bold'>
                        <p>:Kawsar Hasan</p>
                        <p>:Joy</p>
                        <p>:1/3/2005</p>
                        <p>:Bangladesh</p>
                        <p>:Bengali</p>
                        <p>:Gouripur,Mymensingh</p>
                        <p>:Available</p>
                    </div>
                </div>
                <div className='text-start mt-4'>
                    <button className=' btn btn-small btn-transparent px-8 py-3 bg-[#00FFFF] rounded-sm hover:bg-white hover:text-black text-white font-bold text-[Radio Canada,sans-serif]'>Download Resume </button>
                </div>
            </div>

        </div>
    );
};

export default AboutAuthor;
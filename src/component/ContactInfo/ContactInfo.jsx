import React from 'react';
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaAddressCard } from 'react-icons/fa'

const ContactInfo = () => {
    return (
        <div>
            <div className=' text-start mb-6'>
                <p className=' font-bold text-white text-2xl mb-4'>Contact Information</p>
                <p>Don't hesitate to get in touch; I'm just a message away. Whether you're interested in my work, looking for a skilled professional, or simply want to chat about the latest trends in our industry, I'd love to hear from you. Your feedback and ideas are always welcome.</p>
            </div>
            <div className=' space-y-5 shadow-2xl'>
                <div className='border rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 text-start flex gap-5 pl-5 py-8'>
                    <div>
                        <p className=' text-[#00FFFF] bg-[#bef6f6] w-16 h-16 flex items-center justify-center rounded-full'><BiPhoneCall size={30} /></p>
                    </div>
                    <div>
                        <p className=' font-bold font-[Radio Canada,sans-serif] text-xl mb-3 text-white'>Contact on phone</p>
                        <p className=' hover:text-[#00FFFF]'>+8801405951898</p>
                        <p className=' hover:text-[#00FFFF]'>+8801967154464</p>
                    </div>
                </div>

                <div className='border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-start flex gap-5 pl-5 py-8'>
                    <div>
                        <p className=' text-[#00FFFF] bg-[#bef6f6] w-16 h-16 flex items-center justify-center rounded-full'><AiOutlineMail size={30} /></p>
                    </div>
                    <div>
                        <p className=' font-bold font-[Radio Canada,sans-serif] text-xl mb-3 text-white'>Contact on mail</p>
                        <p className=' hover:text-[#00FFFF]'>kawsarhasahjoy342@gmail.com</p>
                        <p className=' hover:text-[#00FFFF]'>kawsarhasahjoy1234@gmail.com</p>
                    </div>
                </div>

                <div className='border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-start flex gap-5 pl-5 py-8'>
                    <div>
                        <p className=' text-[#00FFFF] bg-[#bef6f6] w-16 h-16 flex items-center justify-center rounded-full'><FaAddressCard size={30} /></p>
                    </div>
                    <div>
                        <p className=' font-bold font-[Radio Canada,sans-serif] text-xl mb-3 text-white'>Contact address</p>
                        <p className=' hover:text-[#00FFFF]'>Gouripur,Mymensingh</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactInfo;
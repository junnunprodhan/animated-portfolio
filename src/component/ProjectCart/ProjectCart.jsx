import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCart = ({ cart }) => {
    const handleClick = (link) => {
        window.open(link, '_blank');
      };
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className=" relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-950  hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500 mr-6 mt-20 pb-7 h-[630px]">
            <div>
                <div>
                    <div className="mx-auto">
                        <div>
                            <div className="relative max-w-full h-60 overflow-hidden">
                                <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
                                    <img src={cart.img} alt="image" className="w-full object-cover object-top " />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' gap-5 mt-5 px-4'>
                        <p className=' text-start font-bold text-2xl font-mono pl-5 md:pl-0'>{cart.name}</p>
                        <p className=' text-start pl-5 md:pl-0 font-mono mt-3'>{cart.description}</p>
                        <div className='flex flex-wrap gap-3 mt-4'>
                            {cart.option2.map(item => {
                                return (
                                    <div key={item.label}>
                                        <p className=' bg-[#00FFFF] px-4 text-black hover:bg-[#80ffffc5] rounded-md border-b-2 border-b-orange-300'>{item.value}</p>
                                    </div>
                                );
                            })}
                        </div>


                    </div>
                </div>
                <div className=' absolute bottom-3 w-full'>
                    <Link><button onClick={() => handleClick(cart.link)} className='bg-[#00FFFF] w-full font-bold text-black btn btn-sm hover:bg-white '>Live Link</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCart;
import React from 'react';
const Experince = ({ item }) => {
    return (
        <section>
            
            <div>
                <div className=' border md:w-48 md:h-48 h-56 pt-10 font-bold font-mono bg-slate-800 opacity-90 hover:bg-slate-600 rounded-lg hover:transition-width duration-500 ease-in-our shadow-2xl cursor-pointer'>
                    <p> <img className=' w-20 h-20 mx-auto rounded-full' src={item.img} alt="" /></p>
                    <p className=' text-xl mt-2 text-white'>{item.name}</p>
                </div>
            </div>
        </section>
    );
};

export default Experince;
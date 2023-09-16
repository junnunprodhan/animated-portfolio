import React from 'react';

const RadialProgress = ({ progress, name,persent }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (progress / 100) * circumference;

    return (
        <div className=''>
            <div className=' shadow-2xl opacity-80 bg-slate-800 border border-opacity-90 text-center h-64 pt-10 rounded-lg'>
                <div className="relative w-32 h-32 mx-auto">
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                        <circle
                            className="stroke-current text-[#00FFFF]"
                            cx="50"
                            cy="50"
                            r={radius}
                            strokeWidth="10"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={dashOffset}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-300">{persent}%</span>
                    </div>

                </div>
                <div className=' mt-3 font-bold text-[Radio Canada,sans-serif]  '>
                    <p className=' text-xl text-white'>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default RadialProgress;

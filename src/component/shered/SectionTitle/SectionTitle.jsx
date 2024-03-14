import React from 'react';

const SectionTitle = ({ titleF, titleS, subTitle }) => {
    return (
        <div className=' text-center to-white uppercase font-[Poppins]'>
            <div className='flex text-center justify-center font-[Poppins] text-4xl gap-3'>
                <p className='  '>{titleF}</p>
                <p className=''>{titleS}</p>
            </div>
            <progress className="progress w-20 h-1 bg-[#00FFFF]"></progress>
        </div>
    );
};

export default SectionTitle;
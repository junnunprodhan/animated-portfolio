import React from 'react';

const SectionTitle = ({ titleF, titleS, subTitle }) => {
    return (
        <div className=' text-center to-white mb-10 uppercase'>
            <div className='flex text-center justify-center font-mono text-4xl gap-3'>
                <p className='  '>{titleF}</p>
                <p className=' text-[#00FFFF]'>{titleS}</p>
            </div>
            <progress className="progress w-20 h-1 bg-[#00FFFF]"></progress>
        </div>
    );
};

export default SectionTitle;
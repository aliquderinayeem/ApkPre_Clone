import React from 'react';
import { FaBackward } from 'react-icons/fa';

const BackButton = () => {
    return (
        <div className='min-h-[43px] py-1.5 px-1.5 md:py-3 md:px-4 items-center gap-1.5 md:gap-2.5 rounded-md bg-linear-to-br from-[#632EE3] via-[#632EE3] to-[#9F62F2] text-white flex'>
         <FaBackward></FaBackward>
            <div to="/apps" className='text-[15px] md:text-[20px] font-bold'>Go Back!</div>
        </div>
    );
};

export default BackButton;
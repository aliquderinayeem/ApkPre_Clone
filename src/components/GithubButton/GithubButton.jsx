import React from 'react';
import { FaGithub } from "react-icons/fa";
const GithubButton = () => {
    return (
        <div className='min-w-[115px] md:min-w-[145px] min-h-[43px] flex flex-row py-1.5 px-1.5 md:py-3 md:px-4 items-center gap-1.5 md:gap-2.5 rounded-md bg-linear-to-br from-[#632EE3] via-[#632EE3] to-[#9F62F2] text-white  transition-all duration-300 transform hover:-translate-y-1'>
            <FaGithub className='w-5 h-5'/>
            <div className='text-[15px] md:text-[20px] font-bold'>Contribute</div>
        </div>
    );
};

export default GithubButton;
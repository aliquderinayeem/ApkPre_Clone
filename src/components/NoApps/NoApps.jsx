import React from 'react';
import AppError from '../../../assets/App-Error.png'
import BackButton from '../GithubButton/BackButton/BackButton';
import { Link } from 'react-router';

const NoApps = () => {
const handleReload=()=>{
    window.location.reload();
}
    return (
        <div className='mt-[25px] md:m-20'>
            <img src={AppError} className='mx-auto mt-[95px]'></img>
            <h1 className='text-center text-5xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mt-[60px]'>
                OPPS!! APP NOT FOUND
            </h1>
            <p className='text-center text-md sm:text-base md:text-lg lg:text-[20px] font-normal text-[#627382] mt-5'>
                The App you are requesting is not found on our system.  please try another apps
            </p>
            <button onClick={handleReload} className='flex items-center justify-center mt-[50px] mx-auto'>
                <BackButton></BackButton>
            </button>
        </div>
    );
};

export default NoApps;
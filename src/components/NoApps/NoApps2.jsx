import React from 'react';
import AppError from '../../../assets/App-Error.png'
import BackButton from '../GithubButton/BackButton/BackButton';
import { Link, useNavigate } from 'react-router';
import ButtontoApp from './ButtontoApp';

const NoApps2 = () => {
    const navigate=useNavigate();
const handleReload=()=>{
    navigate(-1);
}
    return (
        <div className='mt-[25px] md:m-20'>
            <img src={AppError} className='mx-auto mt-[95px]'></img>
            <h1 className='text-center text-5xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mt-[60px]'>
                OPPS!! NO APP FOUND
            </h1>
            <button onClick={handleReload} className='flex items-center justify-center mt-[50px] mx-auto gap-10'>
                <BackButton></BackButton>
                <ButtontoApp></ButtontoApp>
            </button>
        </div>
    );
};

export default NoApps2;
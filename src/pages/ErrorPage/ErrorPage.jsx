import React from 'react';
import Error from '../../../assets/error-404.png';
import BackButton from '../../components/GithubButton/BackButton/BackButton';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router';

import GithubButton from '../../components/GithubButton/GithubButton';
import Logo from '../../components/Logo/Logo';

const ErrorPage = () => {
    const navigate = useNavigate();
    const PreviousPage = () => {
        navigate(-1);
    }
    const links = <>
        <a href="/">Home</a>
        <a href="/apps">Apps</a>
        <a href="/installation">Installation</a>
    </>
    return (
        <>
            <div>
                <title>Error Page</title>
                <link rel="icon" type="image/svg+xml" href="/assets/logo.png" />
                <div className="navbar bg-base-100 shadow-sm sticky top-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn md:hidden border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="md:hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-8 text-[20px] font-bold">
                                {links}
                            </ul>
                        </div>

                        <a href='/'><Logo></Logo></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-8 text-[20px] font-bold">
                            {links}
                        </ul>
                    </div>
                    <a className="navbar-end py-3 px-4" target='_blank' href='https://github.com/aliquderinayeem'>
                        <GithubButton></GithubButton>
                    </a>
                </div>
            </div>
            <div className='mt-[25px] md:m-20'>
                <img src={Error} className='mx-auto mt-[95px]'></img>
                <h1 className='text-center text-5xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mt-[60px]'>
                    Oops, page not found!
                </h1>
                <p className='text-center text-md sm:text-base md:text-lg lg:text-[20px] font-normal text-[#627382] mt-5'>
                    The page you are looking for is not available.
                </p>
                <button onClick={PreviousPage} className='flex items-center justify-center mt-[50px] mx-auto'>
                    <BackButton></BackButton>
                </button>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;
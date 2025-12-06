import React from 'react';
import logo from '../../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex flex-row items-center min-w-[110px] min-h-10 gap-3.5'>
            <img src={logo} className='w-10 h-10  animate-spin' style={{ animationDuration: '3s' }}></img>
            <div className='text-[18px] md:text-[23px] bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>HERO.IO</div>
        </div>
    );
};

export default Logo;
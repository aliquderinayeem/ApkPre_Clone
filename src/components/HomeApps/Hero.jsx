import React from 'react';
import playStore from '../../../assets/playStore.png';
import AppStore from '../../../assets/ios.png';
import HeroJPG from '../../../assets/hero.png';
const Hero = () => {
    return (
        <>
            <div className='md:px-20 pt-20 flex flex-col items-center bg-[#D9D9D9]'>
                <div className='md:w-[597px] md:h-[168px]'>
                    <h1 className='font-bold text-[46px] md:text-[72px] text-center md:leading-[84px]'>We Build <span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '><br />Productive</span> Apps</h1>
                </div>
                <div className='text-[19px] md:text-[20px] font-semibold leading-8 text-center text-[#627382]'>
                    At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact
                </div>
                <div href='https://play.google.com/store/games?device=windows' className='flex flex-col md:flex-row my-10 gap-[18px]'>
                    <a href='https://play.google.com/store/games?device=windows' target="_blank" className='flex gap-2.5 items-center border-2 border-[#D2D2D2] rounded-sm px-6 py-3 min-w-[200px] h-14'>
                        <img src={playStore}></img>
                        <h1 className='text-[20px] font-semibold'>Google Play</h1>
                    </a>
                    <a href='https://www.apple.com/app-store/' target="_blank" className='flex gap-2.5 items-center border-2 border-[#D2D2D2] rounded-sm px-6 py-3 w-[200px] h-14'>
                        <img src={AppStore}></img>
                        <h1 className='text-[20px] font-semibold'>App Store</h1>
                    </a>
                </div>
                <div>
                    <img src={HeroJPG}></img>
                </div>
            </div>
            <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] pt-11 pb-20 md:p-20 w-full'>
                <div className='mb-10'>
                    <h1 className='text-[50px] font-extrabold text-center text-white'>Trusted by Millions, Built for You</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-5 lg:gap-10'>
                    <div className='min-w-[342px] min-h-[152px] flex flex-col gap-4'>
                        <h3 className='text-[16px] font-normal leading-6 text-center text-white opacity-80'>Total downloads</h3>
                        <h1 className='text-[64px] font-extrabold leading-[72px] text-center text-white'>29.6M</h1>
                        <h3 className='text-[16px] font-normal leading-6 text-center text-white opacity-70'>21% more than last month</h3>
                    </div>
                    <div className=' min-w-[342px] min-h-[152px] flex flex-col gap-4'>
                        <h3 className='text-[16px] font-normal leading-6 text-center text-white opacity-80'>Total Reviews</h3>
                        <h1 className='text-[64px] font-extrabold leading-[72px] text-center text-white'>906K</h1>
                        <h3 className='text-[16px] font-normal leading-6 text-center text-white opacity-70'>46% more than last month</h3>
                    </div>
                    <div className='min-w-[342px] min-h-[152px] flex flex-col gap-4'>
                        <h3 className='text-[16px] font-normal leading-6 text-center text-white opacity-80'>Active Apps</h3>
                        <h1 className='text-[64px] font-extrabold leading-[72px] text-center text-white'>132+</h1>
                        <h3 className='text-[16px] font-normal leading-6 text-center text-white opacity-70'>31 more will Launch</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
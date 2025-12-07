import React from 'react';
import useApps from '../../Hook/CustomHook';
import Loader from '../../components/Loader/Loader';

const Installation = () => {
    const { loading, apps } = useApps();
    console.log(apps)
    if (loading) {
        return (
            <Loader></Loader>
        )
    }
    return (
        <div className='p-20 border'>
            <title>HERO.IO-Installation</title>
            <link rel="icon" type="image/svg+xml" href="/assets/logo.png" />
            <div className='flex flex-col gap-3 sm:gap-4 md:gap-4'>
                <h1 className='text-center text-5xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold'>
                    Your Installed Apps
                </h1>
                <p className='text-center text-md sm:text-base md:text-lg lg:text-[20px] font-normal text-[#627382]'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
        </div>
    );
};

export default Installation;
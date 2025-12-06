import React from 'react';
import useApps from '../../Hook/CustomHook';
import { Link } from 'react-router';
import ShowAllButton from '../../components/GithubButton/ShowAllButton/ShowAllButton';
import AppCard from '../../components/AppCard/AppCard';

const AllApps = () => {
    const { apps, loading, error } = useApps();
    const Homeapps = apps.slice(0, 132);

    return (
        <div>
            <div className='px-4 sm:px-8 py-[80px] md:px-12 lg:p-20 bg-[#D9D9D9]'>
                <div className='flex flex-col gap-3 sm:gap-4 md:gap-[16px]'>
                    <h1 className='text-center text-5xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold'>
                        Our All Applications
                    </h1>
                    <p className='text-center text-md sm:text-base md:text-lg lg:text-[20px] font-[400] text-[#627382]'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-[40px]'>
                    {Homeapps.map((app, index) => (
                        <div key={index} className='flex justify-center'>
                            <AppCard app={app}></AppCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default AllApps;
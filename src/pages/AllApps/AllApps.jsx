import React, { useState } from 'react';
import useApps from '../../Hook/CustomHook';
import { Link } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';
import NoApps from '../../components/NoApps/NoApps';
import Loader from '../../components/Loader/Loader';

const AllApps =() => {
    const { apps, loading} = useApps();
    // console.log(apps);
    const [search, setSearch] = useState('');
    const key = search.trim().toLocaleLowerCase();
    const searchedapps = key ? apps.filter(app => app.title.toLocaleLowerCase().includes(key)) : apps;
    


    if (loading) {
        return (
            <Loader></Loader>
        )
    }
    return (

        <div>
            <title>HERO.IO-All Apps</title>
            <link rel="icon" type="image/svg+xml" href="/assets/logo.png" />
            <div className='px-4 sm:px-8 py-20 md:px-12 lg:p-20 bg-[#D9D9D9]/99'>
                <div className='flex flex-col gap-3 sm:gap-4 md:gap-4'>
                    <h1 className='text-center text-5xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold'>
                        Our All Applications
                    </h1>
                    <p className='text-center text-md sm:text-base md:text-lg lg:text-[20px] font-normal text-[#627382] mb-5'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
                <div className='flex justify-between'>
                    <h1 className='text-[20px] md:text-[22px] font-bold'>({searchedapps.length})&nbsp;&nbsp;Apps found</h1>
                    {/* Search Bar */}

                    <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-body m-auto"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            type="search"
                            name="search"
                            className="block min-w-[100px] md:min-w-[260px] lg:min-w-[450px] bg-white border-none w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base  shadow-xs text-[20px] placeholder:text-[20px] placeholder:text-body rounded-lg"
                            placeholder="Search"
                            required
                        />
                    </div>
                </div>
                {
                    (searchedapps.length === 0) ?
                        <NoApps></NoApps>
                        :
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10 lg:mt-10'>
                            {searchedapps.map((app, index) => (
                                <div key={index} className='flex justify-center'>
                                    <AppCard app={app}></AppCard>
                                </div>
                            ))}
                        </div>
                }

            </div>
        </div>
    )
};

export default AllApps;
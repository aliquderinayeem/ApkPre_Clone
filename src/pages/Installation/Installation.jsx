import React, { useEffect, useState } from 'react';
import useApps from '../../Hook/CustomHook';
import Loader from '../../components/Loader/Loader';
import { getStoredApps } from '../../utility/LocalStorage';
import InstallationCardHorizontal from '../../components/InstallationCard/InstallationCard';
import { toast, ToastContainer } from 'react-toastify';
import NoApps from '../../components/NoApps/NoApps';
import NoApps2 from '../../components/NoApps/NoApps2';
import BackButton from '../../components/GithubButton/BackButton/BackButton';

const Installation = () => {
    const { loading, apps } = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    const [originalApps, setOriginalApps] = useState([]);
    const [sortOption, setSortOption] = useState('');
    useEffect(() => {
        const storedApps = getStoredApps();
        const ConvertedStoredApps = storedApps.map(id => parseInt(id));
        const installedList = apps.filter(app => storedApps.includes(app.id))
        setInstalledApps([...installedList]);
        setOriginalApps([...installedList]);
    }, [apps])
    const handleDelete = (id) => {
        console.log(id);
        const storedIDs = getStoredApps();
        const remainingAppIDs = storedIDs.filter(ID => ID !== id);
        const modifiedIDs = JSON.stringify(remainingAppIDs)
        localStorage.setItem("appsList", modifiedIDs);
        const newIDs = getStoredApps();
        const newList = apps.filter(app => newIDs.includes(app.id));
        const desiredApp = apps.find(app => app.id == id);
        setInstalledApps(newList);
        setOriginalApps([...newList]);
        toast.success(`Deleted "${desiredApp.title}"`);
    };

    const handleSelectChange = (e) => {
        const sortType = e.target.value;
        console.log("Sorting by:", sortType);
        setSortOption(sortType); // Update the state for select value

        let sortedApps = [...installedApps];

        switch (sortType) {
            case 'name_asc': // Downloads[High-Low]
                sortedApps.sort((a, b) => b.downloads - a.downloads);
                break;
            case 'name_desc': // Downloads[Low-High]
                sortedApps.sort((a, b) => a.downloads - b.downloads);
                break;
            case '': // Default/Reset
                // Reset to original order
                sortedApps = [...originalApps];
                break;
            default:
                // Keep current order
                break;
        }

        setInstalledApps(sortedApps);
    };






    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <>
            <div>
                <ToastContainer></ToastContainer>
                <div className='p-20'>
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
                <div className='mt-10 mx-0 md:mx-20 mb-20'>
                    {/* Header */}
                    <div className='lg:m-5 block'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[20px] md:text-[22px] font-bold'>({installedApps.length})&nbsp;&nbsp;Apps found</h1>

                            <label htmlFor="sort" className="block mb-2.5 text-sm font-medium text-heading sr-only">
                                Sort by
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
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 20V10m0 10-4-4m4 4 4-4m4 4V4m0 0-4 4m4-4 4 4"
                                        />
                                    </svg>
                                </div>
                                <select
                                    value={sortOption}
                                    onChange={handleSelectChange}
                                    name="sort"
                                    className="block min-w-[100px] md:min-w-[200px] lg:min-w-[250px] bg-white border-none w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base shadow-xs text-[16px] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                >
                                    <option value="">Sort by</option>
                                    <option value="name_asc">Downloads[High-Low]</option>
                                    <option value="name_desc">Downloads[Low-High]</option>
                                </select>
                                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-body"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End */}
                    {
                    installedApps.length==0?
                        <NoApps2></NoApps2>
                    :<>
                    <div>
                        {installedApps.map((SingleApp, index) => <InstallationCardHorizontal key={index} SingleApp={SingleApp} handleDelete={handleDelete}></InstallationCardHorizontal>)}
                    </div>
                <div className='flex mx-auto justify-center'>
                    <BackButton></BackButton>
                </div></>
                    }
                
                </div>
            </div>

        </>
    );
};

export default Installation;
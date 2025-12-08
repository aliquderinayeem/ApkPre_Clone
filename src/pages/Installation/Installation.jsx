import React, { useEffect, useState } from 'react';
import useApps from '../../Hook/CustomHook';
import Loader from '../../components/Loader/Loader';
import { getStoredApps } from '../../utility/LocalStorage';
import InstallationCardHorizontal from '../../components/InstallationCard/InstallationCard';

const Installation = () => {
    const { loading, apps } = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    useEffect(() => {
        const storedApps = getStoredApps();
        const ConvertedStoredApps = storedApps.map(id => parseInt(id));
        const installedList = apps.filter(app => storedApps.includes(app.id))
        setInstalledApps(installedList);
    }, [apps])


    const handleDelete=(id)=>{
        console.log(id);
        const storedIDs=getStoredApps();
        const remainingAppIDs=storedIDs.filter(ID=>ID!==id);
        const modifiedIDs=JSON.stringify(remainingAppIDs)
        localStorage.setItem("appsList",modifiedIDs);
        const newIDs=getStoredApps();
        // console.log(newIDs)
        const newList=apps.filter(app=>newIDs.includes(app.id))
        setInstalledApps(newList);
    };

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
            <div>
                <h1>{installedApps.length}</h1>
            </div>
            <div>
                {installedApps.map((SingleApp, index) => <InstallationCardHorizontal key={index} SingleApp={SingleApp} handleDelete={handleDelete}></InstallationCardHorizontal>)}
            </div>
        </div>
    );
};

export default Installation;
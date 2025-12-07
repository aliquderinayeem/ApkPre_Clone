import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hook/CustomHook';
import Loader from '../../components/Loader/Loader';
import DetailsPageHeader from '../../components/AppDetailsComponents/DetailsPageHeader/DetailsPageHeader';
import DetailsDescription from '../../components/AppDetailsComponents/DetailsPageDescription/DetailsDescription';
import BarChart1 from '../../components/AppDetailsComponents/BarChart/BarChart1';

const AppDetails = () => {



    const id = useParams();
    // console.log(id.id);
    const { apps, loading} = useApps();
    if(loading)return <Loader></Loader>
    const desiredApp=apps.find(app=>app.id==id.id);
    
    if(desiredApp!=undefined){
        // console.log(desiredApp)
    return (
        <div className='lg:m-20 bg-white rounded-2xl shadow-lg overflow-hidden'>
            <DetailsPageHeader desiredApp={desiredApp}></DetailsPageHeader>
            <BarChart1 desiredApp={desiredApp}></BarChart1>
            <DetailsDescription desiredApp={desiredApp}></DetailsDescription>
        </div>
    );}else{
        return(
            <Loader></Loader>
        )
    }
};

export default AppDetails;
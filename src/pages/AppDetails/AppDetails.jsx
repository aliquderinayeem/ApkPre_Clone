import React from 'react';
import { useNavigate, useParams } from 'react-router';
import useApps from '../../Hook/CustomHook';
import Loader from '../../components/Loader/Loader';
import DetailsPageHeader from '../../components/AppDetailsComponents/DetailsPageHeader/DetailsPageHeader';
import DetailsDescription from '../../components/AppDetailsComponents/DetailsPageDescription/DetailsDescription';
import BarChart1 from '../../components/AppDetailsComponents/BarChart/BarChart1';
import BackButton from '../../components/GithubButton/BackButton/BackButton';
import NoApps4 from '../../components/NoApps/NoApps4';


const AppDetails = () => {


    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    const id = useParams();
    // console.log(id.id);
    const { apps, loading } = useApps();



    if (loading || apps.length === 0) {
        return <Loader />;
    }
    const desiredApp = apps.find(app => app.id == id.id);

        if (!desiredApp) {
        return <NoApps4></NoApps4>  // Don't return Loader!
    }else{
        // console.log(desiredApp)
        return (
            <>
                <div className='flex pl-0 lg:ml-20 lg:mt-5 lg:mb-2' onClick={handleBack}>
                    <title>App_Details</title>
                    <BackButton></BackButton>

                </div>
                <div className='lg:ml-20 lg:mr-20 lg:mt-5 bg-white rounded-2xl shadow-lg overflow-hidden'>
                    <DetailsPageHeader desiredApp={desiredApp}></DetailsPageHeader>
                    <BarChart1 desiredApp={desiredApp}></BarChart1>
                    <DetailsDescription desiredApp={desiredApp}></DetailsDescription>
                </div>
            </>
        );
    } }

export default AppDetails;
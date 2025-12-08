import React, { useEffect } from 'react';
import DownloadIcon from '../../../../assets/icon-downloads.png';
import AvgRatingIcon from '../../../../assets/icon-ratings.png';
import ReviewIcon from '../../../../assets/icon-review.png';
import { addToStorage, getStoredApps } from '../../../utility/LocalStorage';
import GithubButton from '../../GithubButton/GithubButton';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

const DetailsPageHeader = ({ desiredApp }) => {
    // console.log(desiredApp);
    const { image, title, downloads, ratingAvg, reviews, companyName, size, id } = desiredApp;
    const [status, setStatus] = useState("Install Now");
    const [isInstalled, setIsInstalled] = useState(false);
    const Id = getStoredApps();
    // console.log(Id);
    useEffect(() => {
        if (Id.includes(id)) {
            setIsInstalled(true);
        }
    }, [Id,id]);
    // if (!desiredApp) {return null};



    const formatDownloads = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace('.0', '') + 'K';
        }
        return num.toString();
    };

    const formatReviews = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace('.0', '') + 'K';
        }
        return num.toString();
    };
    const handleInstalledApps = id => {
        // console.log(id);
        addToStorage(id);
        setStatus('Installed');
    };

    return (
        <>

            <div>
                <ToastContainer></ToastContainer>
                <div className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-8">


                    <div className="lg:w-1/3 xl:w-1/4 flex justify-center lg:justify-start mb-6 lg:mb-0 lg:mr-8">
                        <div className="relative">
                            <img
                                src={image}
                                alt={title}
                                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-md"
                            />

                            <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                APP
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-2/3 xl:w-3/4">


                        <div className="mb-6 md:mb-8">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                                {title}
                            </h1>
                            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">
                                Developed by <span className="font-semibold text-blue-600">{companyName || 'productive.io'}</span>
                            </p>
                        </div>


                        <div className="h-px bg-gray-200 mb-6 md:mb-8"></div>


                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">


                            <div className="flex flex-col items-center sm:items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className="flex items-center mb-3">
                                    <img
                                        src={DownloadIcon}
                                        alt="Downloads"
                                        className="w-8 h-8 mr-3"
                                    />
                                    <span className="text-gray-600 font-medium text-lg">Downloads</span>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        {formatDownloads(downloads || 8000000)}
                                    </h3>
                                </div>
                            </div>


                            <div className="flex flex-col items-center sm:items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className="flex items-center mb-3">
                                    <img
                                        src={AvgRatingIcon}
                                        alt="Average Rating"
                                        className="w-8 h-8 mr-3"
                                    />
                                    <span className="text-gray-600 font-medium text-lg">Average Ratings</span>
                                </div>
                                <div className="flex items-center">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mr-2">
                                        {ratingAvg || 4.9}
                                    </h3>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(ratingAvg || 4.9) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col items-center sm:items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className="flex items-center mb-3">
                                    <img
                                        src={ReviewIcon}
                                        alt="Total Reviews"
                                        className="w-8 h-8 mr-3"
                                    />
                                    <span className="text-gray-600 font-medium text-lg">Total Reviews</span>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        {formatReviews(reviews || 54000)}
                                    </h3>
                                </div>
                            </div>
                        </div>


                        <div className="mt-8" onClick={() => { handleInstalledApps(id) }}>
                            <button className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${!isInstalled ? `bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white` : `bg-gray-300 text-black`} text-lg md:text-xl font-semibold py-4 px-8 rounded-xl ${!isInstalled ? `shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1` : ``}`} onClick={() => toast(`Installing ${title}`)} disabled={isInstalled||status!="Install Now"?true:false}>
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                </svg>
                                <span>
                                    {
                                        !isInstalled? `Install Now(${size} MB)` : `Installed`
                                    }
                                </span>



                                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </button>


                            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-gray-500 text-sm">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <span>Installation time: ~2 minutes</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Works offline</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default DetailsPageHeader;
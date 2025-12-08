import React from 'react';
import DownloadIcon from '../../../assets/icon-downloads.png';
import StarIcon from '../../../assets/icon-ratings.png';
import { TrashIcon, InfoIcon, PlayIcon, DownloadCloudIcon } from 'lucide-react';
import { ToastContainer,toast } from 'react-toastify';
import { getStoredApps } from '../../utility/LocalStorage';

const InstallationCardHorizontal = ({ SingleApp,handleDelete}) => {
    if (!SingleApp) return null;

    const { image, title, rating, downloads, size,id} = SingleApp;

    return (

        <div className="group bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 overflow-hidden transition-all duration-300 mt-5 mb-[18px]">
            <ToastContainer></ToastContainer>
            <div className="flex items-center">

                {/* App Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Area */}
                <div className="flex-1 p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                        {/* Left: App Info */}
                        <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                                {title}
                            </h3>

                            {/* Stats - Compact */}
                            <div className="flex items-center gap-4 sm:gap-6">
                                <div className="flex items-center">
                                    <img src={DownloadIcon} alt="Downloads" className="w-4 h-4 mr-2" />
                                    <span className="text-sm font-semibold text-gray-700">{(downloads / 1000000).toFixed(2)}&nbsp;M</span>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src={StarIcon} alt="star" className="w-4 h-4" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">{rating}</span>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-sm font-semibold text-gray-700">{size} MB</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition-colors" onClick={()=>{toast("Under Development")}}>
                                <PlayIcon className="w-4 h-4" />
                                Open
                            </button>

                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors" onClick={()=>{toast("Under Development")}}>
                                <InfoIcon className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-green-500 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors" onClick={()=>{toast("Downloading.....")}}>
                                <DownloadCloudIcon className="w-5 h-5" />
                            </button>

                            <button className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors" onClick={()=>handleDelete(id)}>
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstallationCardHorizontal;
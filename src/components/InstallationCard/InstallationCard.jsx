import React from 'react';
import DownloadIcon from '../../../assets/icon-downloads.png';
import StarIcon from '../../../assets/icon-ratings.png';
import { TrashIcon } from 'lucide-react';
const InstallationCard = ({SingleApp}) => {
    if(!SingleApp) return null;
    const {image,title,rating,downloads,size,id}=SingleApp;
    return (
        <div
            key={id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
        >
            {/* App Image */}
            <div className="relative h-48 sm:h-56 md:h-64">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-black/70 text-white text-xs font-semibold rounded-full">
                        category
                    </span>
                </div>
            </div>

            {/* App Content */}
            <div className="p-4 sm:p-5 md:p-6">
                {/* App Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {title}
                </h3>

                {/* Stats Row */}
                <div className="flex items-center justify-between mb-4">
                    {/* Downloads */}
                    <div className="flex items-center">
                        <img
                            src={DownloadIcon}
                            alt="Downloads"
                            className="w-5 h-5 mr-2"
                        />
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-gray-900">
                                {downloads}
                            </div>
                            <div className="text-xs text-gray-500">Downloads</div>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="h-10 w-px bg-gray-200"></div>

                    {/* Rating */}
                    <div className="flex items-center">
                        <div className="flex items-center mr-2">
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={StarIcon}
                                    alt="star"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            ))}
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-gray-900">
                            {rating}
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="h-10 w-px bg-gray-200"></div>

                    {/* Size */}
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">
                            {size}
                        </div>
                        <div className="text-xs text-gray-500">Size</div>
                    </div>
                </div>

                {/* Uninstall Button */}
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-xl border border-red-200 transition-colors duration-300 group">
                    <img
                        src={TrashIcon}
                        alt="Uninstall"
                        className="w-5 h-5"
                    />
                    <span>Uninstall</span>
                    <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>

                {/* Quick Actions */}
                <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                        Open App
                    </button>
                    <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                        App Info
                    </button>
                    <button className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallationCard;
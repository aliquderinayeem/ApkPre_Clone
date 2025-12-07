import React from 'react';

const DetailsDescription = ({desiredApp}) => {
    if (!desiredApp) return null;
    const {description}=desiredApp;
    return (
            <div className="px-4 sm:px-6 md:px-8 py-6 border-t border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800">App Description</h2>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
    );
};

export default DetailsDescription;
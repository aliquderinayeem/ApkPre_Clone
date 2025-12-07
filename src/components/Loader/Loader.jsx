import React from 'react';

const Loader = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white', // or your preferred background
            zIndex: 9999
        }}>
            {/* You can keep your DaisyUI loading spinners or choose one */}
            <div style={{ textAlign: 'center' }}>
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
                <span className="loading loading-ball loading-xl"></span>
            </div>
        </div>
    );
};

export default Loader;
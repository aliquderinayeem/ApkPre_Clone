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
            background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)',
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
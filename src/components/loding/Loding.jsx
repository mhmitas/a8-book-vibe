import React from 'react';
import { Audio } from 'react-loader-spinner'

const Loding = () => {
    return (
        <div className='flex justify-center min-h-96 items-center'>
            {/* <span className="loading loading-spinner loading-lg text-secondary"></span> */}
            <Audio
                height="80"
                width="80"
                radius="9"
                color="violet"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />

        </div>
    );
};

export default Loding;
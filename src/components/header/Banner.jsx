import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            {/* <section className="bg-base-200 p-10 rounded-xl">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">eBooks to freshen up your bookshelf</h1>
                        <Link to="/listedBooks" className="">
                            <button className='btn btn-secondary'>View The List</button>
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 w-96 md:flex">
                        <img src="https://i.ibb.co/VNDTQBn/pngwing-1-1.png" alt="mockup" />
                    </div>
                </div>
            </section> */}
            <div className="hero h-[550px] bg-base-200">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <img src="https://i.ibb.co/VNDTQBn/pngwing-1-1.png" alt="mockup" />
                    <div>
                        <h1 className="text-5xl font-extrabold mb-8">An eBook is a universe of stories in your pocket.</h1>
                        <Link to="/listedBooks" className="">
                            <button className='btn btn-secondary'>View The List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
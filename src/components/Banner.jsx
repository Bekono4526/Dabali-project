import React from 'react';

function Banner() {
    return (
        <section className='banner-container bg-dark-purple text-white p-6 md:p-8 flex flex-col items-center justify-center min-h-screen'>
            <h2 className='text-4xl font-bold text-white font-custom mb-4'>
                Welcome to my website
            </h2>
            <p className='text-lg'>This is the Home page content.</p>
        </section>
    );
}

export default Banner;

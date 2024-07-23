import React, { useState, useEffect } from 'react';


function Banner() {
    const images = [
        { 
            url: 'dabali1.jpg', 
            title: 'Image 1', 
            description: 'This is the first image.', 
            link: '#link1' 
        },
        { 
            url: 'dabali2.jpg', 
            title: 'Image 2', 
            description: 'This is the second image.', 
            link: '#link2' 
        },
        { 
            url: 'dabali5.jpg', 
            title: 'Image 3', 
            description: 'This is the third image.', 
            link: '#link3' 
        }
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransition(true);
            setTimeout(() => {
                setTransition(false);
                setCurrentImageIndex(nextImageIndex);
                setNextImageIndex((nextImageIndex + 1) % images.length);
            }, 1000); // Durée de l'animation de transition (1 seconde ici)
        }, 5000); // Change d'image toutes les 5 secondes

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, [nextImageIndex, images.length]);

    return (
        <section className='banner-container bg-dark-purple text-white p-6 md:p-8 flex flex-col items-center justify-center min-h-screen'>
            <div 
                className={`banner-image ${transition ? 'slide-out' : ''}`} 
                style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
            ></div>
            <div 
                className={`banner-image ${transition ? 'slide-in' : ''}`} 
                style={{ backgroundImage: `url(${images[nextImageIndex].url})`, opacity: transition ? 1 : 0 }}
            ></div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg z-10 text-center">
                <h2 className='text-4xl font-bold text-white font-custom mb-4'>
                    {images[currentImageIndex].title}
                </h2>
                <p className='text-lg mb-4'>{images[currentImageIndex].description}</p>
                <a href={images[currentImageIndex].link} className='text-lg text-blue-400 underline'>
                    Learn more
                </a>
            </div>
        </section>
    );
}

export default Banner;

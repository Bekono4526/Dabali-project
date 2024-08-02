import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Footer from '../components/Footer';
import HeaderPages from '../components/HeaderPages';

function Gallerie() {
    const initialImages = [
        'im1.png',
        'cute.webp',
        'path/to/image3.jpg',
        // Ajoutez plus de chemins d'images ici
    ];

    const [images, setImages] = useState(initialImages);
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveForward = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const moveBackward = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <main className="bg-gray-100 p-4 md:p-10 mt-20">
                <HeaderPages />
               
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="relative w-full md:w-2/3 h-64 md:h-96 flex justify-center items-center mb-4 md:mb-0">
                        {images.map((image, index) => {
                            const isCurrent = index === currentIndex;
                            const offset = (index - currentIndex + images.length) % images.length;
                            const zIndex = images.length - offset;
                            const scale = isCurrent ? 1 : 0.8;
                            const opacity = isCurrent ? 1 : 0.5;

                            return (
                                <div
                                    key={index}
                                    className="absolute transition-transform duration-500"
                                    style={{
                                        transform: `translateX(${offset * 30}px) scale(${scale})`,
                                        zIndex: zIndex,
                                        opacity: opacity,
                                        width: '80%', // Largeur ajustée pour être responsive
                                        height: '80%' // Hauteur ajustée pour être responsive
                                    }}
                                >
                                    <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-md shadow-md" />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center mt-4 md:mt-0 md:ml-4">
                        <button onClick={moveBackward} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded mr-2">
                            <FiArrowLeft className="mr-2" />
                            Précédent
                        </button>
                        <button onClick={moveForward} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded">
                            Suivant
                            <FiArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </main>
            <footer className="rounded-lg">
      <p className="text-center">Copyright &copy; 2024 Tous droits réservés.</p>
      <p></p>
    </footer>
        </>
    );
}

export default Gallerie;

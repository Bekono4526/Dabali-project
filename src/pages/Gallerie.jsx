import React, { useState } from 'react';

function Gallerie() {
    const initialImages = [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
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
        <main className="bg-gray-100 p-10 mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Galerie</h2>
            <div className="relative w-full h-96 flex justify-center items-center">
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
                                width: '500px', // Largeur fixe
                                height: '350px' // Hauteur fixe
                            }}
                        >
                            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover rounded-md shadow-md" />
                        </div>
                    );
                })}
              
            </div>
            <div className="flex justify-center mb-4">
                <button onClick={moveBackward} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Précédent</button>
                <button onClick={moveForward} className="px-4 py-2 bg-blue-500 text-white rounded">Suivant</button>
            </div>
        </main>
    );
}

export default Gallerie;

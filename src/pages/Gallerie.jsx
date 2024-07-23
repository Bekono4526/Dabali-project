import React from 'react';

function Gallerie() {
    const images = [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        // Ajoutez plus de chemins d'images ici
    ];

    return (
        <main className="bg-gray-100 p-10 mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Galerie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((image, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-auto rounded-md" />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Gallerie;

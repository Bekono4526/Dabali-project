import React from 'react';
import Footer from '../components/Footer';

function DabaliTraiteur() {
    return (
        <main className="bg-gray-100 mt-20">
            {/* Section 1: Image and Service Details */}
            <section className="flex flex-col md:flex-row items-stretch justify-between p-10 bg-white shadow-md">
                <div className="md:w-1/2 flex-shrink-0">
                    <div className="h-full bg-gray-200 flex items-center justify-center">
                        <img src="path/to/your/service-image.jpg" alt="Traiteur Service" className="w-full h-auto rounded-md object-cover" />
                    </div>
                </div>
                <div className="md:w-1/2 bg-gray-100 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">DABALI XPRESS TRAITEUR</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Reception – Anniversaire – Baptême – Mariage – Séminaire – After-work
                    </p>
                    <p className="text-lg text-gray-700">
                        Contactez-nous au <span className="font-bold">2522018760</span>
                    </p>
                </div>
            </section>

            {/* Section 2: Videos */}
            <section className="p-10 bg-gray-200">
                <h2 className="text-3xl font-bold text-center mb-8">Nos Services en Vidéo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/your-video-id" title="Dabali Traiteur" className="rounded-md"></iframe>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/your-video-id" title="Dabali Xpress Traiteur" className="rounded-md"></iframe>
                    </div>
                </div>
            </section>

            {/* Section 3: Recent Articles */}
            <section className="p-10 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">Articles Récents</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Titre de l'Article 1</h3>
                        <p className="text-gray-700">Résumé de l'article 1...</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Titre de l'Article 2</h3>
                        <p className="text-gray-700">Résumé de l'article 2...</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Titre de l'Article 3</h3>
                        <p className="text-gray-700">Résumé de l'article 3...</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
export default DabaliTraiteur;
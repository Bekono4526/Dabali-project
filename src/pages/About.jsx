import React from 'react';
import Footer from '../components/Footer';

function About() {
    return (
        <main className="bg-gray-100 mt-20">
            {/* Section 1: Image and Company History */}
            <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white shadow-md">
                <div className="md:w-1/2">
                    <img src="im1.png" alt="Company History" className="w-full h-auto rounded-md" />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10">
                    <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
                    <p className="text-lg text-gray-700">
                        Lancé en septembre 2021, Dabali Xpress est une entreprise 100% ivoirienne. Elle est né de la volonté de sa créatrice de valoriser les plats Africains et ivoiriens en particulier dans un secteur de la restauration rapide dominé essentiellement par des menus occidentaux. C'est la première chaine de Fast food ivoirienne proposant exclusivement une grande variété de plats locaux faites dans des conditions sanitaires irréprochables alliant qualité de service et rapidité. Elle compte à ce jour plusieurs restaurants implantés dans différentes communes pour le plus grand plaisir de nos dabasseurs.

Dabali Xpress
                    </p>
                </div>
            </section>

            {/* Section 2: Company Values */}
            <section className="p-10 bg-gray-200">
                <h2 className="text-3xl font-bold text-center mb-8">Nos Valeurs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Valeur 1</h3>
                        <p className="text-lg text-gray-700">
                            [Description de la valeur 1]
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Valeur 2</h3>
                        <p className="text-lg text-gray-700">
                            [Description de la valeur 2]
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Valeur 3</h3>
                        <p className="text-lg text-gray-700">
                            [Description de la valeur 3]
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Valeur 4</h3>
                        <p className="text-lg text-gray-700">
                            [Description de la valeur 4]
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: Founders and Team Images */}
            <section className="p-10 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">Rencontrez Nos Fondateurs et Équipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <img src="path/to/founder1.jpg" alt="Founder 1" className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold">Fondateur 1</h3>
                        <p className="text-gray-700">[Rôle de fondateur 1]</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="path/to/founder2.jpg" alt="Founder 2" className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold">Fondateur 2</h3>
                        <p className="text-gray-700">[Rôle de fondateur 2]</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="path/to/team.jpg" alt="Team" className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold">Équipe</h3>
                        <p className="text-gray-700">[Description de l'équipe]</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default About;

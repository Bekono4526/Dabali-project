import React from 'react';
import Footer from '../components/Footer';
import HeaderPages from '../components/HeaderPages';

function About() {
    return (
        
        <main className="bg-gray-100 mt-20">
<HeaderPages />
            {/* Section 1: Image and Company History */}
            <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white shadow-md">
                <div className="md:w-1/2">
                    <img src="path/to/your/first/image.jpg" alt="Company History" className="w-full h-auto rounded-md" />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10">
                    <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
                    <p className="text-lg text-gray-700">
                        Lancé en septembre 2021, Dabali Xpress est une entreprise 100% ivoirienne. Elle est né de la volonté de sa créatrice de valoriser les plats Africains et ivoiriens en particulier dans un secteur de la restauration rapide dominé essentiellement par des menus occidentaux. C'est la première chaine de Fast food ivoirienne proposant exclusivement une grande variété de plats locaux faites dans des conditions sanitaires irréprochables alliant qualité de service et rapidité. Elle compte à ce jour plusieurs restaurants implantés dans différentes communes pour le plus grand plaisir de nos dabasseurs.
                    </p>
                </div>
            </section>

            {/* Section 2: Company Values */}
            <section className="p-10 bg-yellow-100">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="flex flex-col items-center">
                        <img src="path/to/founder1.jpg" alt="Fondateur 1" className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold">Fondateur 1</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="path/to/founder2.jpg" alt="Fondateur 2" className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-xl font-semibold">Fondateur 2</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <img src="path/to/chefs.jpg" alt="Chefs" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold">Chefs</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="path/to/servers.jpg" alt="Serveurs" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold">Serveurs</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="path/to/administrative_staff.jpg" alt="Employés Administratifs" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold">Employés Administratifs</h3>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default About;

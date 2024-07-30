import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaChevronDown, FaChevronUp, FaBolt, FaMapMarkerAlt, FaLightbulb, FaBroom } from 'react-icons/fa';
import Footer from '../components/Footer';
import HeaderPages from '../components/HeaderPages';

function About() {
    const [showFullText, setShowFullText] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const handleMouseEnter = (cardIndex) => {
        setHoveredCard(cardIndex);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const cards = [
        { color: 'bg-red-500', title: 'RAPIDITE', text: 'Nous nous assurons d’effectuer le service sur place en 5 à 10 mn maximum pour permettre à nos clients de bénéficier de plus de temps pour savourer nos repas', icon: <FaBolt /> },
        { color: 'bg-blue-500', title: 'PROXIMITE', text: 'Soucieux de satisfaire nos clients au quotidien, nous nous sommes dotés d’un service après-vente dynamique, disponible et à l’écoute du client. Nous sommes aussi présents sur tous les réseaux sociaux', icon: <FaMapMarkerAlt /> },
        { color: 'bg-green-500', title: 'INNOVATION', text: 'Notre restaurant est équipé d’appareils technologiques de pointe : cuiseur de riz, four dernière génération, chambre froide etc…', icon: <FaLightbulb /> },
        { color: 'bg-yellow-500', title: 'PROPRETE', text: 'Nos restaurants sont soigneusement nettoyés au quotidien, PS : Nos cuisiniers & managers ont suivi une formation sur le système HACCP en restauration collective et rapide.', icon: <FaBroom /> },
    ];

    return (
        <main className="bg-gray-100 mt-20">
            <HeaderPages />
            {/* Section 1: Image and Company History */}
            <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-white shadow-md">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <img src="dabali5.jpg" alt="Company History" className="w-full h-auto rounded-md" />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Histoire</h2>
                    <p className="text-base md:text-lg text-gray-700">
                        {isMobile ? (
                            showFullText ? (
                                <>
                                    Lancé en septembre 2021, Dabali Xpress est une entreprise 100% ivoirienne. Elle est née de la volonté de sa créatrice de valoriser les plats Africains et ivoiriens en particulier dans un secteur de la restauration rapide dominé essentiellement par des menus occidentaux. C'est la première chaîne de Fast food ivoirienne proposant exclusivement une grande variété de plats locaux faits dans des conditions sanitaires irréprochables alliant qualité de service et rapidité. Elle compte à ce jour plusieurs restaurants implantés dans différentes communes pour le plus grand plaisir de nos dabasseurs.
                                    <button onClick={toggleText} className="text-blue-500 hover:underline flex items-center justify-end w-full mt-2">
                                        <FaChevronUp color="red" className="ml-1" />
                                    </button>
                                </>
                            ) : (
                                <>
                                    Lancé en septembre 2021, Dabali Xpress est une entreprise 100% ivoirienne. Elle est née de la volonté de sa créatrice de valoriser les plats Africains et ivoiriens en particulier dans un secteur de la restauration rapide dominé essentiellement par des menus occidentaux...
                                    <button onClick={toggleText} className="text-blue-500 hover:underline flex items-center justify-end w-full mt-2">
                                        <FaChevronDown color="red" className="ml-1" />
                                    </button>
                                </>
                            )
                        ) : (
                            <>
                                Lancé en septembre 2021, Dabali Xpress est une entreprise 100% ivoirienne. Elle est née de la volonté de sa créatrice de valoriser les plats Africains et ivoiriens en particulier dans un secteur de la restauration rapide dominé essentiellement par des menus occidentaux. C'est la première chaîne de Fast food ivoirienne proposant exclusivement une grande variété de plats locaux faits dans des conditions sanitaires irréprochables alliant qualité de service et rapidité. Elle compte à ce jour plusieurs restaurants implantés dans différentes communes pour le plus grand plaisir de nos dabasseurs.
                            </>
                        )}
                    </p>
                </div>
            </section>

            {/* Section 2: Company Values */}
            <section className="p-6 md:p-10 bg-yellow-100">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nos Valeurs</h2>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`${card.color} ${hoveredCard !== null && hoveredCard !== index ? 'blur-sm' : 'hover:scale-110'} transform transition duration-400 ease-in-out text-white rounded-lg w-64 h-64 p-4 flex flex-col justify-start cursor-pointer`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex items-center mb-2">
                                <span className="text-2xl mr-2 text-center">{card.icon}</span>
                                <p className="font-bold text-lg text-center ">{card.title}</p>
                            </div>
                            <p className="text-sm mt-4 text-center">{card.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: Founders and Team Images */}
            <section className="p-6 md:p-10 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Rencontrez Nos Fondateurs et Équipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="flex flex-col items-center">
                        <img src="fondatrice.jpg" alt="Fondateur 1" className="w-50 h-50  mb-4" />
                        <h3 className="text-lg md:text-xl font-semibold">Fondateur 1</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="DGA.jpg" alt="Fondateur 2" className="w-50 h-50  mb-4 " />
                        <h3 className="text-lg md:text-xl font-semibold">Fondateur 2</h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <img src="path/to/chefs.jpg" alt="Chefs" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-base md:text-lg font-semibold">Chefs</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="path/to/servers.jpg" alt="Serveurs" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-base md:text-lg font-semibold">Serveurs</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="path/to/administrative_staff.jpg" alt="Employés Administratifs" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-base md:text-lg font-semibold">Employés Administratifs</h3>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default About;

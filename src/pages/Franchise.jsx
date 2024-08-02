import React from 'react';
import HeaderPages from '../components/HeaderPages';

function Franchise() {
    const sections = [
        {
            title: "Pourquoi devenir franchisé Dabali Xpress",
            text: "Devenir franchise DABALI XPRESS c’est être <strong>la vitrine moderne du tourisme culinaire ivoirien</strong> et un <strong>acteur engagé dans le développement local</strong>.",
            image: "salut.jpeg",
            alt: "Franchise Dabali Xpress",
            buttons: true,
            className: "md:w-1/3 w-full h-auto object-contain rounded-lg mb-4 md:mb-0 md:mr-8"
        },
        {
            title: "Notre vision",
            text: "Favoriser le consommer local à travers la promotion des mets ivoiriens et d’autres pays africains est la vision que nous poursuivons. Dabali Xpress œuvre chaque jour à intégrer les habitudes alimentaires de nos contemporains à tous les moments de la journée en leur offrant <strong>toute la richesse et la saveur des recettes de nos grands-mères</strong>. Cadres, Entrepreneurs, Etudiants, Hommes d’affaires, Touristes… sont surs de trouver un produit correspondant à leurs envies tout au long de la journée sur place dans une ambiance chaleureuse ou en livraison à partir du restaurant le plus proche de leur localisation.",
            image: "miam.jpeg",
            alt: "Notre vision",
            buttons: false,
            className: "md:w-1/3 w-full h-auto object-contain rounded-lg mb-4 md:mb-0 md:mr-8"
        },
        {
            title: "Notre mission",
            text: "Nos plats, nos salades et nos desserts sont préparés chaque jour sur place dans chacun de nos restaurants. Servir rapidement des plats <strong>sains et savoureux typiquement africains</strong> dans un cadre et environnement sain est la mission accomplie chaque jour dans tous les restaurants Dabali Xpress. Chaque employé est sensibilisé sur cette promesse et travaille dans ce sens. Tous, des cuisiniers aux serveurs en passant par les caissiers s’évertuent chacun à son niveau à faire découvrir et apprécier les produits Dabali Xpress en mettant l’accent sur <strong>la qualité du service</strong>, la disponibilité effective des plats et la bonne tenue du cadre.",
            images: ["Miem.jpeg", "mium.jpeg"],
            alt: ["Notre mission 1", "Notre mission 2"],
            buttons: false,
            className: "w-full h-auto object-contain rounded-lg mb-4 md:mb-0"
        },
        {
            title: "Notre offre Produit",
            text: "Dabali Xpress se caractérise par <strong>l’identité et la diversité culinaire africaine</strong>. La marque Dabali Xpress mise sur la production locale pour offrir des mets succulents et originaux au quotidien. Diverses galettes, du pain avec un contenu varié, du café local et continental, des pastels, de la bouillie… disponibles dès les premières heures de la journée sont les composantes du petit déjeuner à Dabali Xpress. Le déjeuner rappelle les jours de fêtes avec un menu comportant au moins 12 plats parmi lesquels <strong>des sauces onctueuses, des soupes, des grillades et des braisés de viandes ou de poissons</strong> servis avec des accompagnements variés allant du foutou, au riz en passant par l’alloco et l’attiéké. Au sein des restaurants Dabali Xpress sont également proposés des <strong>jus de fruits fait à base de fruits naturels pressés traditionnellement</strong> pour conserver toutes les saveurs et les desserts frais pour tous les gouts. Nos chefs cuisiniers revisitent la gastronomie africaine pour concocter à leur façon des recettes <strong>innovantes et savoureuses</strong> qui sont dégustées avec plaisir par la clientèle. <strong>L’innovation est au cœur de l’activité de Dabali Xpress</strong>. Choisir Dabali Xpress, c’est proposer une offre complète, de qualité, originale et accessible.",
            alt: "Notre offre Produit",
            buttons: false,
            className: ""
        },
        {
            title: "Rejoindre DABALI XPRESS, c’est simple !",
            text: "Vous devez effectuer le parcours décrit étape après étape jusqu’à approbation de notre équipe. <strong>Une panoplie d’opportunités et des perspectives à perte de vue vous attendent avec Dabali Xpress</strong>. Vous vous réjouirez du franc succès de cette activité dans laquelle vous vous êtes investi(s) et de laquelle vous tirerez les meilleurs profits.",
            image: "schema.jpg",
            alt: "Rejoindre DABALI XPRESS",
            buttons: true,
            className: "md:w-1/3 w-full h-auto object-contain rounded-lg mb-4 md:mb-0 md:mr-8"
        }
    ];

    return (
        <><main className="bg-gray-100 p-4 md:p-10 mt-20">
            <HeaderPages />
            {sections.map((section, index) => (
                <section key={index} className={`bg-white p-4 md:p-8 rounded-lg shadow-md mb-8 flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {section.image && (
                        <img src={section.image} alt={section.alt} className={section.className} />
                    )}
                    {section.images && section.images.length > 0 && (
                        <div className="relative w-full md:w-2/3 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                            <p className="text-base md:text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: section.text }}></p>
                            <div className="md:absolute md:right-0 md:top-0 md:flex md:flex-col">
                                <img src={section.images[0]} alt={section.alt[0]} className="w-full md:w-64 h-auto object-contain rounded-lg mb-4" />
                                <img src={section.images[1]} alt={section.alt[1]} className="w-full md:w-64 h-auto object-contain rounded-lg" />
                            </div>
                        </div>
                    )}
                    {!section.images && !section.image && (
                        <div className="flex flex-col justify-center w-full">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                            <p className="text-base md:text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: section.text }}></p>
                            {section.buttons && (
                                <div className="flex flex-col md:flex-row justify-between mt-6">
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md mb-4 md:mb-0">Nous contacter</button>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Télécharger la brochure ici</button>
                                </div>
                            )}
                        </div>
                    )}
                    {!section.images && section.image && (
                        <div className="flex flex-col justify-center w-full md:w-2/3">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                            <p className="text-base md:text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: section.text }}></p>
                            {section.buttons && (
                                <div className="flex flex-col md:flex-row justify-between mt-6">
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md mb-4 md:mb-0">Nous contacter</button>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Télécharger la brochure ici</button>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            ))}

            <section className="bg-white p-4 md:p-8 rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Articles récents</h2>
                <ul className="list-disc list-inside">
                    <li className="text-base md:text-lg text-gray-700 mb-2"><strong>Dabali Xpress souffle ses deux bougies en célébrant ses employés et partenaires</strong></li>
                    <li className="text-base md:text-lg text-gray-700 mb-2"><strong>Dabali Xpress décroche le Prix d'Excellence du meilleur établissement de restauration</strong></li>
                    <li className="text-base md:text-lg text-gray-700"><strong>Prix du meilleur accueil dans la catégorie Restauration rapide</strong></li>
                </ul>
            </section>
        </main>
        <footer className=" rounded-lg">
                <p className="text-center">Copyright &copy; 2024 Tous droits réservés.</p>
                <p></p>
            </footer></>
    );
}

export default Franchise;

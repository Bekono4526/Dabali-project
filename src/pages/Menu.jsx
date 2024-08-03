import React, { useState, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import HeaderPages from "../components/HeaderPages";

export const menuItems = [
  {
    category: "PETITS DÉJEUNER",
    items: [
      { name: "GBOFLOTO", price: 500, image: "image-url-1" },
      { name: "Jaune-jaune", price: 500, image: "image-url-2" },
      { name: "Tra tra", price: 500, image: "image-url-3" },
      { name: "PAIN ROGNON", price: 1000, image: "image-url-4" },
      // Add more items with images
    ],
  },
  {
    category: "SAUCES",
    items: [
      { name: "Soupe de Pattes de Bœuf", price: 2500, image: "image-url-5" },
      {
        name: "Sauce Graine viande de boeuf",
        price: 3500,
        image: "image-url-6",
      },
      // Add more items with images
    ],
  },
  {
    category: "GRILLADES",
    items: [
      { name: "Alloco Œuf", price: 2000, image: "image-url-7" },
      { name: "Thon braisé", price: 2500, image: "image-url-8" },
      // Add more items with images
    ],
  },
  {
    category: "BOISSON",
    items: [
      { name: "Bissap", price: 500, image: "image-url-9" },
      { name: "Gingembre", price: 500, image: "image-url-10" },
      // Add more items with images
    ],
  },
  {
    category: "DESSERTS",
    items: [
      { name: "Dêguê", price: 1000, image: "image-url-11" },
      { name: "Yaourt", price: 1000, image: "image-url-12" },
      // Add more items with images
    ],
  },
];

function Menu() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const restaurantsRef = useRef(null);

  const locations = [
    {
      name: "Restaurant 1",
      address: "Adresse 1, Ville, Pays",
      mapUrl: "https://www.google.com/maps/embed?pb=1",
      menuLink: "#",
    },
    {
      name: "Restaurant 2",
      address: "Adresse 2, Ville, Pays",
      mapUrl: "https://www.google.com/maps/embed?pb=2",
      menuLink: "#",
    },
    {
      name: "Restaurant 3",
      address: "Adresse 3, Ville, Pays",
      mapUrl: "https://www.google.com/maps/embed?pb=3",
      menuLink: "#",
    },
    {
      name: "Restaurant 4",
      address: "Adresse 4, Ville, Pays",
      mapUrl: "https://www.google.com/maps/embed?pb=4",
      menuLink: "#",
    },
  ];

  const handleMenuClick = () => {
    navigate("/full-menu");
  };

  const handleOrderNowClick = () => {
    if (restaurantsRef.current) {
      restaurantsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

 

  return (
    <main className="bg-gray-100 mt-10">
      <HeaderPages />
      <div className="pt-20 px-4 md:px-10">
        <section className="bg-white p-4 md:p-8 rounded-lg shadow-md mb-8 flex flex-col md:flex-row">
          <video
            src="dabali.mp4"
            alt="Franchise Dabali Xpress"
            className="w-full md:w-1/3 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
            style={{ objectFit: "contain", objectPosition: "center" }}
            controls
          >
            Votre navigateur ne supporte pas les vidéos HTML5.
          </video>
          <div className="flex flex-col justify-center w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Menu du Jour chez Dabali Xpress
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              <strong>
                Découvrez notre délicieux menu du jour, soigneusement préparé
                avec des ingrédients frais et locaux pour une expérience
                culinaire ivoirienne authentique :
              </strong>
            </p>

            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleOrderNowClick}
              >
                Commander Maintenant
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleMenuClick}
              >
                Voir la Carte Complète
              </button>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row h-full">
          <div
            className="w-full md:w-1/2 bg-white p-4 md:p-8 rounded-lg shadow-md overflow-y-auto mb-4 md:mb-0"
            ref={restaurantsRef}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos Restaurants</h2>
            <ul>
              {locations.map((location, index) => (
                <li
                  key={index}
                  className="mb-4 p-4 border rounded-md cursor-pointer hover:bg-gray-200"
                  onClick={() => setSelectedLocation(location)}
                >
                  <h3 className="text-xl md:text-2xl font-semibold">{location.name}</h3>
                  <p className="text-base md:text-lg text-gray-700">{location.address}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 bg-white p-4 md:p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            {selectedLocation ? (
              <>
                <iframe
                  src={selectedLocation.mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-md mb-4"
                ></iframe>
                <button
                  onClick={handleMenuClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <FiShoppingCart className="mr-2" />
                  Voir le menu
                </button>
              </>
            ) : (
              <p className="text-base md:text-lg text-gray-700 text-center">
                Sélectionnez un restaurant pour voir la carte et le menu.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Menu;

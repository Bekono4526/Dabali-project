import React, { useRef, useState } from "react";
import { FiShoppingCart, FiX, FiCheckCircle } from "react-icons/fi";
import HeaderPages from "../components/HeaderPages";

function Menu() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const scrollRefs = {
    "PETITS DÉJEUNER": useRef(null),
    SAUCES: useRef(null),
    GRILLADES: useRef(null),
    BOISSON: useRef(null),
    DESSERTS: useRef(null),
  };

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

  const menuItems = [
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

  const handleMenuClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleManualScroll = (category, direction) => {
    const container = scrollRefs[category].current;
    const scrollAmount = container.offsetWidth;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <main className="bg-gray-100 mt-10">
      <HeaderPages />
      {/* Section Vidéo YouTube */}
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

            <div className="flex justify-between">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Commander Maintenant
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Voir la Carte Complète
              </button>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row h-full">
          {/* Partie gauche : Liste des restaurants */}
          <div className="w-full md:w-1/2 bg-white p-4 md:p-8 rounded-lg shadow-md overflow-y-auto mb-4 md:mb-0">
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

          {/* Partie droite : Carte et lien vers le menu */}
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

      {/* Bouton Panier */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleCartClick}
          className="bg-yellow-500 text-white p-4 rounded-full flex items-center shadow-lg"
        >
          <FiShoppingCart className="mr-2" />
          Panier ({cart.length})
        </button>
      </div>

      {/* Pop-up pour le menu */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-screen overflow-y-auto">
            <div className="flex justify-between mb-4">
              <button
                onClick={handleClosePopup}
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FiX className="mr-2" />
                Fermer
              </button>
              <div className="flex items-center">
                <FiShoppingCart className="text-2xl mr-2" />
                <span className="text-xl">{cart.length} articles</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Menu</h2>
            {menuItems.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {category.category}
                </h3>
                <div className="relative">
                  <button
                    onClick={() =>
                      handleManualScroll(category.category, "left")
                    }
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-gray-200 text-gray-800 z-10 flex items-center justify-center rounded-full hover:bg-gray-300"
                  >
                    &#10094;
                  </button>
                  <div
                    ref={scrollRefs[category.category]}
                    className="flex overflow-x-auto whitespace-nowrap scroll-smooth gap-4 px-10 scroll-container"
                    style={{ willChange: "scroll-position" }}
                  >
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="min-w-full sm:min-w-80 flex-shrink-0 border rounded-md p-4 shadow-sm"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-32 object-cover rounded-md mb-2"
                        />
                        <h4 className="text-xl font-semibold">{item.name}</h4>
                        <p className="text-gray-700">
                          {item.price === "Indisponible"
                            ? item.price
                            : `${item.price} FCFA`}
                        </p>
                        {item.price !== "Indisponible" && (
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-green-500 text-white px-2 py-1 rounded-md mt-2 flex items-center"
                          >
                            <FiShoppingCart className="mr-2" />
                            Ajouter au panier
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      handleManualScroll(category.category, "right")
                    }
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-gray-200 text-gray-800 z-10 flex items-center justify-center rounded-full hover:bg-gray-300"
                  >
                    &#10095;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pop-up pour le panier */}
      {showCart && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">Votre Panier</h2>
              <button
                onClick={handleCartClick}
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FiX className="mr-2" />
                Fermer
              </button>
            </div>

            <div className="border-t border-gray-300 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FiShoppingCart className="text-2xl mr-2" />
                  <span className="text-xl">{cart.length} articles</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 py-4">
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md w-full text-left">
                Ajouter détails
              </button>
            </div>

            <div className="border-t border-gray-300 py-4">
              <h3 className="text-xl font-semibold mb-2">Option de Commande</h3>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md w-full text-left">
                Choisir un mode de commande
              </button>
            </div>

            <div className="border-t border-gray-300 py-4">
              <h3 className="text-xl font-semibold mb-2">Choisissez l'Heure</h3>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md w-full text-left">
                Régler le temps
              </button>
            </div>

            <div className="border-t border-gray-300 py-4">
              <h3 className="text-xl font-semibold mb-2">Mode de Paiement</h3>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md w-full text-left">
                Choisir un mode de paiement
              </button>
            </div>

            <ul className="mb-6 border-t border-gray-300 py-4">
              {cart.length === 0 ? (
                <li className="text-center text-gray-500">
                  Votre panier est vide
                </li>
              ) : (
                cart.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-lg mb-2"
                  >
                    <span>{item.name}</span>
                    <span>{item.price} FCFA</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md flex items-center"
                    >
                      <FiX className="mr-2" />
                      Retirer
                    </button>
                  </li>
                ))
              )}
            </ul>

            <div className="border-t border-gray-300 py-4 flex justify-between items-center">
              <span className="text-2xl font-bold">
                Total: {getTotal()} FCFA
              </span>
              <button
                onClick={() => alert("Paiement non encore implémenté")}
                className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FiCheckCircle className="mr-2" />
                Payer
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Menu;

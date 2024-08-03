import React, { useRef, useState } from "react";
import { FiShoppingCart, FiX, FiCheckCircle, FiTrash } from "react-icons/fi";
import { menuItems } from "./Menu";
import HeaderPages from "../components/HeaderPages";

function FullMenuPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const scrollRefs = {
    "PETITS DÉJEUNER": useRef(null),
    SAUCES: useRef(null),
    GRILLADES: useRef(null),
    BOISSON: useRef(null),
    DESSERTS: useRef(null),
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

  const handleCartClick = () => {
    setShowCart(!showCart);
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
    <div className="container mx-auto p-4">
      <HeaderPages title="Menu Complet" />
      <div className="bg-yellow-300 text-black p-4 rounded-md mb-6 shadow-md text-center mt-20">
        <h2 className="text-xl font-bold">Offres Spéciales</h2>
        <p>Profitez de 20% de réduction sur toutes les grillades ce week-end!</p>
      </div>
      
      {menuItems.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            {category.category}
          </h3>
          <div className="relative">
            <button
              onClick={() => handleManualScroll(category.category, "left")}
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
                  className="min-w-full sm:min-w-[280px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px] flex-shrink-0 border rounded-md p-4 shadow-sm"
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
              onClick={() => handleManualScroll(category.category, "right")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-gray-200 text-gray-800 z-10 flex items-center justify-center rounded-full hover:bg-gray-300"
            >
              &#10095;
            </button>
          </div>
        </div>
      ))}

      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleCartClick}
          className="bg-yellow-500 text-white p-4 rounded-full flex items-center shadow-lg"
        >
          <FiShoppingCart className="mr-2" />
          Panier ({cart.length})
        </button>
      </div>

      {showCart && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-screen overflow-y-auto mt-10 md:mt-0 scrollable">
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

      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Section de gauche : Contact et options */}
        <div className="w-full md:w-1/2 pr-4">
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
        </div>

        {/* Section de droite : Articles et total */}
        <div className="w-full md:w-1/2 pl-4">
          <div className="border-t border-gray-300 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FiShoppingCart className="text-2xl mr-2" />
                <span className="text-xl">{cart.length} articles</span>
              </div>
            </div>
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
                    <FiTrash className="" />
                  </button>
                </li>
              ))
            )}
          </ul>

          <div className="border-t border-gray-300 py-4 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">
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
    </div>
  </div>
)}


    </div>
  );
}

export default FullMenuPage;

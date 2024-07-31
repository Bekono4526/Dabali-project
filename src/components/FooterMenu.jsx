import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronUp, FaChevronDown, FaTimes } from 'react-icons/fa';

function FooterMenu() {
  const [showPopup, setShowPopup] = useState(false);
  const [restaurant, setRestaurant] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [accordionOpen, setAccordionOpen] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      restaurant,
      name,
      phone,
      date,
      time,
      people
    });
    togglePopup();
  };

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <>
      <footer className='footer-menu-container fixed bottom-0 bg-yellow-400 text-white p-4 z-50'>
        {/* Desktop View */}
        <div className="hidden custom-md:flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center gap-2 md:gap-6">
            <Link to="/menu" className='hover:text-gray-300 transition-colors duration-300'>Menu</Link>
            <Link to="/traiteur" className='hover:text-gray-300 transition-colors duration-300'>Dabali Traiteur</Link>
            <button onClick={togglePopup} className='hover:text-gray-300 transition-colors duration-300'>
              Réserver
            </button>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2 md:mt-0">
            <p>Abidjan, Côte d'Ivoire</p>
            <p>+225 01 23 45 67 89</p>
            <p>contact@dabalixpress.ci</p>
          </div>
        </div>
        
        {/* Mobile View */}
        <div className="flex flex-col custom-md:hidden w-full items-center">
          <div className="flex items-center justify-center w-full p-2 relative">
            <span className="mx-auto text-yellow-400">FIND US</span>
            <button onClick={toggleAccordion} className="text-red-500 absolute right-4 top-1/2 transform -translate-y-1/2">
              {accordionOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          {accordionOpen && (
            <div className="flex flex-col items-center gap-2 mt-4 w-full">
              <Link to="/menu" className='hover:text-gray-300 transition-colors duration-300 text-center w-full'>Menu</Link>
              <Link to="/traiteur" className='hover:text-gray-300 transition-colors duration-300 text-center w-full'>Dabali Traiteur</Link>
              <button onClick={togglePopup} className='hover:text-gray-300 transition-colors duration-300 text-center w-full'>
                Réserver
              </button>
              <div className="accordion-content p-4 bg-light-gray text-black text-center w-full">
                <p>Abidjan, Côte d'Ivoire</p>
                <p>+225 01 23 45 67 89</p>
                <p>contact@dabalixpress.ci</p>
              </div>
            </div>
          )}
        </div>
      </footer>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-96 mt-20">
            <button onClick={togglePopup} className="absolute top-2 right-2 text-xl text-red-500">
              <FaTimes />
            </button>
            <h2 className="text-xl mb-4">Réserver une table</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block mb-1 text-sm">Choisissez un restaurant:</label>
                <select value={restaurant} onChange={(e) => setRestaurant(e.target.value)} className="w-full p-1 border rounded text-sm text-dark-purple">
                  <option value="">Sélectionner</option>
                  <option value="restaurant1">Restaurant 1</option>
                  <option value="restaurant2">Restaurant 2</option>
                  <option value="restaurant3">Restaurant 3</option>
                  <option value="restaurant4">Restaurant 4</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="block mb-1 text-sm">Nom:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-1 border rounded text-sm text-dark-purple" />
              </div>
              <div className="mb-3">
                <label className="block mb-1 text-sm">Téléphone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-1 border rounded text-sm text-dark-purple" />
              </div>
              <div className="mb-3">
                <label className="block mb-1 text-sm">Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-1 border rounded text-sm text-dark-purple" />
              </div>
              <div className="mb-3">
                <label className="block mb-1 text-sm">Heure:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-1 border rounded text-sm text-dark-purple" />
              </div>
              <div className="mb-3">
                <label className="block mb-1 text-sm">Nombre de personnes:</label>
                <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} className="w-full p-1 border rounded text-sm text-dark-purple" />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={togglePopup} className="bg-red-500 text-white p-1 rounded hover:bg-red-700 transition-colors duration-300 text-sm">Annuler</button>
                <button type="submit" className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700 transition-colors duration-300 text-sm">Réserver</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FooterMenu;

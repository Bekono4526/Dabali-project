import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FooterMenu() {
    const [showPopup, setShowPopup] = useState(false);
    const [restaurant, setRestaurant] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [people, setPeople] = useState('');

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de soumission du formulaire
        console.log({
            restaurant,
            name,
            phone,
            date,
            time,
            people
        });
        togglePopup(); // Fermer le pop-up après soumission
    };

    return (
        <footer className='footer-menu-container fixed bottom-0 left-0 right-0 bg-dark-purple text-white p-4 z-50 flex justify-between items-center'>
            <div className="flex items-center gap-6">
                <Link to="/menu" className='hover:text-gray-300 transition-colors duration-300'>Menu</Link>
                <Link to="/traiteur" className='hover:text-gray-300 transition-colors duration-300'>Dabali Traiteur</Link>
                <button onClick={togglePopup} className='hover:text-gray-300 transition-colors duration-300'>
                    Réserver
                </button>
            </div>
            <div className="flex items-center gap-4">
                <p>Abidjan, Côte d'Ivoire</p>
                <p>+225 01 23 45 67 89</p>
                <p>contact@dabalixpress.ci</p>
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-dark-purple p-6 rounded-lg shadow-lg relative w-96 mt-20">
                        <button onClick={togglePopup} className="absolute top-2 right-2 text-xl">&times;</button>
                        <h2 className="text-xl mb-4">Réserver une table</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="block mb-1 text-sm">Choisissez un restaurant:</label>
                                <select value={restaurant} onChange={(e) => setRestaurant(e.target.value)} className="w-full p-1 border rounded text-smn text-dark-purple">
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
                                <label className="block mb-1 text-sm ">Date:</label>
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
                                <button type="button" onClick={togglePopup} className="bg-red-500 text-white p-1 rounded hover:bg-red-700 transition-colors duration-300 text-sm">Cancel</button>
                                <button type="submit" className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700 transition-colors duration-300 text-sm">Réserver</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default FooterMenu;

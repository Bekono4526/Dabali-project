import React from 'react';

function Contact() {
    return (
        <main className="bg-gray-100 p-10 mt-20">
            <section className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Nous serions ravis de vous entendre. Remplissez le formulaire ci-dessous ou utilisez les informations de contact fournies pour nous joindre.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulaire de contact */}
                    <div>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Nom
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Votre email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    rows="5"
                                    placeholder="Votre message"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* Informations de contact */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Nos informations de contact</h3>
                        <p className="text-lg text-gray-700 mb-2">
                            <strong>Adresse :</strong> 123 Rue Exemple, Abidjan, Côte d'Ivoire
                        </p>
                        <p className="text-lg text-gray-700 mb-2">
                            <strong>Téléphone :</strong> +225 01 23 45 67 89
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Email :</strong> contact@dabalixpress.ci
                        </p>
                        
                        <h3 className="text-2xl font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                                    <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h11.05v-8.32h-2.8v-3.24h2.8v-2.38c0-2.77 1.69-4.28 4.16-4.28 1.18 0 2.2.09 2.5.13v2.89l-1.72.01c-1.35 0-1.62.64-1.62 1.59v2.04h3.24l-.42 3.24h-2.82V24h5.52c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                                    <path d="M23.954 4.569c-.885.385-1.83.647-2.825.764 1.014-.608 1.793-1.573 2.163-2.724-.951.555-2.005.959-3.127 1.175-.897-.957-2.178-1.555-3.594-1.555-2.722 0-4.93 2.21-4.93 4.93 0 .386.044.762.128 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.728-.666 1.577-.666 2.482 0 1.71.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.386 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.622-.03-.921-.086.623 1.944 2.428 3.358 4.57 3.396-1.675 1.313-3.787 2.096-6.078 2.096-.395 0-.787-.023-1.175-.068 2.168 1.39 4.742 2.204 7.516 2.204 9.025 0 13.965-7.482 13.965-13.965 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-pink-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                                    <path d="M12 2.163c-3.204 0-5.81 2.607-5.81 5.81 0 3.204 2.606 5.81 5.81 5.81 3.204 0 5.81-2.606 5.81-5.81 0-3.204-2.606-5.81-5.81-5.81zm0 9.58c-2.083 0-3.77-1.688-3.77-3.77 0-2.083 1.688-3.77 3.77-3.77 2.083 0 3.77 1.688 3.77 3.77 0 2.083-1.688 3.77-3.77 3.77zm6.406-9.58c-.797 0-1.596.33-2.192.925-.597.596-.926 1.396-.926 2.192 0 .797.33 1.596.926 2.192.596.597 1.396.926 2.192.926.797 0 1.596-.33 2.192-.926.596-.596.926-1.395.926-2.192 0-.797-.33-1.596-.926-2.192-.596-.596-1.395-.926-2.192-.926zm0 3.87c-.927 0-1.68-.754-1.68-1.68s.754-1.68 1.68-1.68 1.68.754 1.68 1.68-.754 1.68-1.68 1.68zM20.138 7.13c-.456-.022-.897.025-1.317.136-.419.112-.82.277-1.192.486-.374.21-.716.46-1.026.746-.31.285-.58.61-.812.96-.23.349-.418.726-.56 1.122-.143.397-.243.809-.298 1.22-.055.411-.08.823-.066 1.232.015.41.053.82.113 1.227.06.408.142.812.245 1.209.103.397.233.789.383 1.172.15.383.313.762.494 1.136.18.374.38.74.598 1.096.219.356.456.706.714 1.044.258.338.54.664.834.97.293.306.601.593.927.855.326.263.668.5 1.028.706.361.206.739.385 1.131.535.393.15.798.263 1.213.335.415.073.837.103 1.259.09.421-.013.84-.062 1.252-.146.413-.083.82-.207 1.218-.37.398-.163.787-.361 1.165-.592.378-.231.743-.494 1.089-.785.346-.292.67-.612.972-.957.302-.346.578-.716.828-1.103.25-.387.47-.793.657-1.215.188-.422.345-.858.467-1.305.122-.447.21-.902.262-1.36.053-.458.072-.919.056-1.376-.015-.457-.067-.913-.154-1.363-.088-.451-.213-.896-.373-1.334-.161-.438-.352-.867-.57-1.287-.218-.42-.465-.826-.736-1.216-.27-.391-.564-.764-.877-1.117-.313-.353-.646-.685-.993-1.002-.347-.317-.709-.618-1.087-.894-.378-.276-.768-.532-1.167-.764-.398-.232-.808-.436-1.225-.606-.418-.171-.845-.305-1.276-.398-.43-.093-.867-.145-1.306-.155zm0 3.87c-.927 0-1.68.754-1.68 1.68s.754 1.68 1.68 1.68 1.68-.754 1.68-1.68-.754-1.68-1.68-1.68z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;

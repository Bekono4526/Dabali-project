import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import FooterMenu from '../components/FooterMenu';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Comments from '../components/Comments';
import Header from '../components/Header';

function Home() {
  const cards = [
    {
      imageUrl: 'PROMO-COUPONS-.png',
      headerText: 'Promotion Coupons',
      cardText: 'Discover amazing discounts with our exclusive promo coupons.',
      linkUrl: '/menu',
      linkText: 'Get Coupons'
    },
    {
      imageUrl: 'PROMOTION-1.png',
      headerText: 'Special Promotion',
      cardText: 'Check out our special promotion on a wide range of products.',
      linkUrl: '/menu',
      linkText: 'Shop Now'
    },
    {
      imageUrl: 'menu.png',
      headerText: 'Our Menu',
      cardText: 'Explore our delicious menu filled with a variety of dishes.',
      linkUrl: '/menu',
      linkText: 'View Menu'
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Article 1',
      content: 'This is a brief summary of the first article.',
      imageUrl: 'dabali1.jpg',
    },
    {
      id: 2,
      title: 'Article 2',
      content: 'This is a brief summary of the second article.',
      imageUrl: 'dabali2.jpg',
    },
    {
      id: 3,
      title: 'Article 3',
      content: 'This is a brief summary of the third article.',
      imageUrl: 'dabali4.jpg',
    },
    {
      id: 4,
      title: 'Article 4',
      content: 'This is a brief summary of the third article.',
      imageUrl: 'dabali4.jpg',
    },
  ];

  return (
    <div className='relative flex flex-col min-h-screen overflow-y-auto'>
      <Header className="header-container" />
      <header className="relative z-10">
        <Banner />
      </header>
      <main className='flex-grow relative z-10'>
        <section className="flex flex-col md:flex-row flex-wrap justify-center gap-6 p-6 md:p-8 mt-10 items-center md:items-stretch">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              headerText={card.headerText}
              cardText={card.cardText}
              linkUrl={card.linkUrl}
              linkText={card.linkText}
              className="w-full md:w-1/3"
            />
          ))}
        </section>
        <section className="content-container p-6 md:p-8">
          <h2 className="text-xl font-bold mb-4">Latest Articles</h2>
          <div className="flex flex-row overflow-x-auto gap-4">
            {articles.map((article, index) => (
              <div key={index} className="min-w-[75%] sm:min-w-[300px] md:min-w-[250px] lg:min-w-[300px] p-4 border rounded-lg shadow-lg bg-white flex-shrink-0">
                <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p>{article.content}</p>
                  <Link to={`/article/${article.id}`} className="text-blue-500 hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='mt-4'>
          <Comments />
        </section>
        <section className="bg-white p-8 rounded-lg shadow-md mb-8 mt-8 flex flex-col md:flex-row">
          <img src="path_to_image" alt="Franchise Dabali Xpress" className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-4"/>
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Découvrez nos moments inoubliables</h2>
            <p className="text-lg text-gray-700">
              Plongez dans notre galerie pour découvrir en images l'essence et la passion qui animent Dabali Xpress. Cliquez sur le lien ci-dessous pour explorer notre galerie et vous inspirer de notre vision unique du tourisme culinaire ivoirien.
            </p>
            <Link to="/gallerie" className='hover:text-gray-300 transition-colors duration-300  mt-4'>Visitez notre galerie ici</Link>
          </div>
        </section>
      </main>
      <footer className="relative z-10 mb-20">
        <Footer />
      </footer>
      <div className="relative z-10">
        <FooterMenu />
      </div>
    </div>
  );
}

export default Home;

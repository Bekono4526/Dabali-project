import React from 'react';
import Banner from '../components/Banner';
import FooterMenu from '../components/FooterMenu';
import Card from '../components/Card'; // Adjust the import path if needed
import Footer from '../components/Footer'; // Adjust the import path if needed
import Comments from '../components/Comments'; // Adjust the import path if needed
import { Link } from 'react-router-dom';

function Home() {
  const cards = [
    {
      imageUrl: 'PROMO-COUPONS-.png',
      headerText: 'Promotion Coupons',
      cardText: 'Discover amazing discounts with our exclusive promo coupons.',
      buttonText: 'Get Coupons'
    },
    {
      imageUrl: 'PROMOTION-1.png',
      headerText: 'Special Promotion',
      cardText: 'Check out our special promotion on a wide range of products.',
      buttonText: 'Shop Now'
    },
    {
      imageUrl: 'menu.png',
      headerText: 'Our Menu',
      cardText: 'Explore our delicious menu filled with a variety of dishes.',
      buttonText: 'View Menu'
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
  ];

  return (
    <div className='relative flex flex-col min-h-screen overflow-y-auto'>
      <header className="relative z-10">
        <Banner />
      </header>
      <main className='flex-grow relative z-10'>
        <section className="flex justify-center gap-6 p-6 md:p-8 mt-10">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              headerText={card.headerText}
              cardText={card.cardText}
              buttonText={card.buttonText}
            />
          ))}
        </section>
        <section className="content-container p-6 md:p-8">
          <h2 className="text-xl font-bold mb-4">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-lg bg-white">
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
        <section className='flex mt-4'>
          <Comments />
        </section>
        <section className="flex flex-col md:flex-row items-stretch justify-between p-10 bg-white shadow-md">
                <div className="md:w-1/2 flex-shrink-0">
                    <div className="h-full bg-gray-200 flex items-center justify-center">
                        <img src="path/to/your/service-image.jpg" alt="Traiteur Service" className="w-full h-auto rounded-md object-cover" />
                    </div>
                </div>
                <div className="md:w-1/2 bg-gray-100 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">DABALI XPRESS TRAITEUR</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Reception Anniversaire Baptême  Mariage  Séminaire  After-work
                    </p>
                    <p className="text-lg text-gray-700">
                        Contactez-nous au <span className="font-bold">2522018760</span>
                    </p>
                </div>
            </section>
      </main>
      <footer className="relative z-10">
        <Footer />
      </footer>
      <div className="relative z-10">
        <FooterMenu />
      </div>
    </div>
  );
}

export default Home;

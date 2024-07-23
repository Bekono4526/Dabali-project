import React from 'react';
import Banner from '../components/Banner';
import FooterMenu from '../components/FooterMenu';
import Card from '../components/Card'; // Adjust the import path if needed
import Footer from '../components/Footer'; // Adjust the import path if needed
import Comments from '../components/Comments'; // Adjust the import path if needed
import { Link } from 'react-router-dom';

function Home() {
  const images = [
    'url-to-your-first-image.jpg',
    'url-to-your-second-image.jpg',
    'url-to-your-third-image.jpg',
  ];

  const articles = [
    {
      id: 1,
      title: 'Article 1',
      content: 'This is a brief summary of the first article.',
      imageUrl: 'url-to-article-image1.jpg',
    },
    {
      id: 2,
      title: 'Article 2',
      content: 'This is a brief summary of the second article.',
      imageUrl: 'url-to-article-image2.jpg',
    },
    {
      id: 3,
      title: 'Article 3',
      content: 'This is a brief summary of the third article.',
      imageUrl: 'url-to-article-image3.jpg',
    },
  ];

  return (
    <div className='relative flex flex-col min-h-screen overflow-y-auto'>
      <header className="relative z-10">
        <Banner />
      </header>
      <main className='flex-grow relative z-10'>
        <section className="flex justify-center gap-4 p-6 md:p-8">
          {images.map((imageUrl, index) => (
            <Card key={index} imageUrl={imageUrl} />
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
        <section className='flex'>
          <Comments />
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

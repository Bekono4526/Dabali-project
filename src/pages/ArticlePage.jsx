import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../articles';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const otherArticles = articles.filter((article) => article.id !== parseInt(id));

  return (
    <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 mt-20">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
      <aside className="w-full lg:w-1/3">
        <h3 className="text-xl font-bold mb-4">Other Articles</h3>
        <ul className="space-y-4">
          {otherArticles.map((otherArticle) => (
            <li key={otherArticle.id}>
              <Link to={`/article/${otherArticle.id}`} className="text-blue-500 hover:underline">
                {otherArticle.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ArticlePage;

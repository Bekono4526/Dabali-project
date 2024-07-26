import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ imageUrl, headerText, cardText, linkUrl, linkText }) => {
  return (
    <div
      className="card relative w-full h-[550px] rounded-lg p-10 flex flex-col justify-end gap-4 text-white transition-transform duration-500 ease-out"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="details z-10 flex flex-col gap-4 transform translate-y-full transition-transform duration-500 ease-out">
        <div className="cardHeader relative uppercase font-bold transition-all duration-500 ease-out">
          {headerText}
        </div>
        <div className="cardText">
          {cardText}
        </div>
        <Link to={linkUrl} className="button bg-aqua text-black py-1 px-2.5 rounded-sm">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Card;


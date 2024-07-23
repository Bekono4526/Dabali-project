import React from 'react';


const Card = ({ imageUrl }) => {
  return (
    <div
      className="card relative max-w-xs h-[550px] rounded-lg p-10 flex flex-col justify-end gap-4 text-white transition-transform duration-500 ease-out"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="details z-10 flex flex-col gap-4 transform translate-y-full transition-transform duration-500 ease-out">
        <div className=" cardHeader relative uppercase font-bold transition-all duration-500 ease-out">
          CSS Hover Animation
        </div>
        <div className="cardText">
          Welcome to this card where I have made use of the "Hover" effect to add
          some really cool interactions to it. Enjoy
        </div>
        <div className="button bg-aqua text-black py-1 px-2.5 rounded-sm">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Card;
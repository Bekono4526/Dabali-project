import React from 'react';

const CommentCard = () => {
  return (
    <div className="bg-gray-800 shadow-md w-60 h-auto p-4 rounded-md mb-6">
      <div className="flex items-center mb-4">
        <div className="Usericon bg-gray-700 w-12 h-12 rounded-full"></div>
        <div className="ml-4">
          <p className="UserName text-white text-sm font-bold">Nom d'utilisateur</p>
          <p className="Id text-gray-400 text-xs">@identifiant</p>
        </div>
      </div>
      <div className="Description bg-gray-700 p-3 rounded-md text-white text-sm">
        Ceci est un commentaire d'exemple. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    
    </div>
  );
}

export default CommentCard;

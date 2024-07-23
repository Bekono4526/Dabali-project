import React from 'react';

const CommentCard = ({ imageUrl, userName, userId, comment }) => {
  return (
    <div className="bg-gray-800 shadow-md w-60 h-auto p-4 rounded-md mb-6">
      <div className="flex items-center mb-4">
        <img
          src={imageUrl}
          alt="User Avatar"
          className="Usericon w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <p className="UserName text-white text-sm font-bold">{userName}</p>
          <p className="Id text-gray-400 text-xs">@{userId}</p>
        </div>
      </div>
      <div className="Description bg-gray-700 p-3 rounded-md text-white text-sm">
        {comment}
      </div>
    </div>
  );
}

export default CommentCard;
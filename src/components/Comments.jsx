import React from 'react';
import CommentCard from './CommentCard'; // Assurez-vous que le chemin est correct

function Comments() {
  const comments = [
    {
      imageUrl: './cute.webp',
      userName: 'Utilisateur 1',
      userId: 'user1',
      comment: 'Ceci est un commentaire de l\'utilisateur 1. Lorem ipsum dolor sit amet.'
    },
    {
      imageUrl: 'url-to-user2-image.jpg',
      userName: 'Utilisateur 2',
      userId: 'user2',
      comment: 'Ceci est un commentaire de l\'utilisateur 2. Consectetur adipiscing elit.'
    },
    {
      imageUrl: 'url-to-user3-image.jpg',
      userName: 'Utilisateur 3',
      userId: 'user3',
      comment: 'Ceci est un commentaire de l\'utilisateur 3. Proin euismod justo nec nisi.'
    },
  ];

  return (
    <div className=" flex flex-wrap items-center gap-8 px-6 ml-40 ">
      {comments.map((comment, index) => (
        <CommentCard
          key={index}
          imageUrl={comment.imageUrl}
          userName={comment.userName}
          userId={comment.userId}
          comment={comment.comment}
        />
      ))}
    </div>
  );
}

export default Comments;

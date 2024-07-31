import React, { useRef, useEffect } from 'react';
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
    // Ajoutez plus de commentaires si nécessaire
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 2;
    const scrollInterval = 50;

    const duplicateComments = () => {
      scrollContainer.innerHTML += scrollContainer.innerHTML;
    };

    const resetScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    duplicateComments();

    const scroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;
      resetScroll();
    };

    const interval = setInterval(scroll, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scrollContainerRef} className="flex flex-row overflow-x-auto gap-4 p-6 whitespace-nowrap">
      {comments.concat(comments).map((comment, index) => (
        <CommentCard
          key={index}
          imageUrl={comment.imageUrl}
          userName={comment.userName}
          userId={comment.userId}
          comment={comment.comment}
          className="flex-shrink-0"
        />
      ))}
    </div>
  );
}

export default Comments;

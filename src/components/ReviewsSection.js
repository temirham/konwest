// ReviewsSection.js
import React from 'react';
import './ReviewsSection.css'; // Создайте новый файл ReviewsSection.css

const reviewsData = [
  {
    id: 1,
    author: 'Иван Иванов',
    text: 'Отличная компания, профессиональный подход и высокий уровень сервиса!',
  },
  {
    id: 2,
    author: 'Марина Петрова',
    text: 'Я довольна результатами сотрудничества, рекомендую!',
  },
  // Добавьте свои отзывы
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="consulting-section reviews-section">
      <h2>Отзывы клиентов</h2>
      <div className="reviews-container">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <p className="review-text">{review.text}</p>
            <p className="review-author">- {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;

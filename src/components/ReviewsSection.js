// ReviewsSection.js
import React from 'react';
import './ReviewsSection.css'; // Создайте новый файл ReviewsSection.css

const reviewsData = [
  {
    id: 1,
    author: 'ИП Смирнов',
    text: 'Отличная компания, профессиональный подход и высокий уровень сервиса!',
  },
  {
    id: 2,
    author: 'Марина Петрова',
    text: 'Я довольна результатами сотрудничества, рекомендую!',
  },
  {
    id: 3,
    author: 'Павел Арестархович',
    text: 'Посоветовал данную компанию мой коллега по работе, все устраивает, поддержка отличная, частые интересные обновления биржи, новые листинги монет, и самое нужное для меня П2П есть',
  },
  {
    id: 4,
    author: 'Елена Плугова',
    text: 'Хочется отметить высокую экспертность команды. Всегда оценка проводится максимально оперативно и качественно. Благодаря вам мы эффективно развиваем наш бизнес',
  },
  {
    id: 5,
    author: 'Дмитрий Соколов',
    text: 'С "КОНКВЕСТ" работать легко и приятно. Они не только предоставляют высококачественные услуги финансового консалтинга, но и действительно заботятся о своих клиентах. Один из лучших в своей области!',
  },
  {
    id: 6,
    author: 'Анна Широкова',
    text: 'Очень довольна сотрудничеством. Профессиональная команда, оперативные решения и индивидуальный подход к каждому клиенту. Рекомендую!',
  },
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

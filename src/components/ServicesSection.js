// ServicesSection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMoneyBillWave, faLayerGroup, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './ServicesSection.css'; // Создайте файл стилей ServicesSection.css

const ServicesSection = () => {
  return (
    <section id="services" className="consulting-section">
      <h2>Наши услуги</h2>
      <div className="services-container">
        <div className="service-card">
          <FontAwesomeIcon icon={faMoneyBillWave} className="card-icon" />
          <h3>Финансовый анализ</h3>
          <p className="card-content">Проведение финансового анализа вашего бизнеса.</p>
        </div>

        <div className="service-card">
          <FontAwesomeIcon icon={faLayerGroup} className="card-icon" />
          <h3>Стратегическое планирование</h3>
          <p className="card-content">Разработка стратегии для достижения ваших бизнес-целей.</p>
        </div>

        <div className="service-card">
          <FontAwesomeIcon icon={faChartLine} className="card-icon" />
          <h3>Налоговый консалтинг</h3>
          <p className="card-content">Помощь в вопросах налогообложения и оптимизации налогов.</p>
        </div>

        <div className="service-card">
          <FontAwesomeIcon icon={faBalanceScale} className="card-icon" />
          <h3>Управление рисками</h3>
          <p className="card-content">Анализ и управление рисками в вашем бизнесе.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

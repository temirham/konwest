// AboutSection.js
import React from 'react';
import './AboutSection.css';
import { Icon } from '@iconify/react';
import bearHeadIcon from '@iconify/icons-game-icons/bear-head';
import chargingBullIcon from '@iconify/icons-game-icons/charging-bull';

const AboutSection = () => {
  return (
    <section id="about" className="consulting-section">
      <div className="about-container">
        {/* <div className="icon-bear">
          <Icon icon={bearHeadIcon} />
        </div> */}
        <div className="about-content">
          <h2>О нас</h2>
          <p>
            Мы - команда опытных финансовых консультантов, специализирующихся в области стратегического
            планирования, финансового анализа и налогового консалтинга. Наша миссия - помогать нашим
            клиентам принимать обоснованные финансовые решения, достигать финансовой стабильности и роста.
          </p>
          <p>
            Наша компания основана на принципах профессионализма, интегритета и ответственности. Мы стремимся
            предоставлять высококачественные услуги, учитывая уникальные потребности каждого клиента.
          </p>
        </div>
        {/* <div className="icon-bull" >
          <Icon icon={chargingBullIcon} />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;

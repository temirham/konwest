import React from 'react';
import './CompaniesSection.css'; 

const companiesData = [
  {
    id: 1,
    name: 'TradingView',
    description: 'Ваш надежный источник для финансовых данных и анализа рынков.',
    logo: 'https://static.tradingview.com/static/images/logo-preview.png', 
  },
  {
    id: 2,
    name: 'Freedom Finance',
    description: 'Один из ведущих брокеров с широким спектром финансовых услуг.',
    logo: 'https://jamkey-files.s3.eu-central-1.amazonaws.com/prod/images/reviews/freedom-finance/image-1637343220760.jpeg', 
  },
  {
    id: 3,
    name: 'ForkLog',
    description: 'Онлайн-издание о криптовалютах и технологии блокчейн.',
    logo: 'https://forklog.com/wp-content/themes/forklogv2/img/flimg_m.png',
  },
  // Добавьте свои компании
];

const CompaniesSection = () => {
  return (
    <section id="companies" className="consulting-section companies-section">
      <h2>Компании-партнеры</h2>
      <div className="companies-container">
        {companiesData.map((company) => (
          <div key={company.id} className="company-card">
            <img src={company.logo} alt={`${company.name} Logo`} className="company-logo" />
            <h3 className="company-name">{company.name}</h3>
            <p className="company-description">{company.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;

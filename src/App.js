// App.js
import React, { useState } from 'react';
import './App.css';
import TradingViewWidget from './components/TradingViewWidget';
import './ConsultingStyle.css'; 
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import CompaniesSection from './components/CompaniesSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('services');
  const handleNavClick = (section) => {
    setCurrentSection(section);
  };
  return (
    <div className="consulting-app">
      <header className="consulting-header">
      </header>
      <nav className="consulting-nav">
        <a href="#about" onClick={() => handleNavClick('about')}>О нас</a>
        <a href="#stock" onClick={() => handleNavClick('stock')}>Текущий курс акций и валют</a>
        <a href="#services" onClick={() => handleNavClick('services')}>Наши услуги</a>
        <a href="#companies" onClick={() => handleNavClick('companies')}>Компании-партнеры</a>
        <a href="#reviews" onClick={() => handleNavClick('reviews')}>Что о нас говорят</a>
      </nav>
      {currentSection === 'about' && <AboutSection />}
      {currentSection === 'stock' && <div style={{marginTop: '10vh', alignContent: 'center', height: '50vh', marginLeft: '1.5vh', marginRight: '1.5vh'}}><TradingViewWidget/></div>}
      {currentSection === 'services' && <ServicesSection />}
      {currentSection === 'companies' && <CompaniesSection />} {/* Добавлен раздел компаний */}
      {currentSection === 'reviews' && <ReviewsSection />}
      <footer className="consulting-footer">
        <ContactSection />
        <p className="footer-column">&copy; 2023 Общество с ограниченной ответственностью «КОНКВЕСТ». Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;

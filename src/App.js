import React, { useState } from 'react';
import './App.css';
import TradingViewWidget from './components/TradingViewWidget';
import './ConsultingStyle.css'; 
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import CompaniesSection from './components/CompaniesSection';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const App = () => {
  const [currentSection, setCurrentSection] = useState('services');
  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="consulting-app">
      <header className="consulting-header">
      </header>
      <Navbar bg="light" expand="lg" className="consulting-navbar consulting-nav">
      <Container fluid>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
      >
      </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="consulting-nav">
            <Nav.Link className="consulting-nav a" href="#about" onClick={() => handleNavClick('about')}>О нас</Nav.Link>
            <Nav.Link className="consulting-nav a" href="#stock" onClick={() => handleNavClick('stock')}>Текущий курс акций и валют</Nav.Link>
            <Nav.Link className="consulting-nav a" href="#services" onClick={() => handleNavClick('services')}>Наши услуги</Nav.Link>
            <Nav.Link className="consulting-nav a" href="#companies" onClick={() => handleNavClick('companies')}>Компании-партнеры</Nav.Link>
            <Nav.Link className="consulting-nav a" href="#reviews" onClick={() => handleNavClick('reviews')}>Что о нас говорят</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      {currentSection === 'about' && <AboutSection />}
      {currentSection === 'stock' && <div style={{ marginTop: '10vh', alignContent: 'center', height: '50vh', marginLeft: '1.5vh', marginRight: '1.5vh' }}><TradingViewWidget /></div>}
      {currentSection === 'services' && <ServicesSection />}
      {currentSection === 'companies' && <CompaniesSection />}
      {currentSection === 'reviews' && <ReviewsSection />}

      <footer className="consulting-footer">
        <ContactSection />
        <p className="footer-column">&copy; 2023 Общество с ограниченной ответственностью «КОНКВЕСТ». Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;

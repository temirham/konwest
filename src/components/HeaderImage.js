// HeaderImage.jsx
import React from 'react';
import headerImage from '../img/business4-qa-pic1.jpg'; // Замените путем к вашему изображению

const HeaderImage = () => {
  return <img src={headerImage} alt="Header" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />;
};

export default HeaderImage;

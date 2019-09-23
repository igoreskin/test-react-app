import React from 'react';
import GrayHeader from './GrayHeader';
import MainContent from './MainContent';
import Footer from './Footer';

const MainContainer = () => {
  return (
    <div className="main-container">

      <GrayHeader /> 

      <div className="triangle"></div>

      <div className="bar">
        <div className="orange-bar"></div>
      </div>

      <MainContent />

      <Footer />
      
    </div>
  )
}

export default MainContainer;

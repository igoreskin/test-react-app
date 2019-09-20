import React from 'react';
import GrayHeader from './GrayHeader';
import MainContent from './MainContent';

const MainContainer = () => {
  return (
    <div className="main-container">
      <GrayHeader /> 
      <div className="orange-bar"></div>
      <MainContent />
      
    </div>
  )
}

export default MainContainer;

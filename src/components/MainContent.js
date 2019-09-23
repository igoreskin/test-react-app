import React from 'react';
import Price from './Price';
import GiveNow from './GiveNow';

const MainContent = () => {
  return (
    <div className="main-content">

      <p className="header-text"><span className="orange-text">Only 3 days left</span>&nbsp;
      <span className="light-gray">to fund this project.</span></p>

      <p className="light-gray main-text">
        Join the<span className="bold"> 42 </span>other donors who have already supported 
        this project. Every dollar helps.
      </p>

      <div className="row">
        <Price />
        <GiveNow />
      </div>

      <p className="why">Why give $50?</p>
      
      
    </div>
  )
}

export default MainContent;

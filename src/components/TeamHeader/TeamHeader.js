import React from 'react';
import "./TeamHeader.css";

const TeamHeader = ({logo, stadium}) => {
   return (
      <div className='header-bg' style={{height: "250px", backgroundImage: `linear-gradient(#000000bf, #000000c9),url(${stadium})`}}>
         <img className='logo' src={logo} alt="" />
      </div>
   );
};

export default TeamHeader;
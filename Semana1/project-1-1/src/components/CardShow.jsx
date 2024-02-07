/* eslint-disable react/prop-types */
import React from 'react';

const CardShow = ({ showImg, name, bgColor }) => {
  
  const showStyles = {
    backgroundColor: bgColor,
  }
  
  return (
    <div style={showStyles} className='cardShow'>
      <img
        src = {showImg}
        alt="perro"
      />
      <h2>{name}</h2>
    </div>
  );
};

export default CardShow;

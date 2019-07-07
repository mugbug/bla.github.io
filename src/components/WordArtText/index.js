import React from 'react';
import './wordart.css';

const WordArtText = ({ text, type, fontSize }) => (
  <div class={`wordart ${type}`} style={{fontSize: fontSize || '4em'}}>
    <span class='text'>{text}</span>
  </div>
);

export default WordArtText;
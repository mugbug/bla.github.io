import React from 'react';
import './wordart.css';

const WordArtText = ({ text, type, fontSize, marginBottom }) => (
  <div class={`wordart ${type}`} style={{fontSize: fontSize || '4em', marginBottom: marginBottom || '0em'}}>
    <span class='text'>{text}</span>
  </div>
);

export default WordArtText;
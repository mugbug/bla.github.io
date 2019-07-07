import React from 'react';
import './wordart.css';

// *Types*
// - rainbow
// - blues
// - superhero
// - radial
// - purple

// (https://www.designpieces.com/2017/03/wordart-css3-text-effects/)

const WordArtText = ({ text, type }) => {
    return (
        <div class={`wordart ${type}`}><span class='text'>{text}</span></div>
    );
}

export default WordArtText;
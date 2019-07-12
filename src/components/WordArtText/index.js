import React from 'react';
import styled from 'styled-components';
import './wordart.css';

const ResponsiveWordArtText = styled.div`

  font-size: ${props => props.fontSize || '4em'};
  margin-bottom: ${props => props.marginBottom || '0em'};

  @media (max-width: 800px) {
    font-size: ${props => props.fontSize / 2 || '2em'};
  }
`;

const WordArtText = ({ text, type, fontSize, marginBottom }) => (
  <ResponsiveWordArtText className={`wordart ${type}`} fontSize={fontSize} marginBottom={marginBottom}>
    <span class='text'>{text}</span>
  </ResponsiveWordArtText>
);

export default WordArtText;
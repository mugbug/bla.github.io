import React from 'react';
import styled from 'styled-components';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MyImage = styled.img`
  width: 80%;
  height: auto;
`;

const Gallery = () => {
  const myImage1 = require('../images/bdz 1.jpg');
  const myImage2 = require('../images/bdz 2.jpg');
  const myImage3 = require('../images/bdz 3.jpg');
  const myImage4 = require('../images/bdz 4.jpg');
  const myImage5 = require('../images/bdz 5.jpg');

  const stop = (e) => {
    e.preventDefault();
  };

  return (
    <AliceCarousel
      mouseDragEnabled 
      dotsDisabled={false}
      responsive={{
        0: {
            items: 1
        },
        560: {
          items: 2
        },
        1024: {
            items: 3
        }
      }}
    >
      <ImageContainer>
        <MyImage src={myImage1} onMouseDown={stop}/>
      </ImageContainer>
      <ImageContainer>
        <MyImage src={myImage2} onMouseDown={stop}/>
      </ImageContainer>
      <ImageContainer>
        <MyImage src={myImage3} onMouseDown={stop}/>
      </ImageContainer>
      <ImageContainer>
        <MyImage src={myImage4} onMouseDown={stop}/>
      </ImageContainer>
      <ImageContainer>
        <MyImage src={myImage5} onMouseDown={stop}/>
      </ImageContainer>
    </AliceCarousel>
  );
}

export default Gallery;
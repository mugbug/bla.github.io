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
  max-width: 100%;
  width: auto;
  height: 300px;
`;

const Gallery = ({ images }) => {
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
          items: 3
        },
        1024: {
          items: 4
        }
      }}
    >
      {images.map(image => (
        <ImageContainer>
          <MyImage src={image} onMouseDown={stop} />
        </ImageContainer>
      ))}
    </AliceCarousel>
  );
}

export default Gallery;
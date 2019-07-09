import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: center;
  padding 0 10%;
  flex-wrap: wrap;
`;

/* Create four equal columns that sits next to each other */
const Column = styled.div`
  flex: ${props => (100 / props.columnCount) - 1}%;
  max-width: ${props => (100 / props.columnCount) - 1}%;
  padding: 0 4px;

  & img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  @media (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }

  @media (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const GalleryGrid = ({ images }) => {

  return (
    <Row> {
      images.map((columnImages) => (
        <Column columnCount={images.length}> {
          columnImages.map((image) => (
            image[0] != '/'
              ? <p style={{ padding: '0 10%' }}>
                  {image}
                </p>
              : <img src={image} style={{ width: "100%" }} />
          ))
        }
        </Column>
      ))
    }
    </Row>
  )
}

export default GalleryGrid;
import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`;

/* Create four equal columns that sits next to each other */
const Column = styled.div`
  flex: 24%;
  max-width: 24%;
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

const GalleryGrid = () => {

  return (
    <Row>
      <Column>
        <img src={require('../images/marina plena 1.jpg')} style={{width:"100%"}} />
        <img src={require('../images/marina plena 5.gif')} style={{width:"100%"}} />
      </Column>

      <Column>
        <img src={require('../images/marina plena 2.jpg')} style={{width:"100%"}} />
        <img src={require('../images/marina plena 6.jpg')} style={{width:"100%"}} />
      </Column>

      <Column>
        <img src={require('../images/marina plena 8.jpg')} style={{width:"100%"}} />
        <img src={require('../images/marina plena 3.jpg')} style={{width:"100%"}} />
      </Column>

      <Column>
        <img src={require('../images/marina plena 4.jpg')} style={{width:"100%"}} />
        <img src={require('../images/marina plena 7.jpg')} style={{width:"100%"}} />
      </Column>
    </Row>
  )
}

export default GalleryGrid;
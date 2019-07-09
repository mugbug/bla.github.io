import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Marina = () => (
  <Page
    text='Marina plena'
    type={WordArtThemes.RAINBOW}
    images={[
      require('../../images/marina plena 1.jpg'),
      require('../../images/marina plena 2.jpg'),
      require('../../images/marina plena 3.jpg'),
      require('../../images/marina plena 4.jpg'),
      require('../../images/marina plena 5.gif'),
      require('../../images/marina plena 6.jpg'),
      require('../../images/marina plena 7.jpg'),
      require('../../images/marina plena 8.jpg'),
    ]}/>
);

export default Marina;
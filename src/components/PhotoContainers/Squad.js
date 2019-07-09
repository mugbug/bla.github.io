import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Squad = () => (
  <Page
    text='Squad'
    type={WordArtThemes.SUPERHERO}
    images={[
      require('../../images/squad 1.jpg'),
      require('../../images/squad 2.jpg'),
      require('../../images/squad 3.jpg'),
      require('../../images/squad 4.gif'),
      require('../../images/squad 5.jpg'),
      require('../../images/squad 6.jpg'),
      require('../../images/squad 7.jpg'),
      require('../../images/squad 8.jpg'),
    ]}/>
);

export default Squad;
import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Tabuas = () => (
  <Page
    text='Tabuas'
    type={WordArtThemes.SUPERHERO}
    images={[
      require('../../images/tabuas 1.jpg'),
      require('../../images/tabuas 2.jpg'),
      require('../../images/tabuas 3.jpg'),
    ]}/>
);

export default Tabuas;
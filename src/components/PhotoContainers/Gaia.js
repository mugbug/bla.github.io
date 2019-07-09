import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Gaia = () => (
  <Page
    text='Gaia'
    type={WordArtThemes.SUPERHERO}
    images={[
      require('../../images/gaia 1.jpg'),
      require('../../images/gaia 2.jpg'),
      require('../../images/gaia 3.jpg'),
      require('../../images/gaia 4.jpg'),
      require('../../images/gaia 5.jpg'),
      require('../../images/gaia 6.jpg'),
      require('../../images/gaia 7.jpg'),
    ]}/>
);

export default Gaia;
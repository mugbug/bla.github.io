import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Food = () => (
  <Page
    text='Comida'
    type={WordArtThemes.SUPERHERO}
    images={[
      require('../../images/comida 1.jpg'),
      require('../../images/comida 2.jpg'),
      require('../../images/comida 3.jpg'),
      require('../../images/comida 4.jpg'),
    ]}/>
);

export default Food;
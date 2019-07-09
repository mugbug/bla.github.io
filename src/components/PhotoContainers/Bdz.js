import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Bdz = () => (
  <Page
    text='BDZ'
    type={WordArtThemes.RADIAL}
    images={[
      require('../../images/bdz 1.jpg'),
      require('../../images/bdz 2.jpg'),
      require('../../images/bdz 3.jpg'),
      require('../../images/bdz 4.jpg'),
      require('../../images/bdz 5.jpg')
    ]}/>
);

export default Bdz;
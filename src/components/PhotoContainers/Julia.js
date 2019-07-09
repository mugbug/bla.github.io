import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Julia = () => (
  <Page
    text='Me and u'
    type={WordArtThemes.PURPLE}
    images={[
      require('../../images/me and u 1.gif'),
      require('../../images/me and u 2.gif'),
      require('../../images/me and u 3.jpg'),
      require('../../images/me and u 4.jpg'),
      require('../../images/me and u 5.jpg'),
      require('../../images/me and u 6.jpg'),
    ]}/>
);

export default Julia;
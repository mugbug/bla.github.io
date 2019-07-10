import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Marina = () => (
  <Page
    text='Oi Marina,'
    type={WordArtThemes.BLUES}
    message={`
      Um belo dia, assistindo HIMYM, percebemos que quando acontece uma coisa importante na nossa vida, a gente faz um site pra mostrar pras pessoas. Aqui concentramos todo o nosso carinho para que esteja sempre acessível quando você sentir saudade.
    `}
    images = {[
      [
        require('../../images/bianca 8.jpg'),
        require('../../images/marina plena 5.gif'),
      ],
      [
        require('../../images/gaia 1.jpg'),
        require('../../images/squad 3.jpg'),
      ],
      [
        require('../../images/tabuas 2.jpg'),
        require('../../images/jack 1.jpg'),
      ],
      [
        require('../../images/marina plena 8.jpg'),
        require('../../images/me and u 3.jpg'),
      ],
    ]}/>
);

export default Marina;
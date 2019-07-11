import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const MissU = () => (
  <Page
    text='Vamos sentir saudades, será?'
    type={WordArtThemes.PURPLE}
    audio={require('../../songs/clearly.mp3')}
    message={`
      É claro que vamos sentir saudades. Vamos lembrar de todas as coisas que vivemos por aqui e vamos sentir muita saudade. Fala sério, foram os melhores rolês possíveis, sem condição nenhuma.
    `}
    images = {[
      [
        require('../../images/bdz.gif'),
        require('../../images/bianca 3.jpg'),
        require('../../images/bianca 9.jpg'),
      ],
      [
        require('../../images/bianca 1.jpg'),
        require('../../images/coffee.jpg'),
        require('../../images/bdz 5.jpg'),
      ],
      [
        require('../../images/squad 2.jpg'),
        require('../../images/gaia 7.jpg'),
        require('../../images/me and u 2.gif'),
      ]
    ]}/>
);

export default MissU;
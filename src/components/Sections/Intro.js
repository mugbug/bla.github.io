import React from 'react';
import Page from '../Page';
import WordArtThemes from '../WordArtText/Themes';

const Marina = () => (
  <Page
    text='Oi Marina,'
    type={WordArtThemes.BLUES}
    message={`
      Um belo dia, assistindo HIMYM, percebemos que eles fazem site pra tudo (vide https://how-i-met-your-mother.fandom.com/wiki/Tie-in_sites). Então pensamos: porque não fazemos um site pra falar como a gente ama a Marina e concentrar todo o nosso carinho para que esteja sempre acessível para quando ela sentir saudade? So here it is! And it's LEGEND- wait for it...
    `}
    audio={require('../../songs/clearly.mp3')}
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
    ]}
    animateIn='bounceInLeft'
    animateOut='bounceOutRight'/>
);

export default Marina;
import React from 'react';
import { Container } from '../App';
import Gallery from './Gallery';
import Player from './Player';

import WordArtText from './WordArtText';
import WordArtThemes from './WordArtText/Themes';

const Page = ({text, type, images}) => (
  <Container>
    <Player />
    <WordArtText text={text} type={type} />
    <Gallery images={images} />
  </Container>
);

export default Page;
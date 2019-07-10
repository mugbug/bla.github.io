import React from 'react';
import { Container } from '../App';
import GalleryGrid from './GalleryGrid';
import Player from './Player';

import WordArtText from './WordArtText';

const Page = ({ text, message, type, images }) => (
  <Container style={{height: 'auto', margin: '4em 0 7em 0'}}>
    <Player />
    <WordArtText text={text} type={type} />
    <p style={{padding: '0 calc(10% + 9px)'}}>
      {message}
    </p>
    <GalleryGrid images={images} />
  </Container>
);

export default Page;
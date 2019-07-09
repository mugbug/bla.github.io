import React from 'react';
import { Container } from '../App';
import GalleryGrid from './GalleryGrid';
import Player from './Player';

import WordArtText from './WordArtText';

const Page = ({text, message, ps, type, images}) => (
  <Container style={{height: 'auto', margin: '4em 0'}}>
    <Player />
    <WordArtText text={text} type={type} />
    <p style={{padding: '0 10%'}}>
      {message}
    </p>
    <GalleryGrid images={images} />
    <p style={{padding: '0 10%'}}>
      {ps}
    </p>
  </Container>
);

export default Page;
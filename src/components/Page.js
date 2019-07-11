import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { Container } from '../App';
import { DoubleBounceInLeft } from './Animation';
import GalleryGrid from './GalleryGrid';
import Player from './Player';

import WordArtText from './WordArtText';

const Page = ({ text, message, type, images, animateIn, animateOut }) => (
  <Container style={{height: 'auto', margin: '4em 0 7em 0'}}>
    <Player />
    <ScrollAnimation animateIn={animateIn} animateOut={animateOut}>
      <WordArtText text={text} type={type} />
    </ScrollAnimation>
    <p style={{padding: '0 calc(10% + 9px)'}}>
      {message}
    </p>
    <GalleryGrid images={images} />
  </Container>
);

export default Page;
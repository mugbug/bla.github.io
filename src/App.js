import React from 'react';
import styled from 'styled-components';

import WordArtText from './components/WordArtText';
import WordArtThemes from './components/WordArtText/Themes';
import Intro from './components/Sections/Intro';
import Footer from './components/Footer';
import Player from './components/Player';
import SeeYa from './components/Sections/SeeYa';
import MissU from './components/Sections/MissU';
import ItsOk from './components/Sections/ItsOk';
import { RotateIn, BounceInRight } from './components/Animation';

const bg = require('./images/header-bg.jpg');

const Container = styled.div`
  height: ${window.innerHeight}px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const TitleContainerImage = styled(ContainerImage)`
  background-image: url(${bg});
  opacity: 0.6;
`

function App() {
  return (
    <>
      <Container>
        <TitleContainerImage />
        <Player audio={require('./songs/fromUsToYou.mpeg')} />
        <RotateIn duration={2}>
          <WordArtText text='We love you Marina!' type={WordArtThemes.RAINBOW} fontSize='6em' />
        </RotateIn>
        <div style={{ marginTop: '9em' }} />
        <div style={{ padding: '0 8%' }}>
        <BounceInRight duration={2} >
          <WordArtText
              text='Este site é destinado a guardar a lembrança dos ótimos momentos que vivemos juntxs no Brasil até a data de 12/07/2019.'
              fontSize='3em'
              type={WordArtThemes.PURPLE}
          />
        </BounceInRight>
        </div>
      </Container>
      <Intro />
      <MissU />
      <ItsOk />
      <SeeYa />
      <Footer />
    </>
  );
}

export default App;
export { Container };

import React from 'react';
import styled from 'styled-components';

import WordArtText from './components/WordArtText';
import WordArtThemes from './components/WordArtText/Themes';
import Gallery from './components/Gallery';

// import './components/SparklyCursor';

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
        <WordArtText text='We love you Marina!' type={WordArtThemes.RAINBOW} fontSize='6em' />
        <div style={{marginTop: '9em'}} />
        <WordArtText
          text='Este site é destinado a guardar a lembrança dos ótimos momentos que vivemos juntxs aqui no Brasil até a corrente data de 12/07/2019.'
          fontSize='3em'
          type={WordArtThemes.PURPLE}
        />
      </Container>
      {/* <Gallery /> */}
    </>
  );
}

export default App;

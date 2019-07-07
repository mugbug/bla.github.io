import React from 'react';

import WordArtText from './components/WordArtText';
import WordArtThemes from './components/WordArtText/Themes';
import Gallery from './components/Gallery';

// import './components/SparklyCursor';

function App() {
  return (
    <>
      <WordArtText text='Oi Pedro!' type={WordArtThemes.PURPLE} />
      <Gallery />
    </>
  );
}

export default App;

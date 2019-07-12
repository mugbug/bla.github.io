import React, { useState } from 'react';
import styled from 'styled-components';
import { Bounce, FadeInWithSwing, SlideInUp } from '../Animation';

import { Container } from '../../App';

import WordArtThemes from '../WordArtText/Themes';
import WordArtText from '../WordArtText';
import Player from '../Player';
import TransparentButton from '../TransparentButton';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 10;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const SquadPhoto = styled.div`
  margin-left: 10%;
  width: 39%;
  height: 800px;

  @media (max-width: 800px) {
    width: 79%;
    height: 400px;
  }
  
  background-image: url('${require('../../images/squad 1.jpg')}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 10%;
  width: 39%;
  justify-content: center;
  align-items: center;

  justify-content: space-around;

  @media (max-width: 800px) {
    margin-left: 10%;
    width: 79%;
  }
`;

/** bug no font-family, só aceita */
const TextWithHint = styled(TransparentButton)`
  font-family: 'Raleway';
  font-family: 'Raleway'; 
  font-size: 1.5em;
  text-align: end;
  cursor: url('https://i.ibb.co/mvnGx8Z/hangloose-cursor.png'), auto;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const SeeYa = () => {
  const [showGif, updateShowGif] = useState(false);

  return <Container style={{height: 'auto', margin: '4em 0'}}>
    <Player audio={require('../../songs/stressedOut.mp3')} />
    <Bounce duration={2} ><WordArtText text='Então... até logo!' type={WordArtThemes.SUPERHERO} marginBottom='1em'/></Bounce>
    <Content>
      <SquadPhoto />
      <Column>
        {showGif
          ? <>
          <SlideInUp duration={2} >
            <TextWithHint title='Duvido você clicar aqui' onClick={() => updateShowGif(true)}>
            A gente está muuuuuito feliz por você ter conseguido essa oportunidade incrível e pela sua coragem de abraçá-la
            mesmo sabendo de todos os desafios que estão por vir. Pode ter certeza que a gente está aqui torcendo por você. We got your back!
            </TextWithHint>
          </SlideInUp>
          <FadeInWithSwing fadeInDuration={2} swingDuration={1} >
            <img src={require('../../images/hangloose.gif')} onClick={() => updateShowGif(false)} alt='Foto exclusiva da Marina na Holanda' />
          </FadeInWithSwing>
          </>
          : <TextWithHint title='Duvido você clicar aqui' onClick={() => updateShowGif(true)}>
          A gente está muuuuuito feliz por você ter conseguido essa oportunidade incrível e pela sua coragem de abraçá-la
            mesmo sabendo de todos os desafios que estão por vir. Pode ter certeza que a gente está aqui torcendo por você. We got your back!
        </TextWithHint>
      }
    </Column>
    </Content>
    <p style={{padding: '0 10%'}}>
      -DARY! <br/><br/>
      ps: estaremos esperando você nos mandar nossa passagem pra ir te visitar heheheh
    </p>
    </Container>
};

export default SeeYa;
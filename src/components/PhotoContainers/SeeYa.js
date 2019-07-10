import React, { useState } from 'react';
import styled from 'styled-components';

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

  & img {
    margin-left: 10%;
    width: 39%
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 10%;
  width: 39%;
  justify-content: center;
  align-items: center;

  justify-content: space-around;
  text-align: end;

  & img {
    margin-left: 0;
  }
`;

const TextWithHint = styled(TransparentButton)`
  font-family: 'Raleway';
  font-size: 1.5em;
  cursor: default;
`;

const SeeYa = () => {
  const [showGif, updateShowGif] = useState(false);

  return <Container style={{height: 'auto', margin: '4em 0'}}>
    <Player />
    <WordArtText text='Até logo' type={WordArtThemes.SUPERHERO} marginBottom='1em'/>
    <Content>
      <img src={require('../../images/squad 1.jpg')} alt='Best squad' />
      <Column>
        <TextWithHint title='Duvido você clicar aqui'>
          É claro que vamos sentir muita saudade de você -- meios tecnológicos estão ai pra ajudar nisso.
          Mas a gente está muuuuuito feliz por você ter essa oportunidade incrível e pela sua coragem de abraçá-la
          mesmo sabendo de todos os desafios que estão por vir. We got your back!
        </TextWithHint>
        {showGif 
          ? <img src={require('../../images/hangloose.gif')} onClick={() => updateShowGif(false)} alt='Foto exclusiva da Marina na Holanda' />
          : (
            <TransparentButton title='Duvido você clicar aqui' style={{ fontSize: '2em' }} onClick={() => updateShowGif(true)}>
              <span role='img' aria-label='Hangloose'>🤙</span>
            </TransparentButton>
          )
        }
      </Column>
    </Content>
    <p style={{padding: '0 10%'}}>
      ps: estaremos esperando você nos mandar nossa passagem pra ir te visitar heheheh
    </p>
    </Container>
};

export default SeeYa;
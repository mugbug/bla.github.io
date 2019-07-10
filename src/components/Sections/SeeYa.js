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
`;

const SquadPhoto = styled.img`
  margin-left: 10%;
  width: 39%;
  height: -webkit-fill-available;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 10%;
  width: 39%;
  justify-content: center;
  align-items: center;

  justify-content: space-around;
`;

/** bug no font-family, só aceita */
const TextWithHint = styled(TransparentButton)`
  font-family: 'Raleway';
  font-family: 'Raleway'; 
  font-size: 1.5em;
  text-align: end;
  cursor: url('https://i.ibb.co/mvnGx8Z/hangloose-cursor.png'), auto;
`;

const SeeYa = () => {
  const [showGif, updateShowGif] = useState(false);

  return <Container style={{height: 'auto', margin: '4em 0'}}>
    <Player />
    <Bounce duration={2} ><WordArtText text='Até logo' type={WordArtThemes.SUPERHERO} marginBottom='1em'/></Bounce>
    <Content>
      <SquadPhoto src={require('../../images/squad 1.jpg')} alt='Best squad' />
      <Column>
        {showGif 
          ? <>
          <SlideInUp duration={2} >
            <TextWithHint title='Duvido você clicar aqui' onClick={() => updateShowGif(true)}>
            É claro que vamos sentir muita saudade de você -- e meios tecnológicos estão ai pra ajudar nisso.
            Mas a gente está muuuuuito feliz por você ter essa oportunidade incrível e pela sua coragem de abraçá-la
            mesmo sabendo de todos os desafios que estão por vir. We got your back!
            </TextWithHint>
          </SlideInUp>
          <FadeInWithSwing fadeInDuration={2} swingDuration={1} >
            <img src={require('../../images/hangloose.gif')} onClick={() => updateShowGif(false)} alt='Foto exclusiva da Marina na Holanda' />
          </FadeInWithSwing>
          </>
          : <TextWithHint title='Duvido você clicar aqui' onClick={() => updateShowGif(true)}>
          É claro que vamos sentir muita saudade de você -- e meios tecnológicos estão ai pra ajudar nisso.
          Mas a gente está muuuuuito feliz por você ter essa oportunidade incrível e pela sua coragem de abraçá-la
          mesmo sabendo de todos os desafios que estão por vir. We got your back!
        </TextWithHint>
      }
    </Column>
    </Content>
    <p style={{padding: '0 10%'}}>
      ps: estaremos esperando você nos mandar nossa passagem pra ir te visitar heheheh
    </p>
    </Container>
};

export default SeeYa;
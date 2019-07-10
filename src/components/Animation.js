import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn, slideInUp, swing, merge } from 'react-animations';

const Bounce = styled.div`
  animation: ${props => props.duration}s ${keyframes`${bounce}`} infinite;
`;

const FadeIn = styled.div`
  animation: ${props => props.duration}s ${keyframes`${fadeIn}`};
`;

const SlideInUp = styled.div`
  animation: ${props => props.duration}s ${keyframes`${slideInUp}`};
`;

const FadeInWithSwing = styled.div`
  animation: ${props => props.fadeInDuration}s ${keyframes`${fadeIn}`},
             ${props => props.swingDuration}s ${keyframes`${swing}`};
`;

export { Bounce, FadeIn, SlideInUp, FadeInWithSwing }
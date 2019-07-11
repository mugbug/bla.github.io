import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn, slideInUp, swing, rotateIn, bounceInRight, merge } from 'react-animations';

const Bounce = styled.div`
  animation: ${props => props.duration}s ${keyframes`${bounce}`} infinite;
`;

const FadeIn = styled.div`
  animation: ${props => props.duration}s ${keyframes`${fadeIn}`};
`;

const SlideInUp = styled.div`
  animation: ${props => props.duration}s ${keyframes`${slideInUp}`};
`;

const RotateIn = styled.div`
  animation: ${props => props.duration}s ${keyframes`${rotateIn}`};
`;

const FadeInWithSwing = styled.div`
  animation: ${props => props.fadeInDuration}s ${keyframes`${fadeIn}`},
             ${props => props.swingDuration}s ${keyframes`${swing}`};
`;

const BounceInRight = styled.div`
  animation: ${props => props.duration}s ${keyframes`${bounceInRight}`};
`;

const DoubleBounceInLeft = styled.div`
  animation: ${props => props.duration}s ${keyframes`${merge(bounceInRight, bounce)}`};
`;

export { Bounce, FadeIn, SlideInUp, FadeInWithSwing, RotateIn, BounceInRight, DoubleBounceInLeft }
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 4em;
  background: #ecf0f1;
  color: #2c3e50;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => (
  <Container>
    Made with 💛by Pedro and Julia.
  </Container>
);

export default Footer;
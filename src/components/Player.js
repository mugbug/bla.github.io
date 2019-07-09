import React from 'react';
import styled from 'styled-components';

const PlayerButton = styled.button`
  border: 0px;
  background-color: transparent;
  outline: none;
`;

const PlayerContainer = styled.div`
  height: ${window.innerHeight}px;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
`;
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    }
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
    this.audio = new Audio(this.url);
  }

  buttonIcon = () => (
    this.state.play
      ? "https://img.icons8.com/clouds/100/000000/pause.png"
      : "https://img.icons8.com/clouds/100/000000/play.png"
  )

  play = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    })
  }

  render() {
    return (
      <PlayerContainer>
        <PlayerButton>
          <img src={this.buttonIcon()} onClick={this.play} />
        </PlayerButton>
      </PlayerContainer>
    );
  }
}

export default Player;
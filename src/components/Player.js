import React from 'react';
import styled from 'styled-components';
import TransparentButton from './TransparentButton';

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
  state = {
    play: false
  }

  componentDidMount() {
    this.audio = new Audio(this.props.audio);

    this.audio.onended = () => {
      this.setState({ play: false });
    };
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

  getImageDesc = () => this.state.play ? 'play' : 'pause';

  render() {
    return (
      <PlayerContainer>
        <TransparentButton>
          <img src={this.buttonIcon()} onClick={this.play} alt={this.getImageDesc()} />
        </TransparentButton>
      </PlayerContainer>
    );
  }
}

export default Player;
import React from 'react';
import styled from 'styled-components';
import PubSub from 'pubsub-js';

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
  };

  componentDidMount() {
    this.audio = new Audio(this.props.audio);

    PubSub.subscribe('songPlayed', this.shouldStopSong);

    this.audio.onended = () => {
      this.setState({ play: false });
    };
  }

  componentWillUnmount() {
    PubSub.unsubscribe('songPlayed');
  }

  shouldStopSong = (e, songPlayed) => {
    songPlayed !== this.props.audio && this.stopSong();
  }
  
  asd = () => {
    if (this.state.play) {
      this.stopSong();
    } else {
      this.playSong();
    }
  };
  
  playSong = () => {
    this.setState({ play: true });
    this.audio.play();
    PubSub.publish('songPlayed', this.props.audio);
  };
  
  stopSong = () => {
    this.setState({ play: false });
    this.audio.pause();
  };

  buttonIcon = () => (
    this.state.play
      ? "https://img.icons8.com/clouds/100/000000/pause.png"
      : "https://img.icons8.com/clouds/100/000000/play.png"
  );

  getImageDesc = () => this.state.play ? 'play' : 'pause';

  render() {
    return (
      <PlayerContainer>
        <TransparentButton>
          <img src={this.buttonIcon()} onClick={this.asd} alt={this.getImageDesc()} />
        </TransparentButton>
      </PlayerContainer>
    );
  }
}

export default Player;
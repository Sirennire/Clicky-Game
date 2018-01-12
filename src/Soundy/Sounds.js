import React from "react";
import Sound from 'react-sound';

const Soundy = (props) => {
        return (
          <Sound url={props.greetings}
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        );
    }

export default Soundy;
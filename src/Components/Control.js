import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";

const Control = (props) => {
  return (
    <div className="music-player-controls">
        <button className="shuffle-btn" onClick={props.moveBackwards}> 
            <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="playPause-btn" onClick={() =>props.setIsPlaying(!props.isPlaying)}> 
            <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
        <button className="shuffle-btn" onClick={()=> props.handleShuffle()}>
            <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
  )
}

export default Control
import React, {useState, useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";
// import Audio from 'ts-audio';
// import Lazarus from './music/Lazarus.mp3';

const Control = (props) =>{

  const [isPlaying, setIsplaying] = useState(false);
  const [picture, setPicture] = useState();

  // let audio = new Audio(`/Music/${props.songs[0].file}`)

  const audio = useRef(new Audio(`/Music/${props.songs[0].file}`));


  const handlePlay = () => {
    setIsplaying(!isPlaying);
    console.log(props.songs);
    !isPlaying ? audio.current.play() : audio.current.pause();
  }

  return (
    <div className="music-player-controls">
        {/*<img src={`/Images/${picture}`} /> */}
        {console.log(picture)}
        <button className="shuffle-btn" onClick={props.moveBackwards}> 
            <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="playPause-btn" onClick={handlePlay}> 
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className="shuffle-btn" onClick={()=> props.handleShuffle}>
            <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
  )
}

export default Control
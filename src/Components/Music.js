import React, {useState} from 'react';
import Control from './Control.js';

const Music = ( { songs } ) => {
    
    const [songHistory, setSongHistory] = useState([]) 
    const [currentSong, setCurrentSong] = useState(
        {
            id: Number,
            picture: String,
            musicTitle: String,
            // time: Number,
            file: String
        }
    );
    const [isPlaying, setIsplaying] = useState(false);

    const randomNumber = () => (Math.floor(Math.random() * 5) + 1); 
    setCurrentSong(songs.filter((song) => randomNumber()===song.id));

    const moveBackwards = () => {
        setCurrentSong(songHistory[(songHistory.length - 2)]);
    }

    const handleShuffle = () => {
        setCurrentSong(songs.filter((song) => randomNumber()===song.id));  
        setSongHistory((prev) => [...prev, currentSong]);
    }

    return (
        <div>
            <h1>Music App</h1>
            <img src={currentSong?.picture} alt="picture of song"/> 
            <link href={currentSong?.file}> {currentSong?.musicTitle} </link>
            <Control isPlaying={isPlaying} moveBackwards={moveBackwards} handleShuffle={handleShuffle} />
            
        </div>
    )

    
    // const [songArray, setSongArray] = useState();
    // const [index, setIndex] = useState(0);

}

export default Music;
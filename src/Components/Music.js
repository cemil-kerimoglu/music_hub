import React, {useState} from 'react'
import Control from './Control.js'
import ArtistInfo from './ArtistInfo.js'

const Music = ( { songs } ) => {
    
    const [songHistory, setSongHistory] = useState([]) 
    const [currentSong, setCurrentSong] = useState(
        {
            id: 1,
            artist: "Beyoncé",
            picture: "Beyonce.png",
            musicTitle: "Beyonce - Halo",
            file: "Beyonce_-_Halo.m4a"
        }
    );
    // const [isPlaying, setIsplaying] = useState(false);

    const randomNumber = () => (Math.floor(Math.random() * 5) + 1); 
   // setCurrentSong(songs.filter((song) => randomNumber()===song.id));

    const moveBackwards = () => {
        setCurrentSong(songHistory[(songHistory.length - 2)]);
    }

    const handleShuffle = () => {
        setCurrentSong(songs.filter((song) => randomNumber()===song.id));  
        setSongHistory((prev) => [...prev, currentSong]);
    }
console.log("test",typeof currentSong?.picture)
    return (
        <div>
            <h1>Music App</h1>
            {console.log(currentSong.picture)}
            <img src={`./Images/${currentSong.picture}`} alt={currentSong.picture} width="250" height="300" />
            {/*<a href={currentSong.file}> {currentSong.musicTitle} </a>*/}
            {/* Where is this props coming from? */}
            {/* <ArtistInfo id={songs[(songHistory.length- 1)].id} picture_src={}/> */}
            <Control songs={songs} moveBackwards={moveBackwards} handleShuffle={handleShuffle} />
            
        </div>
    )

    
    // const [songArray, setSongArray] = useState();
    // const [index, setIndex] = useState(0);

}

export default Music;
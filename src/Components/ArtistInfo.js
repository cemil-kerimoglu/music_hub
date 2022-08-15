import React from 'react'

const ArtistInfo = (props) => {
  return (
    <div>
        <div>
            <img src={props.picture_src} alt="" />
        </div>
        <h2 className="artist-id">{props.Id}</h2>
        <h2 className="artist-title">{props.musicTitle}</h2>
    </div>
  )
}

export default ArtistInfo
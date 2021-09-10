/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./YoutubePlayer.css"

const YoutubePlayer = () => {
    return (
    <div className="custom-youtube-player">
        <iframe
            id="player"
            type="text/html"
            width="640" height="390"
            src="http://www.youtube.com/embed/38UIyx0ayHY?enablejsapi=1&origin=https://youtu.be/38UIyx0ayHY"
            frameborder="0">
        </iframe>
    </div>
    )
}

export default YoutubePlayer;
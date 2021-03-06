import React from "react";
import "./VideoItem.css"
const VideoItem = ({video,onVideoSelect}) => {
    return(
        <div onClick={()=>onVideoSelect(video)} className="video-item item">
             <div className="content">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url}/>
       
        <div className="header" >{video.snippet.title}</div>
        </div>
        </div>
    );
};

export default VideoItem;
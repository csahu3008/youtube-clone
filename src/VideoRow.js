import React from 'react'
import './VideoRow.css'
function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="VideoRow">
            <img src={image} alt=""></img>
            <div className="VideoRow__text">
    <h3 >{title}</h3>
    <p>{channel} . <span className="subs">{subs} </span>Subscribers . {views} . {timestamp}</p>
    <p className="VideoRow__description">{description}</p>  
            </div>
        </div>
    )
}

export default VideoRow

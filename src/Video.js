import React from 'react'
import './video.css'
import Avatar from '@material-ui/core/Avatar'
function VideoCard({img1,img2,channel_name,title,views,timestamp}) {
    return (
    <div className="videoCard">
    <img src={img1} className="videoCard__thumbnail" alt="" /> 
    <div className="videoCard__info">
    <Avatar className="videoCard__avatar" alt="Channel _name" src={img2} />
    <div className="videoCard__text">
        <h4>{title}</h4>
        <p>{channel_name}</p>
        <p>{views} . {timestamp}</p>
    </div>
    </div>
</div>
        )
}

export default VideoCard
// img1 img2 time stamp title
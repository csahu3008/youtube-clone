import React from 'react'
import './ChannelRow.css'
import {Avatar} from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
function ChannelRow({image,Channel,verified,subs,novideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt=" " src={image} />
            <div className="channelRow__text">
    <h4>{Channel}    {verified && <VerifiedIcon />}</h4>
    <p>{subs} Subscribers . {novideos}</p>
    <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow

import React from 'react';
import './Sidebar.css';
import SideBarRow from './sideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
function Sidebar() {
    return (
        <div className="sidebar">
            <SideBarRow selected  title="Home" Icon={HomeIcon} />
            <SideBarRow title="Trending" Icon={WhatshotIcon} />
            <SideBarRow title="Subscription" Icon={SubscriptionIcon} />
          <hr />
          <SideBarRow   title="Library" Icon={VideoLibraryIcon} />
            <SideBarRow title="History" Icon={HistoryIcon} />
            <SideBarRow title="Your Videos" Icon={OndemandVideoIcon} />
            <SideBarRow   title="Watch Later" Icon={WatchLaterIcon} />
            <SideBarRow title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
            <SideBarRow title="Show More" Icon={ExpandMoreOutlinedIcon} />
        <hr />
        </div>
    )
}

export default Sidebar

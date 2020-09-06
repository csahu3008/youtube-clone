import React from 'react';
import './SearchBar.css';
import Filter from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchBar() {
    return (
        <div className='searchPage'>
            <div className="searchPage__filter">
            <Filter />
            <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
            image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
            Channel="Clever Programmer"
            verified
            subs="767K"
            novideos="421 Videos"
            description="You can find some awesome programming stuff here"
             />
            
            <hr />

            <VideoRow
            views="747K"
            subs="3.8 M"
            description="How to start a Youtube Channel and Earn Money | By Dhruv Rathee"
            timestamp="2 days ago"
            channel="Dhruv Rathee"
            title="How to start a Youtube Channel and Earn Money "
            image="https://i.ytimg.com/an_webp/O3jMpgA5Ww4/mqdefault_6s.webp?du=3000&sqp=CML50voF&rs=AOn4CLBS8-iuoQgQ1qrJN1yryr078lQ-og"
            />

<VideoRow
            views="747K"
            subs="3.8 M"
            description="How to start a Youtube Channel and Earn Money | By Dhruv Rathee"
            timestamp="2 days ago"
            channel="Dhruv Rathee"
            title="How to start a Youtube Channel and Earn Money "
            image="https://i.ytimg.com/an_webp/O3jMpgA5Ww4/mqdefault_6s.webp?du=3000&sqp=CML50voF&rs=AOn4CLBS8-iuoQgQ1qrJN1yryr078lQ-og"
            />
            <VideoRow
            views="747K"
            subs="3.8 M"
            description="How to start a Youtube Channel and Earn Money | By Dhruv Rathee"
            timestamp="2 days ago"
            channel="Dhruv Rathee"
            title="How to start a Youtube Channel and Earn Money "
            image="https://i.ytimg.com/an_webp/O3jMpgA5Ww4/mqdefault_6s.webp?du=3000&sqp=CML50voF&rs=AOn4CLBS8-iuoQgQ1qrJN1yryr078lQ-og"
            />
            <VideoRow
            views="747K"
            subs="3.8 M"
            description="How to start a Youtube Channel and Earn Money | By Dhruv Rathee"
            timestamp="2 days ago"
            channel="Dhruv Rathee"
            title="How to start a Youtube Channel and Earn Money "
            image="https://i.ytimg.com/an_webp/O3jMpgA5Ww4/mqdefault_6s.webp?du=3000&sqp=CML50voF&rs=AOn4CLBS8-iuoQgQ1qrJN1yryr078lQ-og"
            />
            <VideoRow
            views="747K"
            subs="3.8 M"
            description="How to start a Youtube Channel and Earn Money | By Dhruv Rathee"
            timestamp="2 days ago"
            channel="Dhruv Rathee"
            title="How to start a Youtube Channel and Earn Money "
            image="https://i.ytimg.com/an_webp/O3jMpgA5Ww4/mqdefault_6s.webp?du=3000&sqp=CML50voF&rs=AOn4CLBS8-iuoQgQ1qrJN1yryr078lQ-og"
            />

            </div>
    )
}

export default SearchBar

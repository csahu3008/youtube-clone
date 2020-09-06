import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import ylogo from './ytube.svg'
import './header.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
function Header() {
    const [query,setQuery]=useState("")
        
    return (
        <div className="header">

            <div className="header__left">
            <MenuIcon />

            <Link to="/">
            <img className="header__logo" src={ylogo} alt="logo"/>
            </Link>

            </div>
            
            <div className="header__input" >
            <input type='text' onChange={(e)=> setQuery(e.target.value)} value={query} placeholder="Search" />
            
            <Link to={`/search/${query}`} >
                <SearchIcon  className="header__inputButton"/>
            </Link>
            </div>
            
            <div className="header__icons">
            <VideoCallIcon     className="header__icon" />
            <AppsIcon          className="header__icon" />
            <NotificationsIcon className="header__icon"  />
            <Avatar className="header__icon" alt="profile_logo" src="https://lh3.googleusercontent.com/ogw/ADGmqu9vULQ8ql0gkOEJXKM4oGKlCM02_dfJ7E3ndBEN=s83-c-mo" />
            </div>


        </div>
    )
}

export default Header

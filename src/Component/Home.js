import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search';



export default function Home() {

   
    return (
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home_headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/image'>Image</Link>
                    <AppsIcon />
                    <AccountCircleIcon />
                </div>
            </div>
            <div className='home_body'>
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" alt="" />

                <div className='home_inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}


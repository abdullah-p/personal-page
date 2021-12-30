import React from 'react'
import './App.css'
import ProfilePhoto from './265973470_1568381666835496_3316467867074839020_n-cropped.jpg' 
import {
  Link, Outlet
} from "react-router-dom";

export default function Header() {

    const LinkedInLink = () => { 
      window.open('https://www.linkedin.com/in/abdullah-pakwashee');
      }
    
    return (
        <>
        <div className="Page">
        <nav className="Header">
          <div className="Profile">    
            <img className="Photo" src={ProfilePhoto} alt="Me!" />
            <div className="Name">Abdullah Pakwashee</div>
          </div>
          <div className="Pages">
            <Link className="Tab" to="/">Home</Link>
            <Link className="Tab" to="/CV">CV</Link>
            <button className="Tab" onClick={LinkedInLink}>LinkedIn</button>
          </div>
        </nav>
        
        <Outlet />
        </div>
        </>
      )

    
}


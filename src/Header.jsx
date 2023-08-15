import React from 'react'
import './Header.css'
import image from './images/header-image.jpg';

function Header ()
{
    return <div className='header-div'>
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">Devlink Marketplace</a>

                <ul className="navbar-nav" sytle="float: right">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Find Dev</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Find Jobs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Create Account</a>
                    </li>
                </ul>
            </div>
        </nav>
        <img src={image} alt='Header image'/>
    </div>
}

export default Header
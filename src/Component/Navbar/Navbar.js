import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
    <h3 className="logo"><a href='/'> <img className='logo' style={{height:"45px", width:"fit-content"}} src='
https://assets.calendly.com/assets/authentication/media/logo-f885ef95906ef15bb6fb.png' alt=""  /> </a> </h3>
    <ul className="nav-Links">


    <Link to="/home" className="home">  
    <li></li>
    </Link>

    <Link to="/individuals" className="individuals">  
    <li>Individuals</li>
    </Link>
     
    <Link to="/teams" className="teams">
    <li>Teams</li>
    </Link>
        
    <Link to="/enterprise" className="enterprise">
    <li>Enterprise</li>
    </Link>
        
    <Link to="/product" className="product">
    <li>Product</li>
    </Link>

    <Link to="/pricing" className="pricing">
    <li>Pricing</li>
    </Link>

    <Link to="/resource" className="resource">
    <li>Resource</li>
    </Link>

    <Link to="/login" className="login">
    <li>Log In</li>
    </Link>

    <Link to="/getstarted" className="getstarted">
    <li>Get started</li>
    </Link>

    </ul>
    </nav>
    </>
  )
}

export default Navbar

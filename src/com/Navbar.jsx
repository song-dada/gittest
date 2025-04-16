import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/scrolltext">Scroll Text</Link>
            <Link to="/guestbook">Guest Book</Link>
        </nav>
    )
}

export default Navbar
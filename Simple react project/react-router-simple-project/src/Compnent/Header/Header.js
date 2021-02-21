import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/home">Home</a>
                <a href="/detail">Detail</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/login">LOGIN</a>
            </nav>
        </div>
    );
};

export default Header;
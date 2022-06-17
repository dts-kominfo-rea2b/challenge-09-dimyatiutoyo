// Kalian bisa menambahkan CSS di src/components/Header.css
import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div className='appbar'>
            <h1>Call a friend</h1>
            <h5>your friendly contact app</h5>
        </div>
    )
}

export default Header;
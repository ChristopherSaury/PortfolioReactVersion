import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
        <div className='max-width'>
            <div className='logo'><a href='https://placeholder.com/'>Christopher<span>Saury</span></a></div>
            <ul className='menu'>
                <li><a href='#home' className='menu-btn'>Accueil</a></li>
                <li><a href='#about' className='menu-btn'>A propos</a></li>
                <li><a href='#skills' className='menu-btn'>Compétences</a></li>
                <li><a href='#project' className='menu-btn'>Projets</a></li>
                <li><a href='#contact' className='menu-btn'>Contact</a></li>
            </ul>
            <div className='menu-btn'>
                <i className='fas fa-bars'></i>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;

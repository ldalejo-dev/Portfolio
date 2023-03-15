import React from 'react';
import './Navbar.css'


export const Navbar = () => {

    return (
        <nav className='navbar__nav'>
            <a href='#' className='nav__logo'><p className='logo__p'>ldalejo</p></a>
            <ul className='nav__menu'>
                <li className='menu__li'><a href='#'>About</a></li>
                <li className='menu__li'><a href='#'>My Skills</a></li>
                <li className='menu__li'><a href='#'>Works</a></li>
                <li className='menu__li'><a href='#'>Contact</a></li>
            </ul>
        </nav>
    )
  }
  export default Navbar;
import React from 'react'
import './navbar.css'
import MenuSlider from './MenuSlider/menuslider';

const NavBar = () =>{
    return(
        <nav className='bar'>
            <h2 className='title'>Decocorte 3D</h2>
            <MenuSlider></MenuSlider>
        </nav>
    )
}

export default NavBar;
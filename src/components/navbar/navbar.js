import React from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const NavBar = () =>{
    return(
        <nav className='bar'>
            <h2 className='title'>Decocorte 3D</h2>
            <IconButton sx={{padding: 0}} className='menuButton' children={<MenuIcon sx={{margin: 0}} fontSize='large'/>}></IconButton>
        </nav>
    )
}

export default NavBar;
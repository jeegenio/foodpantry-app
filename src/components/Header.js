import React from 'react'
import Cart from './Cart'
import Login from './Login'
import Logo from './Logo'
import { Typography } from '@material-ui/core';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

const Header = () => {
    return (
        <div className="nav-wrapper">
            <nav className="navbar">
                <Typography variant="h6" className="logo1"><Logo/> </Typography> 
                <div className="navbar-1">
                <ShoppingCartSharpIcon className="cart"><Cart/></ShoppingCartSharpIcon>
                <Typography variant="h6" className="log" ><Login/> </Typography>
                </div>
             </nav>




        </div>
    )
}

export default Header

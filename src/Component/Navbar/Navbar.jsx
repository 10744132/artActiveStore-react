import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
export const Navbar = () => {
    const [open,setOpen] =useState(false)
  return (
      <div className='navbar'>
        <div className="wrapper">
        <div className="left">
                <div className="item">
                    <img src="/img/usa.png" className='country' />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/product/1">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/product/2">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/product/3">Children</Link>
                </div>
        </div>
        <div className="center">
                <Link className='link' to ="/">B.H Store</Link>
        </div>
        <div className="right">
            <div clLink className='link'assName="item">
                <Link className='link' to ="/">Homepage</Link>
            </div>
            <div className="item">
                <Link className='link' to ="/">About</Link>
            </div>
            <div className="item">
                <Link className='link' to ="/">Contact</Link>
            </div>
            <div className="item">
                <Link className='link' to ="/">Stores</Link>
            </div>
            <div className="icons">
                <SearchIcon/>
                <PermIdentityIcon/>
                <FavoriteBorderIcon/>
                <div className="carts" onClick={()=>{setOpen(!open)}}>
                <ShoppingCartIcon/>
                <span>0</span>
                </div>
            </div>
         </div>
    </div>
    {open && <Cart/>}
</div>
  )
}

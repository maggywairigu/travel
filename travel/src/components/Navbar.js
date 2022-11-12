import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button'


function Navbar() {
    <script src="https://kit.fontawesome.com/c61c466504.js" crossorigin="anonymous"></script>
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect (() => {
         showButton() 
    }, []
    );
    window.addEventListener('resize', showButton);
       
  return (
    <>
    <nav className='navbar'>
        <div className='navbarcontainer'>
            <Link to='/' className="navbarlogo">
                TRVL <i class="fa-sharp fa-solid fa-truck-monster"></i>
            </Link>
           <div className='menuicon' onClick={handleClick}>
            <i className={click ? 'fa-sharp fa-solid fa-bars': 'fa-sharp fa-solid fa-xmark'} />
           </div>
           <ul className={click ? 'navmenu active': 'navmenu'}>
            <li className='navitem'>
            <Link to='/' className="navlinks" onClick={closeMobileMenu}>
                Home
            </Link>
            </li>
            <li className='navitem'>
            <Link to='/service' className="navlinks" onClick={closeMobileMenu}>
                Services
            </Link>
            </li>
            <li className='navitem'>
            <Link to='/products' className="navlinks" onClick={closeMobileMenu}>
                Products
            </Link>
            </li>
            <li className='navitem'>
            <Link to='/signup' className="navlinksmobile" onClick={closeMobileMenu}>
                Sign Up 
            </Link>
            </li>
           </ul>
           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
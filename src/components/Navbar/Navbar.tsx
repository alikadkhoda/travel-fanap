// this component render navbar. navbar contain sidenav in mobile state
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.css'



export default function Navbar() {
    const [menuState,setMenuState]=useState(false)
    const [buttonState,setButtonState]=useState(true)

    const handleMenu=()=>{
        setMenuState(!menuState)
    }
    const closeMobileMenu=()=>{
        setMenuState(false)
    }
    const handleButton=()=>{
        if(window.innerWidth<=960)
        setButtonState(false)
        else
        setButtonState(true)
    }
    useEffect(()=>{
        handleButton()
    })
    window.addEventListener('resize', handleButton)
    return ( 
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to={'/'} className='navbar-logo'>
                    Travel 
                </Link>
                <div className='menu-icon' onClick={handleMenu}>
                    <i className={menuState ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={menuState ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-links' onClick={closeMobileMenu}>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/tourism'} className='nav-links' onClick={closeMobileMenu}>
                             گردشگری
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/tour'} className='nav-links' onClick={closeMobileMenu}>
                             تور
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/hotels'} className='nav-links' onClick={closeMobileMenu}>
                             رزرو هتل
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/sign-up'} className='nav-links-mobile' onClick={closeMobileMenu}>
                             ثبت نام
                        </Link>
                    </li>
                </ul>
                {   buttonState ?
                    <Button to={'/sign-up'} buttonStyle='btn--outline' buttonSize='btn--medium'>
                       ثبت نام
                    </Button>:null
                }
            </div>
        </nav>
     );
}


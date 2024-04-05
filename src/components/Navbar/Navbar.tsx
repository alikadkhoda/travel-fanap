// this component render navbar. navbar contain sidenav in mobile state
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';



export default function Navbar() {
    const [menuState,setMenuState]=useState(false)
  
    // handle close and open sidenav
    const handleMenu=()=>{
        setMenuState(!menuState)
    }
    // close sidenav when click on items in sidenav
    const closeMobileMenu=()=>{
        setMenuState(false)
    }

    return ( 
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to={'/'} className='navbar-logo'>
                    Travel 
                </Link>
                <div className='menu-icon' onClick={handleMenu}>
                    <i className='fas fa-bars'></i>
                </div>
                <ul className={menuState ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to={'/'} className={({ isActive }) => isActive?'nav-links nav-link-active':'nav-links'} onClick={closeMobileMenu}>
                            صفحه اصلی
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/tourism'} className={({ isActive }) => isActive?'nav-links nav-link-active':'nav-links'} onClick={closeMobileMenu}>
                             گردشگری
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/tour'} className={({ isActive }) => isActive?'nav-links nav-link-active':'nav-links'} onClick={closeMobileMenu}>
                             تور
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/hotels'} className={({ isActive }) => isActive?'nav-links nav-link-active':'nav-links'} onClick={closeMobileMenu}>
                             رزرو هتل
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/sign-up'} className='nav-links-mobile' onClick={closeMobileMenu}>
                             ثبت نام
                        </Link>
                    </li>
                </ul>
                <div className='button-state'>
                <Link to={'/sign-up'} className='btn-register'>
                       ثبت نام
                </Link>
                </div>
            </div>
        </nav>
     );
}


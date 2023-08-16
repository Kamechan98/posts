import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginButton from '../LoginButton/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from '../LogoutButton/LogoutButton'

const Navbar = () => {

  const { isAuthenticated } = useAuth0()

  return (
    <div className='navbar'>
        <div className='container d-flex'>
            <Link to='/' className='brand'>LOGO</Link>
            <ul className='nav-links d-flex'>
                <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
                <li><NavLink className='nav-link' to='create'>Create</NavLink></li>

                { !isAuthenticated && <LoginButton/>}
                { isAuthenticated && 
                <>
                <li> <NavLink className='nav-link' to='me'> My Account</NavLink></li>
                <LogoutButton/>
                </>
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import './style.css'
import { Navbar, Nav } from 'react-bootstrap'

import { Link, useLocation } from 'react-router-dom'

const MyNav = () => {
  const location = useLocation()
  return (
    <Navbar className='navbar navbar-expand-lg navbar-dark bg-dark' expand='lg'>
      <Link to='/'>
        {' '}
        <a className='navbar-brand' href='/'>
          <img
            src='https://img.icons8.com/color/48/000000/react-native.png'
            alt='react logo'
            className='icon'
          />
        </a>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link
            to='/about'
            className={
              location.pathname === '/about' || location.pathname === '/'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            About
          </Link>

          <Link
            to='/portfolio'
            className={
              location.pathname === '/portfolio'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            Portfolio
          </Link>
          <Link
            to='/contact'
            className={
              location.pathname === '/contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </Link>
          <Link
            to='/resume'
            className={
              location.pathname === '/resume' ? 'nav-link active' : 'nav-link'
            }
          >
            Resume
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav

import '../App.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand as={Link} to='/'>
        Thierry Beaulieu
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/experiences'>
            Expériences
          </Nav.Link>
          <Nav.Link as={Link} to='/projects'>
            Projets
          </Nav.Link>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

/*
        <nav>
          <ul>
            <li>
              <Link to='/' className='logo'>
                Thierry Beaulieu
              </Link>
            </li>
            <li>
              <Link to='/experiences' className='navigation-element'>
                Experiences
              </Link>
            </li>
            <li>
              <Link to='/about' className='navigation-element'>
                About
              </Link>
            </li>
          </ul>
        </nav>
*/

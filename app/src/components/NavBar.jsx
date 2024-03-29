import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand as={Link} className='logo' to='/'>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

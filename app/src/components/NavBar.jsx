import '../App.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='container-fluid'>
      <Navbar expand='lg text-primary'>
        <Navbar.Brand as={Link} to='/'>
          Thierry Beaulieu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/experiences'>
              Experiences
            </Nav.Link>
            <Nav.Link as={Link} to='/projects'>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

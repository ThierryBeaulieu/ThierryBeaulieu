import '../App.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <header>
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
      </header>
    </>
  );
}

export default NavBar;

import '../App.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/experiences'>Experiences</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;

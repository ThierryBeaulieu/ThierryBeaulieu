import { useContext } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import ProductContext from '../contexts/ProductContext';

function NavBar() {
  const { state } = useContext(ProductContext);
  return (
    <>
      <header>
        <nav>
          <ul className='flex-center'>
            <li>
              <Link to='/'>
                <img alt='logo' id='logoPolyZonWhite' src='../assets/LogoPolyZonWhite.png'></img>
              </Link>
            </li>
            <li>
              <Link to='/returns' className='nav-link'>
                Retour
                <br />
                <strong>et commande</strong>
              </Link>
            </li>
            <SearchBox />
            <li>
              <Link to='/about' className='nav-link'>
                À propos
              </Link>
            </li>
            <li>
              <Link to='/cart' className='nav-link'>
                <i className='fa-solid fa-cart-shopping shopping-cart'></i>
                Panier ({state.products.length})
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;

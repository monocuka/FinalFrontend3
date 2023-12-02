import React from 'react';
import '../css/styles.css';
import Light from '../images/light.ico';
import Dark from '../images/dark.ico';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { TOGGLE_THEME } from './utils/useReducerHook';

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const routes = [
    { path: '/home', name: 'Inicio' },
    { path: '/favs', name: 'Favoritos' },
    { path: '/contact', name: 'Contactos' },
  ];

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <nav className={`nav ${state.theme}`}>
      <ul>
        {routes.map((route, index) => (
          <li key={index} className='menu'>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <button className='BtnLD' onClick={toggleTheme}>
        <img src={state.theme === 'light' ? Light : Dark} alt='Theme Icon' />
      </button>
    </nav>
  );
};

export default Navbar;

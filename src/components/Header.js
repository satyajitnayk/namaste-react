import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-pink-200 shadow-md">
      <img className="h-28 p-2" src={LOGO_URL}></img>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home </Link>
          </li>

          <li className="px-2">
            <Link to="/about">About Us </Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? '🟢' : '🛑'}</h1>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

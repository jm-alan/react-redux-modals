import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';

import { showModal, setCurrentModal } from '../store/modal';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignUpForm';

const NavBar = () => {
  const dispatch = useDispatch();
  const showLogin = () => {
    dispatch(setCurrentModal(LoginForm));
    dispatch(showModal());
  };
  const showSignup = () => {
    dispatch(setCurrentModal(SignupForm));
    dispatch(showModal());
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <button onClick={showLogin}>
            Log In
          </button>
        </li>
        <li>
          <button onClick={showSignup}>
            Sign Up
          </button>
        </li>
        <li>
          <NavLink to='/users' exact activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

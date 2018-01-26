import React from 'react';
import { NavBar, NavLink } from 'components/navbar';

const NavbarHome = () => (
  <NavBar>
    <NavLink exact to="/">Главная</NavLink>
    <NavLink to="/vocabularies">Словари</NavLink>
  </NavBar>
);

export default NavbarHome;

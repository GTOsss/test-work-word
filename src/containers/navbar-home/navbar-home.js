import React from 'react';
import { NavBar, NavLink } from 'components/navbar';

const NavbarHome = () => (
  <NavBar>
    <NavLink exact to="/">Главная</NavLink>
    <NavLink exact to="/vocabularies">Словари</NavLink>
  </NavBar>
);

export default NavbarHome;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 2rem;
  background-color: #D3D3D3;
  border-bottom: 1px solid #adadad;
`;

const NavBar = ({ title, children }) => (
  <Nav>
    {title || ''}
    {children}
  </Nav>
);

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: '',
};

export default NavBar;

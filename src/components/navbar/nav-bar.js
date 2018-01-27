import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
    height: 2rem;
    background: linear-gradient(135deg,#00b74d 0%,#004c2d 100%);
    border-bottom: 1px solid #00351f;
    box-sizing: border-box;
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

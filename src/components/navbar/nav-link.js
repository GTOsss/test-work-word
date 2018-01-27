import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  display: block;
  float: left;
  height: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
  border-right: 1px solid #00351f;
  border-bottom: 1px solid #00351f;
  text-decoration: none;
  background-color: #006b36;
  color: white;
  box-sizing: border-box;

  &.active {
    background-color: #004518;
    color: #ebebeb;
  }
  
  :hover {
    color: white;
    background-color: #005c1e;
  }
`;

const NavLink = ({ to, exact, children }) => (
  <LinkStyled
    activeClassName="active"
    to={to}
    exact={exact}
  >
    {children}
  </LinkStyled>
);

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  children: '',
  exact: false,
};

export default NavLink;

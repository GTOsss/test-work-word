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
  border-right: 1px solid #747474;
  text-decoration: none;
  background-color: #d3d3d3;
  color: black;

  &.active {
    background-color: grey;
    color: #ebebeb;
  }
  
  :hover {
    color: white;
    background-color: #a0a0a0;
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

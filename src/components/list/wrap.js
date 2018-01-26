import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrap = ({ children }) => (
  <WrapStyled>
    {children}
  </WrapStyled>
);

Wrap.propTypes = {
  children: PropTypes.node,
};

Wrap.defaultProps = {
  children: null,
};

export default Wrap;

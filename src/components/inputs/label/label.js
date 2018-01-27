import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelStyled = styled.label`
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1rem;
  color: black;
  padding: 0.2rem 0.5rem 0.2rem 0.6rem;
  box-shadow: 0 0 6px black;
  border: 1px solid #ffffff70;
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  width: 40%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;
    margin-top: ${p => !p.noMarginTop && '1rem'};
`;

const Label = ({ children, htmlFor, noMarginTop }) => (
  <LabelStyled
    htmlFor={htmlFor}
    noMarginTop={noMarginTop}
  >
    {children}
  </LabelStyled>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  noMarginTop: PropTypes.bool,
  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: '',
  noMarginTop: false,
};

export default Label;

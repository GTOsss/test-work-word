import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const themes = {
  'background-color-default': '#21367d',
  'background-color-hover-default': '#2d63e7',

  'background-color-green': '#3a9362',
  'background-color-hover-green': '#3ab68b',

  'background-color-red': '#bd6473',
  'background-color-hover-red': '#ff9aa9',
};

const ButtonStyled = styled.button`
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border: none;
  border-bottom-left-radius: ${p => (p.groupBottom === p.groupLeft) && '5px'};
  border-bottom-right-radius: ${p => (p.groupBottom === p.groupRight) && '5px'};
  border-top-left-radius: ${p => (p.groupTop === p.groupLeft) && '5px'};
  border-top-right-radius: ${p => (p.groupTop === p.groupRight) && '5px'};
  background-color: ${p => themes[`background-color-${p.theme}`]};

  :hover {
    background-color: ${p => themes[`background-color-hover-${p.theme}`]};
  }
`;

const Button = ({
  value, onClick, theme, groupBottom, groupTop, groupLeft, groupRight,
}) => (
  <ButtonStyled
    onClick={onClick}
    theme={theme}
    groupBottom={groupBottom}
    groupTop={groupTop}
    groupLeft={groupLeft}
    groupRight={groupRight}
  >
    {value}
  </ButtonStyled>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['green', 'red']),
  onClick: PropTypes.string,
  groupBottom: PropTypes.bool,
  groupTop: PropTypes.bool,
  groupLeft: PropTypes.bool,
  groupRight: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  theme: 'default',
  groupBottom: false,
  groupTop: false,
  groupLeft: false,
  groupRight: false,
};

export default Button;

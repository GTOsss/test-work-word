import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './button-styled';

const Button = ({
  value, onClick, theme,
}) => (
  <ButtonStyled
    onClick={onClick}
    theme={theme}
  >
    {value}
  </ButtonStyled>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    name: PropTypes.oneOf(['blue', 'green', 'red']),
    group: PropTypes.shape({
      groupBottom: false,
      groupTop: false,
      groupLeft: false,
      groupRight: false,
    }),
  }),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
  theme: {
    name: 'blue',
    group: {},
  },
};

export default Button;

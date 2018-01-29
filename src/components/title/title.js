import React from 'react';
import PropTypes from 'prop-types';
import TitleStyled from './title-styled';

const themes = {
  default: {
    color: '#fff',
    backgroundColor: '#334e33',
  },
  success: {
    color: '#00ef8a',
    backgroundColor: '#004800',
  },
  fail: {
    color: '#ffb0b0',
    backgroundColor: '#7d0000',
  },
};

const Title = ({ theme, children }) => (
  <TitleStyled theme={themes[theme.name]}>
    {children}
  </TitleStyled>
);

Title.propTypes = {
  theme: PropTypes.shape({
    name: PropTypes.oneOf(['default', 'success', 'fail']),
  }),
  children: PropTypes.node,
};

Title.defaultProps = {
  theme: {
    name: 'default',
  },
  children: '',
};

export default Title;

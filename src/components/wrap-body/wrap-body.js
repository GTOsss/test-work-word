import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapBody = styled.div`
   background: linear-gradient(135deg, #006e2e 0%,#00bf6f 100%);
   height: calc(100vh - 2rem);
   overflow-y: ${({ scroll }) => (scroll ? 'auto' : 'hidden')};
   padding: 1px;
   box-sizing: border-box;
`;

WrapBody.propTypes = {
  scroll: PropTypes.bool,
};

WrapBody.defaultProps = {
  scroll: false,
};

export default WrapBody;

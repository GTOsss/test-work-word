import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EmptyIcon from 'react-icons/lib/fa/square';
import CheckIcon from 'react-icons/lib/fa/check-square';

const CheckIconStyled = styled(CheckIcon)`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.5803921568627451);
`;

const EmptyIconStyled = styled(EmptyIcon)`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.5803921568627451);
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visibility')};
`;

const FocusWrap = styled.div`
  cursor: pointer;
`;

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    const { input: { onChange, value } } = this.props;
    if (e.keyCode === 13 || e.keyCode === 32) {
      onChange(!value);
    }
  }

  render() {
    const { input: { value = false, onChange }, hidden } = this.props;
    return (
      <Wrap hidden={hidden}>
        <FocusWrap
          tabIndex={0}
          onKeyDown={this.onKeyDown}
          onClick={() => onChange(!value)}
        >
          {value ?
            <CheckIconStyled /> :
            <EmptyIconStyled />}
        </FocusWrap>
      </Wrap>
    );
  }
}


Checkbox.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
  hidden: PropTypes.bool,
};

Checkbox.defaultProps = {
  input: {},
  hidden: false,
};


export default Checkbox;


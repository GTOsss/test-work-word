import React from 'react';
import PropTypes from 'prop-types';
import CloseBtn from 'react-icons/lib/md/clear';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const InputStyled = styled.input`
  margin-top: ${p => !p.noMarginTop && '1rem'};
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  box-shadow: 0 0 14px black inset;
  border: 1px solid #2ad25d;
  background-color: #225a1f;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 0 0 1px #ffffff9c;
  text-align: center;
`;

const Input = ({
  input, meta: { touched, error }, placeholder, setRef, readOnly, onBlur, onFocus,
  onChange, type, isCanClear, mask, noMarginTop, id,
}) => (
  <Wrap>
    <InputStyled
      {...input}
      noMarginTop={noMarginTop}
      value={(mask && mask(input.value)) || input.value}
      onBlur={e => input.onBlur(e) || (onBlur && onBlur(e))}
      onFocus={e => input.onFocus(e) || (onFocus && onFocus(e))}
      onChange={e => input.onChange(e) || (onChange && onChange(e))}
      type={type}
      placeholder={placeholder}
      ref={setRef}
      readOnly={readOnly}
      id={id}
    />
    {isCanClear && (input.value !== '')
      ? <CloseBtn
        onClick={() => input.onChange('')}
      /> : ''}
    <div>
      {touched && error ? error : ' '}
    </div>
  </Wrap>
);

Input.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
  meta: PropTypes.objectOf(PropTypes.any),
  placeholder: PropTypes.string,
  setRef: PropTypes.func,
  readOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  isCanClear: PropTypes.bool,
  mask: PropTypes.func,
  noMarginTop: PropTypes.bool,
  id: PropTypes.string,
};

Input.defaultProps = {
  input: {},
  meta: {},
  placeholder: '',
  type: 'text',
  setRef: null,
  readOnly: false,
  onBlur: null,
  onFocus: null,
  onChange: null,
  isCanClear: false,
  mask: null,
  noMarginTop: false,
  id: '',
};

export default Input;

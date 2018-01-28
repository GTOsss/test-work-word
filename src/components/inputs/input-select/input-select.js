import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseBtn from 'react-icons/lib/md/clear';
import { InputStyled, Wrap } from 'components/inputs/input';
import IconArroBottom from 'react-icons/lib/fa/angle-down';
import IconLoader from 'react-icons/lib/fa/refresh';
import shortid from 'shortid';

const IconArrowBottomStyled = styled(IconArroBottom)`
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  position: absolute;
  right: 20px;
  top: 8px;
  transition: height; 
  overflow: hidden;
  visibility: ${({ show }) => (show ? 'visibility' : 'hidden')};
`;

const WrapExtended = Wrap.extend`
  position: relative;
`;

const WrapDropdown = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  height: 120px;
  overflow: hidden;
  visibility: ${({ show }) => (show ? 'visibility' : 'hidden')};
`;

const Dropdown = styled.div`
    position: absolute;
    border-radius: 7px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: linear-gradient(135deg,#005526 0%,#009052 100%);
    z-index: 10;
    width: calc(100% - 14px);
    right: 7px;
    padding: 0.5rem;
    height: 100px;
    overflow-y: auto;
    top: ${({ top }) => `${top}px`};
    box-sizing: border-box;
    border: 1px solid #00b567;
    box-shadow: 0 0 6px black;
    transition: top 200ms linear 0s;
    display: flex;
    flex-wrap: wrap;
`;

const ItemDropdown = styled.div`
  border-radius: 4px;
  background-color: #005828;
  height: min-content;
  padding: 0.2rem 0.5rem;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
  border: 1px solid ${({ active }) => (active ? '#00ff90' : '#009c58')};
  color: ${({ active }) => (active ? '#8bffcc' : '#009c58')} ;
  box-shadow: ${({ active }) => (active ? '0 0 5px #00bc6c' : '')};
`;

const InputStyledExtended = InputStyled.extend`
  padding-right: 1.3rem;
  padding-left: 1.4rem;
`;

const Loader = styled(IconLoader)`
  animation: rotate linear 1s;
  animation-iteration-count: infinite;
  position: absolute;
  left: 23px;
  top: 11px;
  color: white;
  visibility: ${({ theme: { show } }) => (show ? 'visibility' : 'hidden')};

@keyframes rotate {
  100% {
    transform: rotate(1turn)
  }
}
`;

class InputSelect extends Component {
  static getRegWord(word) {
    return new RegExp(`${word}+([, ]|$)`, 'gi');
  }

  constructor(props) {
    super(props);

    this.state = {
      isShowDropdown: false,
      options: [],
    };

    this.idArrow = shortid.generate();

    this.onClickDropdown = this.onClickDropdown.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
    this.onClickItemDropdown = this.onClickItemDropdown.bind(this);
  }

  componentWillMount() {
    this.setState({ options: this.props.options });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onClickOutside);
  }

  componentWillReceiveProps(nextProps) {
    const { options, showDropdown } = nextProps;
    if ((showDropdown !== this.props.showDropdown)
      && (showDropdown !== this.state.isShowDropdown)) {
      this.setState({ isShowDropdown: showDropdown });
    }

    if (options !== this.state.options) {
      this.setState({ options });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClickOutside);
  }

  onClickOutside(e) {
    const stop = document.getElementById(this.idArrow).contains(e.target);
    if (!stop && this.dropdown && !this.dropdown.contains(e.target)) {
      this.setState({ isShowDropdown: false });
    }
  }

  onClickDropdown() {
    this.setState({ isShowDropdown: !this.state.isShowDropdown });
  }

  onClickItemDropdown(e, currentValue) {
    const isAdd = !InputSelect.getRegWord(e.value).test(currentValue);

    const { input: { onChange, value } } = this.props;
    let values = value.replace(/,\s/g, ',').split(',');
    values = values.filter(el => (el.toLowerCase() !== e.value.toLowerCase()) && el);
    if (isAdd) {
      values = [...values, e.value];
    }
    onChange(values.join(', '));
  }

  render() {
    const { isShowDropdown, options } = this.state;
    const {
      input, meta: { touched, error }, placeholder, setRef, readOnly, onBlur, onFocus,
      onChange, type, isCanClear, mask, noMarginTop, id, loading,
    } = this.props;
    return (
      <WrapExtended>
        <Loader
          theme={{ show: loading }}
        />
        <IconArrowBottomStyled
          onClick={this.onClickDropdown}
          id={this.idArrow}
          show={options.length}
        />
        <InputStyledExtended
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
        <WrapDropdown
          show={isShowDropdown}
        >
          <Dropdown
            top={isShowDropdown ? -1 : -105}
            innerRef={(e) => { this.dropdown = e; }}
          >
            {options.map(el => (
              <ItemDropdown
                className="default-scroll"
                key={el.key}
                onClick={() => this.onClickItemDropdown(el, input.value)}
                active={InputSelect.getRegWord(el.value).test(input.value)}
              >
                {el.value}
              </ItemDropdown>
            ))}
          </Dropdown>
        </WrapDropdown>
        {isCanClear && (input.value !== '')
          ? <CloseBtn
            onClick={() => input.onChange('')}
          /> : ''}
        <div>
          {touched && error ? error : ' '}
        </div>
      </WrapExtended>
    );
  }
}

InputSelect.propTypes = {
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
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  })),
  loading: PropTypes.bool,
  showDropdown: PropTypes.bool,
};

InputSelect.defaultProps = {
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
  options: [],
  loading: false,
  showDropdown: false,
};

export default InputSelect;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlusIcon from 'react-icons/lib/fa/plus-square';

const Button = styled.button`
    background-color: #027b39;
    width: 12rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1rem;
    color: white;
    margin: 2rem 0 0 1rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 0 12px black;
    
    :hover .hover-green {
      color: #9dffc8;
    }
`;

const PlusIconStyled = styled(PlusIcon)`
  color: white;
  font-size: 2rem;
  line-height: 4rem;
  height: 4rem;
`;

const ButtonAddVocabulary = ({ value, onClick }) => (
  <Button
    onClick={onClick}
  >
    <PlusIconStyled className="hover-green" />
    <div className="hover-green">
      {value}
    </div>
  </Button>
);

ButtonAddVocabulary.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonAddVocabulary.defaultProps = {
  onClick: null,
};

export default ButtonAddVocabulary;

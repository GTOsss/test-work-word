import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlusIcon from 'react-icons/lib/fa/plus-square';

const Button = styled.button`
    background-color: #3a9362;
    width: 14rem;
    height: 5rem;
    line-height: 5rem;
    font-size: 1rem;
    color: white;
    margin: 2rem 0 0 1rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    
    :hover .hover-green {
      color: #9dffc8;
    }
`;

const PlusIconStyled = styled(PlusIcon)`
  color: white;
  font-size: 2rem;
  line-height: 5rem;
  height: 5rem;
`;

const ButtonAddVocabulary = ({ value }) => (
  <Button>
    <PlusIconStyled className="hover-green" />
    <div className="hover-green">
      {value}
    </div>
  </Button>
);

ButtonAddVocabulary.propTypes = {
  value: PropTypes.string.isRequired,
};

ButtonAddVocabulary.defaultProps = {
};

export default ButtonAddVocabulary;

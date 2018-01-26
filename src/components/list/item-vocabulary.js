import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/inputs/button';

const Item = styled.div`
  border-radius: 5px;
  margin: 1rem 0 0 1rem;
`;

const Title = styled.h4`
  background-color: darkgray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  min-width: 10rem;
  margin: 0;
  padding: 0.6rem 0;
`;

const ItemVocabulary = ({ title, onClickEdit, onClickTest }) => (
  <Item>
    <Title>{title}</Title>
    <Button
      value="Изменить"
      onClick={onClickEdit}
      groupBottom
      groupTop
    />
    <Button
      value="Тест"
      onClick={onClickTest}
      theme="green"
      groupTop
    />
  </Item>
);

ItemVocabulary.propTypes = {
  title: PropTypes.string,
  onClickEdit: PropTypes.func,
  onClickTest: PropTypes.func,
};

ItemVocabulary.defaultProps = {
  title: '',
  onClickEdit: null,
  onClickTest: null,
};

export default ItemVocabulary;

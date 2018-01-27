import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonStyled } from 'components/inputs/button';
import { Link } from 'react-router-dom';
import IconClose from 'react-icons/lib/fa/close';

const IconCloseStyled = styled(IconClose)`
  font-size: 1.1rem;
  color: black;
  position: absolute;
  right: 5px;
  top: 3px;
  cursor: pointer;
  
  :hover {
    color: darkred;
  }
`;

const Item = styled.div`
  border-radius: 5px;
  margin: 1rem 0 0 1rem;
  position: relative;
  box-shadow: 0 0 14px black;
`;

const Title = styled.h4`
  background-color: #3a9362;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  min-width: 10rem;
  margin: 0;
  padding: 0.6rem 0 0.6rem 0.5rem;
`;

const LinkStyled = ButtonStyled.withComponent(Link);

const ItemVocabulary = ({
  title, onClickEdit, onClickTest, id,
}) => (
  <Item>
    <Title>{title}</Title>
    <IconCloseStyled />
    <LinkStyled
      to={`/vocabularies/edit/${id}`}
      theme={{
        name: 'blue',
        group: {
          bottom: true,
          top: true,
        },
      }}
    >
      Изменить
    </LinkStyled>
    <LinkStyled
      to="/vocabularies/test"
      theme={{
        name: 'green',
        group: {
          top: true,
        },
      }}
    >
      Тест
    </LinkStyled>
  </Item>
);

ItemVocabulary.propTypes = {
  id: PropTypes.string.isRequired,
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

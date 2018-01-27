import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Input from 'components/inputs/input';
import Label from 'components/inputs/label';
import styled from 'styled-components';
import InputLabelGroup from 'components/inputs/input-label-group';
import Checkbox from 'components/inputs/checkbox';

const InlineWrap = styled.div`
  display: flex;
  padding: 0.5rem;  
`;

const renderInput = props => (
  <Input
    {...props}
    onBlur={e => props.onBlurHandler(props.i, props.fields, e)} // eslint-disable-line
  />
);

const Word = ({ onBlur, fields, words }) => (
  <div>
    { fields.map((el, i) => (
      <InlineWrap key={(words[i] && words[i].id) || i}>
        <InputLabelGroup>
          { i === 0 ? (
            <Label
              htmlFor="word"
              noMarginTop
            >
              Слово:
            </Label>
          ) : null}
          <Field
            name={`${el}.word`}
            component={renderInput}
            onBlurHandler={onBlur}
            id="word"
            noMarginTop
            i={i}
            fields={fields}
          />
        </InputLabelGroup>
        <Field
          name={`${el}.isChecked`}
          component={Checkbox}
          hidden={(fields.length - 1) === i}
        />
        <InputLabelGroup>
          { i === 0 ? (
            <Label
              htmlFor="translate"
              noMarginTop
            >
              Перевод:
            </Label>
          ) : null }
          <Field
            name={`${el}.translate`}
            component={renderInput}
            onBlurHandler={onBlur}
            id="translate"
            noMarginTop
            i={i}
            fields={fields}
          />
        </InputLabelGroup>
      </InlineWrap>
    ))}
  </div>
);

Word.propTypes = {
  onBlur: PropTypes.func,
  words: PropTypes.arrayOf(PropTypes.object).isRequired,
  fields: PropTypes.objectOf(PropTypes.any),
};

Word.defaultProps = {
  onBlur: null,
  fields: {},
};

export default Word;

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Input from 'components/inputs/input';
import Label from 'components/inputs/label';
import styled from 'styled-components';
import InputLabelGroup from 'components/inputs/input-label-group';
import Checkbox from 'components/inputs/checkbox';
import InputSelect from 'components/inputs/input-select';
import shortid from 'shortid';

const InlineWrap = styled.div`
  display: flex;
  padding: 0.5rem;  
`;

/* eslint-disable react/prop-types */
const renderInput = props => (
  <Input
    {...props}
    onBlur={e => props.onBlurHandler(props.i, props.fields, e)}
    onChange={props.onChangeWord
      ? e => props.onChangeWord(e, props.inputName) : null}
  />
);
/* eslint-enable react/prop-types */

const renderInputSelect = props => (
  <InputSelect
    {...props}
    onBlur={e => props.onBlurHandler(props.i, props.fields, e)} // eslint-disable-line
  />
);

const getOptions = (el, translations) => {
  const tran = translations.find(translate => translate.id === el);
  if (tran) {
    return tran.translations.map(t => ({ key: shortid.generate(), value: t }));
  }
  return [];
};

const Word = ({
  onBlur, fields, words, onChangeWord, translations, loading, lastTouchInput,
}) => (
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
            onChangeWord={onChangeWord}
            inputName={el}
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
            component={renderInputSelect}
            onBlurHandler={onBlur}
            id="translate"
            noMarginTop
            i={i}
            fields={fields}
            options={getOptions(el, translations)}
            loading={loading[el]}
            showDropdown={(lastTouchInput === el) && getOptions(el, translations).length !== 0}
          />
        </InputLabelGroup>
      </InlineWrap>
    ))}
  </div>
);

Word.propTypes = {
  onBlur: PropTypes.func,
  onChangeWord: PropTypes.func,
  words: PropTypes.arrayOf(PropTypes.object).isRequired,
  fields: PropTypes.objectOf(PropTypes.any),
  translations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    translations: PropTypes.array,
  })),
  loading: PropTypes.objectOf(PropTypes.bool),
  lastTouchInput: PropTypes.string,
};

Word.defaultProps = {
  onBlur: null,
  onChangeWord: null,
  fields: {},
  translations: [],
  loading: {},
  lastTouchInput: '',
};

export default Word;

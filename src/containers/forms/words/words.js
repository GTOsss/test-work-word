import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldArray, reduxForm, formValueSelector, arrayRemoveAll, arrayPush } from 'redux-form';
import styled from 'styled-components';
import Button from 'components/inputs/button';
import { bindActionCreators } from 'redux';
import * as vocabularyActions from 'actions/vocabularies';
import * as translateAction from 'actions/translations';
import { connect } from 'react-redux';
import Word from './word';

const FormStyled = styled.form`
  margin: 2rem auto;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #006e2e 0%,#00bf6f 100%);
  box-shadow: 0 0 10px black;
  width: 600px;
  border: 1px solid #00bd6e;
`;

class Words extends Component {
  static clearEmptyFields(words) {
    return words.filter(el => el.word && el.translate);
  }

  static onBlur(i, fields, e) {
    const currentWords = fields.map(el => el);
    const isLast = (currentWords.length === (i + 1)) && e.target.value;
    if (isLast) {
      fields.push({});
    }
  }

  constructor(props) {
    super(props);

    this.state = { lastTouchInput: '' };

    this.onSubmit = this.onSubmit.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.onChangeWord = this.onChangeWord.bind(this);
  }

  onClickRemove() {
    const {
      dispatch, wordsReduxForm, actions: { vocabularyEditWords, clearTranslate }, id,
    } = this.props;
    clearTranslate();
    const filterWords = wordsReduxForm.filter(el => !el.isChecked);
    dispatch(arrayRemoveAll('words', 'words'));
    filterWords.forEach(el => dispatch(arrayPush('words', 'words', el)));
    vocabularyEditWords(id, Words.clearEmptyFields(filterWords));
  }

  onSubmit(values) {
    const { actions: { vocabularyEditWords }, id } = this.props;
    vocabularyEditWords(id, Words.clearEmptyFields(values.words));
  }

  onChangeWord({ target: { value } }, inputName) {
    const { actions: { translate } } = this.props;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      translate(value, inputName);
      this.setState({ lastTouchInput: inputName });
    }, 200);
  }

  render() {
    const {
      handleSubmit, words, isChecked, translations, loading,
    } = this.props;

    return (
      <FormStyled onSubmit={handleSubmit(this.onSubmit)}>
        <FieldArray
          name="words"
          component={Word}
          onBlur={Words.onBlur}
          words={words}
          onChangeWord={this.onChangeWord}
          translations={translations}
          loading={loading}
          lastTouchInput={this.state.lastTouchInput}
        />
        { isChecked ? (
          <Button
            value="Удалить"
            theme={{
              name: 'dark-red',
              margin: '1rem 0 0 0',
            }}
            onClick={this.onClickRemove}
          />
        ) : (
          <Button
            value="Сохранить"
            theme={{
              name: 'dark-green',
              margin: '1rem 0 0 0',
            }}
          />
        ) }
      </FormStyled>
    );
  }
}

Words.propTypes = {
  handleSubmit: PropTypes.func,
  words: PropTypes.arrayOf(PropTypes.object),
  wordsReduxForm: PropTypes.arrayOf(PropTypes.object),
  isChecked: PropTypes.bool,
  dispatch: PropTypes.func,
  actions: PropTypes.objectOf(PropTypes.func),
  id: PropTypes.string,
  translations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    translations: PropTypes.array,
  })),
  loading: PropTypes.objectOf(PropTypes.bool),
};

Words.defaultProps = {
  handleSubmit: null,
  dispatch: null,
  words: [],
  wordsReduxForm: [],
  isChecked: false,
  actions: {},
  id: '',
  translations: [],
  loading: {},
};

const Form = reduxForm({ form: 'words' })(Words);
const selector = formValueSelector('words');

const mapStateToProps = (state, props) => {
  const currentWords = (state.vocabularies.find(el => el.id === props.id) || {}).words;
  const wordsReduxForm = selector(state, 'words') || [];
  const initialValues = currentWords ? {
    words: currentWords ? [...currentWords, {}] : null,
  } : null;
  return {
    initialValues,
    words: currentWords,
    isChecked: wordsReduxForm.some(el => el.isChecked),
    wordsReduxForm,
    translations: state.translations,
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(vocabularyActions, dispatch),
    ...bindActionCreators(translateAction, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

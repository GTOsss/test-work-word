import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { randomInteger, swapArrayElements } from 'utils/operations';
import Title from 'components/title';
import WrapBody from 'components/wrap-body';
import { Wrap, Button, ButtonNext, CountTitle, WrapButtons } from './styles';

class VocabularyTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      countFail: 0,
      countSuccess: 0,
      countMissed: 0,
      typeTitle: 'default',
      currentWord: {},
      variants: [],
      selectWord: {},
    };

    this.createQuestion = this.createQuestion.bind(this);
    this.onClickVariant = this.onClickVariant.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.getThemeButton = this.getThemeButton.bind(this);
  }

  componentDidMount() {
    this.updateQuestion(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateQuestion(nextProps);
  }

  onClickVariant(isTrueAnswer, word) {
    const { countFail, countSuccess } = this.state;
    this.setState({
      typeTitle: isTrueAnswer ? 'success' : 'fail',
      countFail: !isTrueAnswer ? countFail + 1 : countFail,
      countSuccess: isTrueAnswer ? countSuccess + 1 : countSuccess,
      selectWord: word,
    });
  }

  onClickNext() {
    const { step, typeTitle, countMissed } = this.state;
    this.setState({
      step: step + 1,
      typeTitle: 'default',
      countMissed: typeTitle === 'default' ? countMissed + 1 : countMissed,
      selectWord: {},
    }, this.updateQuestion);
  }

  getThemeButton(translate) {
    const { currentWord, selectWord, typeTitle } = this.state;
    const isFail = currentWord.translate !== translate;
    let name = 'dark-green';
    if (typeTitle !== 'default' && isFail) {
      name = 'disabled';
    }
    if (selectWord.translate === translate && isFail) {
      name = 'dark-red';
    }
    return { name };
  }

  createQuestion(props) {
    const words = props.words.map(el => el);
    const currentWord = words.splice(this.state.step, 1)[0] || {};
    const variants = [{ ...currentWord, id: shortid.generate() }];
    for (let i = 0; i < 5; i += 1) {
      variants.push({
        id: shortid.generate(),
        ...words.splice(randomInteger(0, words.length - 1), 1)[0] || {},
      });
    }
    return {
      currentWord,
      variants: swapArrayElements(variants, 0, randomInteger(0, variants.length - 1)),
    };
  }

  updateQuestion(props) {
    const currentProps = props || this.props;
    const { currentWord, variants } = this.createQuestion(currentProps);
    this.setState({ currentWord, variants });
  }

  render() {
    const countQuestions = 20;
    const {
      typeTitle, step, currentWord, variants, countSuccess, countFail, countMissed,
    } = this.state;
    const { words } = this.props;
    const isEnd = (step === countQuestions) || (step >= words.length);
    const isNeedMoreWords = words.length < 6;
    return (
      <WrapBody scroll>
        { variants.length && !isEnd && !isNeedMoreWords ? (
          <Wrap>
            <CountTitle>{step + 1} из {Math.min(countQuestions, words.length)}</CountTitle>
            <Title theme={{ name: typeTitle }} >{currentWord.translate}</Title>
            <WrapButtons>
              {variants.map((el, i) => (
                <Button
                  key={el.id}
                  theme={this.getThemeButton(el.translate)}
                  disabled={typeTitle !== 'default'}
                  onClick={() => this.onClickVariant(el.translate === currentWord.translate, el)}
                >
                  {`${i + 1}. ${el.word}`}
                </Button>
              ))}
              <ButtonNext
                theme={{ name: 'dark-green' }}
                onClick={this.onClickNext}
              >
                {step === 19 ? 'Закончить' : 'Следующее слово'}
              </ButtonNext>
            </WrapButtons>
          </Wrap>
        ) : null }
        {isEnd && !isNeedMoreWords ? (
          <Wrap>
            <Title>
              Верных ответов: {countSuccess}
              <br />
              Ошибок: {countFail}
              <br />
              Пропущенных слов: {countMissed}
            </Title>
          </Wrap>
        ) : null}
        { isNeedMoreWords ? (
          <Wrap>
            <Title theme={{ name: 'fail' }}>
              Необходимо добавить больше слов в словарь для прхождения теста. Минимум 6.
            </Title>
          </Wrap>
        ) : null }
      </WrapBody>
    );
  }
}

VocabularyTest.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object),
};

VocabularyTest.defaultProps = {
  words: [],
};

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  const currentWords = (state.vocabularies.find(el => el.id === id) || {}).words;
  return {
    words: currentWords || [],
  };
};

export default connect(mapStateToProps)(VocabularyTest);

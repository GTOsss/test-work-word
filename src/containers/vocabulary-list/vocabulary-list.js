import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ItemVocabulary, Wrap } from 'components/list';
import ButtonAddVocabulary from 'components/inputs/button-add-vocabulary';
import { bindActionCreators } from 'redux';
import * as vocabularyActions from 'actions/vocabularies';
import WrapBody from 'components/wrap-body';

class VocabularyList extends Component {
  constructor(props) {
    super(props);

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickAdd() {
    const { actions: { vocabularyAdd } } = this.props;
    vocabularyAdd();
  }

  onClickClose(id) {
    const { actions: { vocabularyRemove } } = this.props;
    vocabularyRemove(id);
  }

  render() {
    const { vocabularies } = this.props;
    return (
      <WrapBody scroll>
        <Wrap>
          {vocabularies.map(({ name, id } = {}) => (
            <ItemVocabulary
              title={name}
              key={id}
              id={id}
              onClickClose={this.onClickClose}
            />
          ))}
          <ButtonAddVocabulary
            onClick={this.onClickAdd}
            value="Добавить словарь"
          />
        </Wrap>
      </WrapBody>
    );
  }
}

VocabularyList.propTypes = {
  vocabularies: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

VocabularyList.defaultProps = {
  vocabularies: [],
};

const mapStateToProps = state => ({
  vocabularies: state.vocabularies,
});

const mapDispatchToProps = dispatch => ({
  actions: { ...bindActionCreators(vocabularyActions, dispatch) },
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyList);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import VocabularyList from 'containers/vocabulary-list';
import WrapBodyScroll from 'components/wrap-body';
import { bindActionCreators } from 'redux';
import * as vocabularyActions from 'actions/vocabularies';
import Test from './test';
import Edit from './edit';

class Vocabularies extends Component {
  componentDidMount() {
    const { actions: { vocabulariesGet } } = this.props;
    vocabulariesGet();
  }

  render() {
    return (
      <WrapBodyScroll>
        <Switch>
          <Route exact path="/vocabularies" component={VocabularyList} />
          <Route path="/vocabularies/test/:id" component={Test} />
          <Route path="/vocabularies/edit/:id" component={Edit} />
        </Switch>
      </WrapBodyScroll>
    );
  }
}

Vocabularies.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

Vocabularies.defaultProps = {

};

const mapStateToProps = state => ({
  location: state.routing.location,
});

const mapDispatchToProps = dispatch => ({
  actions: { ...bindActionCreators(vocabularyActions, dispatch) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Vocabularies);

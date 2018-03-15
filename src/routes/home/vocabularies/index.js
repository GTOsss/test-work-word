import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VocabularyList from 'containers/vocabulary-list';
import WrapBodyScroll from 'components/wrap-body';
import Test from './test';
import Edit from './edit';

const Vocabularies = () => (
  <WrapBodyScroll>
    <Switch>
      <Route exact path="/vocabularies" component={VocabularyList} />
      <Route path="/vocabularies/test/:id" component={Test} />
      <Route path="/vocabularies/edit/:id" component={Edit} />
    </Switch>
  </WrapBodyScroll>
);

export default Vocabularies;

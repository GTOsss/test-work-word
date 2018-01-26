import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { injectGlobal } from 'styled-components';
import Home from './home';

// eslint-disable-next-line no-unused-expressions
injectGlobal` 
  body {
    margin: 0;
  }
`;

const App = () => (
  <Route path="/" component={Home} />
);

const mapStateToProps = state => ({
  location: state.routing.location,
});

export default connect(mapStateToProps)(App);

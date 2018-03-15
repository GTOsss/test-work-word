import React from 'react';
import { Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import Home from './home';

// eslint-disable-next-line no-unused-expressions
injectGlobal` 
  body {
    margin: 0;
    font-family: Arial;
  }
`;

const App = () => (
  <Route path="/" component={Home} />
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store/create-store';
import Routes from './routes';

const history = createBrowserHistory();
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

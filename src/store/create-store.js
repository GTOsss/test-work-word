import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import reducers from './reducers';

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; //eslint-disable-line

export default () => createStore(
  combineReducers({ ...reducers, form: formReducer, routing: routerReducer }),
  devToolsExtension && devToolsExtension(),
  applyMiddleware(thunk),
);

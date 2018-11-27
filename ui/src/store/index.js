import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './reducers';

import googleUserLoggedIn from './userLoggedIn';

const store = createStore(rootReducer, applyMiddleware(logger));

window.onSignIn = user => googleUserLoggedIn(store.dispatch, user);

export default store;

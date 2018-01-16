import * as reducers from 'reducers';

import createHistory from 'history/createHashHistory';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
// Create the redux store object
export const store = createStore(
    combineReducers({...reducers, routing: routerReducer}),
    applyMiddleware(middleware)
);
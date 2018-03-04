import * as reducers from 'reducers'
import sagas from './sagas'
import createHistory from 'history/createHashHistory'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

// Create a new saga middleware provider
const sagaMiddleware = createSagaMiddleware()
// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()
// Create the redux store object
export const store = createStore(combineReducers({...reducers, routing: routerReducer}), applyMiddleware(sagaMiddleware, routerMiddleware(history)))
// then run the saga
sagaMiddleware.run(sagas)

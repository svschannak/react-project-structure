import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import BaseReducer from './reducer.js';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        BaseReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
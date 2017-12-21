import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import reducer from './../reducers'

const initialState = { };

export default function configureStore() {

    let store = createStore(
        reducer,
        initialState,
        compose(
          applyMiddleware(logger),
          /**
           * Conditionally add the Redux DevTools extension enhancer
           * if it is installed.
           */
          window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    return store;
}
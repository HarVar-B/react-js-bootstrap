import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
// import { responsiveStoreEnhancer, } from 'redux-responsive';
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from 'redux'

import middlewares from '../middlewares'
import createRootReducers from '../modules/reducers'
import rootSagas from '../modules/sagas'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const middlewareList = Object.values(middlewares)
let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
  middlewareList.push(createLogger({ collapsed: true }))

  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }
}

const store = createStore(
  createRootReducers(history),
  composeEnhancers(
    // responsiveStoreEnhancer,
    applyMiddleware(...middlewareList, sagaMiddleware),
  ),
)
console.log('initialised store')
sagaMiddleware.run(rootSagas)

export { history }

export default store

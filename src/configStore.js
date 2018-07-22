import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/index'

const middlewares = [
  thunk,
  logger,
]

export default function configureStore() {
 return createStore (
   rootReducer,
   applyMiddleware(...middlewares)
 )
}

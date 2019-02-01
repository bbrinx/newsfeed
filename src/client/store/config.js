import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers'

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [thunkMiddleware, promiseMiddleware()]
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );
  return store;
}

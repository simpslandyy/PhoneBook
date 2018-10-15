import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { phoneBook } from './reducers';

export function storeConfig() {
  const storeMiddleware = createSagaMiddleware();

  return {
    ...createStore(phoneBook, applyMiddleware(storeMiddleware)),
    runSaga: storeMiddleware.run
  }
}

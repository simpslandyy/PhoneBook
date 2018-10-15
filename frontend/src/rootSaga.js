import { all, fork } from 'redux-saga/effects';
import { watcherSaga } from './containers/Phonebook.saga';

export default function *rootSaga() {
  yield all([fork(watcherSaga)]);
}

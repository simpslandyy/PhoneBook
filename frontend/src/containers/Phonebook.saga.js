import { takeEvery, put } from 'redux-saga/effects';
import { getContacts } from '../utils/helpers';

export function *fetchContacts(payload) {
  const contacts = yield getContacts();
  yield put({ type: 'FETCH_SUCCESS', payload: contacts })
}

export function *addContact(payload) {
  console.log("adding contacts")
  return payload;
}

export function *deleteContact(payload) {
  console.log("deleting contacts")
  return payload;
}

export function *updateContact(payload) {
  console.log("updating contacts")
  return payload;
}

export function* watcherSaga() {
  yield takeEvery('FETCH', fetchContacts);
  yield takeEvery('ADD', addContact);
  yield takeEvery('DELETE', deleteContact);
  yield takeEvery('UPDATE', updateContact);
}

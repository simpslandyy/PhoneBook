import { takeEvery } from 'redux-saga/effects';

export function *fetchContacts(payload) {
  console.log("fetching contacts")
  return payload;
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

export default function* rootSaga() {
  yield takeEvery('FETCH', fetchContacts);
  yield takeEvery('ADD', addContact);
  yield takeEvery('DELETE', deleteContact);
  yield takeEvery('UPDATE', updateContact);
}

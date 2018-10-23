import { takeEvery, put } from 'redux-saga/effects';
import { getContacts, addContact, updateContact, removeContact }  from '../utils/helpers';
import { FETCH_CONTACTS,
          UPDATE_CONTACT,
          ADD_CONTACT,
          REMOVE_CONTACT } from './Phonebook.actions';

export function *fetchContacts() {
  const contacts = yield getContacts();
  yield put({ type: 'FETCH_SUCCESS', payload: contacts })
}

export function *newContact(payload) {
  console.log("adding contacts")
  const resp = yield addContact();
  if (resp == -1) {
    yield put({ type: 'ADD_FAILURE' })
  } else {
    yield put({ type: 'FETCH_CONTACTS' });
  }
}

export function *deleteContact(payload) {
  const resp = yield removeContact();
  console.log("deleting contacts")
  return payload;
}

export function *modifyContact(payload) {
  const resp = yield updateContact();
  console.log("updating contacts")
  return payload;
}

export function* watcherSaga() {
  yield takeEvery(FETCH_CONTACTS, fetchContacts);
  yield takeEvery(ADD_CONTACT, addContact);
  yield takeEvery(REMOVE_CONTACT, removeContact);
  yield takeEvery(UPDATE_CONTACT, updateContact);
}

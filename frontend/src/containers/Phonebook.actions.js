import { createAction } from '../utils/helpers';

export const FETCH_CONTACTS = 'APP/@FETCH_CONTACTS';
export const ADD_CONTACT = 'APP/@ADD_CONTACT';
export const UPDATE_CONTACT = 'APP/@UPDATE_CONTACT';
export const REMOVE_CONTACT = 'APP/@REMOVE_CONTACT';

export const fetchContacts = () => {
  return createAction(FETCH_CONTACTS);
}

export const addContact = (data) => {
  return createAction(ADD_CONTACT, data);
}

export const updateContact = (data) => {
  return createAction(UPDATE_CONTACT, data);
}

export const removeContact = (data) => {
  return createAction(REMOVE_CONTACT, data);
}

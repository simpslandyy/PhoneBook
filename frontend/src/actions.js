import { createAction } from './helpers';

export const fetchData = () => {
  return createAction('FETCH');
}

export const addContact = (data) => {
  return createAction('ADD', data);
}

export const updateContact = (data) => {
  return createAction('UPDATE', data);
}

export const removeContact = (data) => {
  return createAction('DELETE', data);
}

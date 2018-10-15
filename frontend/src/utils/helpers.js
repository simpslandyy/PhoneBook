export const createAction = (action, data={}) => {
  return { type: action,
            payload: data };
}

export const getContacts = async () => {
  let response = await fetch('http://localhost:8000/api/v1/contacts/', {
  });
  let body = await response.json();
  return body.objects;
}

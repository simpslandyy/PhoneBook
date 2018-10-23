// Action Creator
export const createAction = (action, data={}) => {
  return { type: action,
            payload: data };
}

// API's
// figure out configuration for this later
const HOST = 'http://localhost:8000/api/v1';

export const getContacts = async () => {
  let endpoint = HOST + '/contacts';
  let response = await fetch(endpoint);
  let json = await response.json();
  return json.objects;
}

export const addContact = async (body) => {
  let endpoint = 'http://localhost:8000/api/v1/contacts/';
  let payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body)
  }

  let response = await fetch(endpoint, payload);
  if (!response.ok) {
    return -1;
  }
  return 0;
}

export const updateContact = async () => {

}

export const removeContact = async () => {

}

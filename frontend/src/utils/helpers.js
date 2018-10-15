export const createAction = (action, data={}) => {
  return { type: action,
            payload: data };
}

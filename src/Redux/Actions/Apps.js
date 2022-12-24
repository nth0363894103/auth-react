import { APPEND_APP, ADD_LIST_APP } from '../Const';
const appendApp = (payload) => {
  return {
    type: APPEND_APP,
    payload
  };
};
const addListApp = (payload) => {
  return {
    type: ADD_LIST_APP,
    payload
  };
};
export { appendApp, addListApp };

import * as TYPE from '../Const';
const initState = {
  isLoggedIn: false,
  token: null,
  data: []
};
export default function auth(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGOUT:
      return {
        data: [],
        token: '',
        isLoggedIn: false
      };
    case TYPE.SET_USER_DATA:
      return {
        ...state,
        data: payload
      };
    case TYPE.SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    case TYPE.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: payload };
    default:
      return { ...state };
  }
}

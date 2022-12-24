import * as TYPE from '../Const';

const initState = {
  data: []
};
export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.APPEND_APP:
      return {
        ...state,
        data: [...state.data, payload]
      };
    case TYPE.ADD_LIST_APP:
      return {
        ...state,
        data: payload
      };
    default:
      return { ...state };
  }
};

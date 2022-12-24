import * as TYPE from '../Const';

const initState = {
  sidebarCollapsed: false
};
export default function ui(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPE.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed
      };
    default:
      return { ...state };
  }
}

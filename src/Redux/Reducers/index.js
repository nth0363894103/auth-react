import { combineReducers } from 'redux';
import auth from './Auth';
import ui from './UI';
import apps from './Apps';
export default combineReducers({
  auth,
  ui,
  apps
});

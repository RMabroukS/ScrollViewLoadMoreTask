import { combineReducers } from 'redux';
import { UiReducer } from './uiReducer';
import { UserReducer } from './userReducer';

const uiReducer=new UiReducer()
const userReducer=new UserReducer()
export default combineReducers({
    uiReducer:uiReducer.reducer,
    userReducer:userReducer.reducer,
  });
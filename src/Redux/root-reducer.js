import { combineReducers } from "redux";


import UserReducer from "./User/user.reducer";


export default combineReducers({
  user: UserReducer
});


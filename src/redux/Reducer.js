import { combineReducers } from "redux";
import UsersReducer from "./Users/Users.reducer";

const rootReducer = combineReducers ({
    users: UsersReducer
});
export default rootReducer;
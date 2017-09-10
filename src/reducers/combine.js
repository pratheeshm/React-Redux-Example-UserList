import {combineReducers} from 'redux';
import userReducer from './user.js';
import activeUserReducer from './active-user.js';
const allReducers=combineReducers({
    users:userReducer,
    activeUser:activeUserReducer
});

export default allReducers;
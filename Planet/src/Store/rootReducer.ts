/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
// import messageReducer from './message';
// import usersReducer from './users';
import applicationReducer from '../Store/application';
import authReducer from '../Store/auth';
import initialsApiCallsReducer from '../Store/initialsApiCalls';
import CreateApiCallsReducer from '../Store/CreateApiCalls';
import {combineReducers} from 'redux';
import DeleteApiCallsReducer from '../Store/DeleteApiCalls';
import SetupReducer from '../Store/Setup';
import homeReducer from '../Store/homeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const combineRed: any = combineReducers({
  // initialsApiCalls: initialsApiCallsReducer,
  // application: applicationReducer,
  auth: authReducer,
  home: homeReducer,
  // createApiCalls: CreateApiCallsReducer,
  // DeleteApiCalls: DeleteApiCallsReducer,
  // Setup: SetupReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logout/fulfilled') {
    // check for action type
    console.log({type: action.type});
    state = undefined;
    //AsyncStorage.clear(); // usama commit
  }
  return combineRed(state, action);
};
export default rootReducer;

import * as actions from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from './initialState';

export default function logsReducer(state = initialState.logs, action) {
  switch (action.type) {
    case actions.LOGS_LOAD_SUCCESS:
      console.log("modifying store with");
      console.log(action.value);
      return action.value;
    default:
      return state;
  }
}

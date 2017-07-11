import * as actions from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function machinesReducer(state = initialState.machines, action) {
  switch (action.type) {

    default:
      return state;
  }
}

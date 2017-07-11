import * as actions from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function metaReducer(state = initialState.meta, action) {
  switch (action.type) {
    case actions.PUSH_TO_BREADCRUMB:
      return objectAssign({}, state, {breadcrumbs: [...state.breadcrumbs.slice(0, -1), action.value]});

    case actions.POP_FROM_BREADCRUMB:
      return objectAssign({}, state, {breadcrumbs: [...state.breadcrumbs.slice(0, -1)]} );

    default:
      return state;
  }
}

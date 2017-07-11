import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import metaReducer from './metaReducer';
import logsReducer from './logsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  meta: metaReducer,
  logs: logsReducer,
});

export default rootReducer;

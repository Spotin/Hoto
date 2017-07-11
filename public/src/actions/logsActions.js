import * as types from '../constants/actionTypes';
import axios from 'axios';


export function fetchLogs() {
  return function (dispatch) {
    axios.get('http://logs.spotin.io:3000/api/logs')
      .then(function (response) {
        console.log(response);
        return dispatch({
          type: types.LOGS_LOAD_SUCCESS,
          value: response.data
        })
      });
  };
}


// AXIOS

import axios from 'axios';

// ACTION EXPORTS

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';
export const SEND_SMURF_DATA_SUCCESS = 'SEND_SMURF_DATA_SUCCESS';

// AXIOS.POST DATA 

export const sendData = () => {
    return dispatch => {
        axios
        // POST
        .post('http://localhost:3333/smurfs', {
            name: '',
            age: [],
            height: '',
            id: [] // USE IF ATTEMPTING STRETCH
        })
        .then(res => {
            dispatch({ type: SEND_SMURF_DATA_SUCCESS, payload: res.data});
        })
    }
}

// AXIOS.GET DATA

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
    //GET
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data});
      })
    // CATCH
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
};
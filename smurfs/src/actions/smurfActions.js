import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_OK = 'FETCH_DATA_OK';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
export const POST_OK = 'POST_OK';
export const POST_FAIL = 'POST_FAIL';

export const fetchData = () => dispatch => {
   dispatch({type: FETCH_DATA});
   axios.get('http://localhost:3333/smurfs')
   .then(res => dispatch({type: FETCH_DATA_OK, payload: res.data}))
   .catch(err => dispatch({type: FETCH_DATA_FAIL, payload: err}))
}

export const postData = (item) => dispatch => {
   axios.post('http://localhost:3333/smurfs', item)
   .then(res => dispatch({type: POST_OK, payload: res.data}))
   .catch(err => dispatch({type: POST_FAIL, payload: err}))
}
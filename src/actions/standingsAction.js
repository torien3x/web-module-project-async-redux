
import axios from "axios";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    axios.get('https://api-nba-v1.p.rapidapi.com/standings', {
        
        params: {
          league: 'standard',
          season: '2023'
        },
        headers: {
          'X-RapidAPI-Key': 'fd7c953c4amshfa5b3215ca99ba0p1a522djsn7bafc29ea657',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      })
      .then(res => { dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.response })})
      .catch(error => {
        dispatch({ type: FETCH_DATA_FAILURE, error: error });
      }) 
  };
};
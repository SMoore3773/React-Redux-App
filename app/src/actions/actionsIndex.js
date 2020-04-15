import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    });
    axios
        .get('https://api.adviceslip.com/advice')
        .then(res=>{
            console.log('result in api request',res);
            const slip = [res.data.slip.advice];
            dispatch({type: DATA_SUCCESS, payload: slip});
        })
        .catch(err=>{
            console.log('error: ', err)
            dispatch({ type: DATA_ERROR, payload: err});
        })
}

export const searchData = (query = 'life') => dispatch =>{
    console.log('query in action', query)
    dispatch({
        type: FETCH_DATA
    });
    axios
        .get(`https://api.adviceslip.com/advice/search/${query}`)
        .then(res=>{
            console.log('result in searchdata api req',res);
            const slipArr = []
            res.data.slips.map(slip=>slipArr.push(slip.advice));
            dispatch({type: DATA_SUCCESS, payload: slipArr})
        })
        .catch(err=>{
            console.log('error in searchdata: ',err)
            dispatch({type: DATA_ERROR, payload: err})
        });
}
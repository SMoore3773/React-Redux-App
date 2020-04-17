import {FETCH_DATA, DATA_SUCCESS, DATA_ERROR} from '../actions/actionsIndex';
const initialState = {
    slip: ['Click the button to get words of wisdom'],
    error:'',
    query:'life',
    isLoading: false,
 
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DATA: 
        return{
            ...state,
            isLoading: true
        };
        case DATA_SUCCESS:
            return{
                ...state,
                slip: action.payload,
                error: '',
                isLoading:false
            }
        case DATA_ERROR:
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
    
    default:
        return state;
    };
}
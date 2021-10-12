import {Add_movie} from '../actions/index';

const initialState={
    list:[],
    favourite:[]
}
export default function movies(state=initialState,action)
{
    if(action.type===Add_movie)
    {
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}
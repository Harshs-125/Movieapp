import {Add_movie} from '../actions/index';

export default function movies(state=[],action)
{
    if(action.type===Add_movie)
    {
        return action.movies;
    }
    return state;
}
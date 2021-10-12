import {Add_movie,Add_favourite,Remove_favourite} from '../actions/index';

const initialState={
    list:[],
    favourite:[]
}
export default function movies(state=initialState,action)
{
    // if(action.type===Add_movie)
    // {
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    switch(action.type)
    {
        case Add_movie:{
            return {
                        ...state,
                        list:action.movies
                    }
        }            
        case Add_favourite:{
            return{
                ...state,
                favourite:[action.movie,...state.favourite]
            }
        }
        case Remove_favourite:{
            const favmovie=state.favourite.filter(movie=>movie.Title!==action.movie.Title)
            return {
                ...state,
                favourite:favmovie
            }
        }
        default:{
            return {
                ...state
            }
        }
    }
}
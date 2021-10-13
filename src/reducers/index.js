
import { combineReducers } from 'redux';
import {Add_movie,Add_favourite,Remove_favourite,Show_Favourites} from '../actions/index';

const initialMovieState={
    list:[],
    favourite:[],
    showFavourites:false
}
export function movies(state=initialMovieState,action)
{
    //console.log("movie-reducers");
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
        case Show_Favourites:{
            return {
                ...state,
                showFavourites:action.value
            }
        }
        default:{
            return {
                ...state
            }
        }
    }
}

const initialSearchState={
    result :{}
}
export function search(state=initialSearchState,action)
{
    //console.log("Search Reducer");
   return state;
}

const initialRootState={
    movies:initialMovieState,
    search:initialSearchState
}
// export default function rootReducer(state=initialRootState,action)
// {
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
export default combineReducers({
    movies,
    search
});
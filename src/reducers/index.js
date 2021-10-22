
import { combineReducers } from 'redux';
import {Add_movie,
        Add_favourite,
        Remove_favourite,
        Show_Favourites,
        Show_Search_Result,
        Add_Movie_to_List} from '../actions/index';

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
        case Add_Movie_to_List:{
            return {
                ...state,
                list:[action.movie,...state.list]
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
    result :{},
    showSearchResult:false
}
export function search(state=initialSearchState,action)
{
    //console.log("Search Reducer");
   switch(action.type)
   {
       case Show_Search_Result:{
           return{
               ...state,
               result:action.movie,
               showSearchResult:true
           }
       }
       case Add_Movie_to_List:{
            return{
                ...state,
                showSearchResult:false
            }
        }
       default:
           return state;

   }
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
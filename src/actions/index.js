// {
//     type:'Add-movie'
//     movies:[]
// }

//action variables;
export const Add_movie='Add_movie';
export const Add_favourite='Add_favourite';
export const Remove_favourite='Remove_favourite';
export const Show_Favourites='Show_Favourites';
export const Show_Search_Result='Show_Search_Result';
export const Add_Movie_to_List='Add_Movie_to_List';
//action creators;
export function addmovie(movies){
    return {
        type:Add_movie,
        movies
    }
}
export function addfavourite(movie){
    return {
        type:Add_favourite,
        movie
    }
}
export function removeFavourite(movie)
{
    return {
        type:Remove_favourite,
        movie
    }
}
export function setShowFavourites(value)
{  
    return {
        type:Show_Favourites,
        value
    }

}
export function handleMovieSearch(movie)
{
    const url=`http://www.omdbapi.com/?apikey=d32ebed3&t=${movie}`;
    return function (dispatch) {
        fetch(url)
     .then(response=>response.json())
     .then(movie=>{
         console.log('movie ',movie)
         //dispatch action
         dispatch(showSearchResult(movie))
     })
    }

}
export function showSearchResult(movie)
{   
    return {
        type:Show_Search_Result,
        movie
    }
}
export function addMovieToList(movie)
{
    return{
        type:Add_Movie_to_List,
        movie
    }
}
// {
//     type:'Add-movie'
//     movies:[]
// }

//action variables;
export const Add_movie='Add_movie';
export const Add_favourite='Add_favourite';
export const Remove_favourite='Remove_favourite';
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
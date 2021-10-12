// {
//     type:'Add-movie'
//     movies:[]
// }

//action variables;
export const Add_movie='Add_movie';

//action creators;
export function addmovie(movies){
    return {
        type:Add_movie,
        movies
    }
}
export default function movies(state=[],action)
{
    if(action.type==='Add-movie')
    {
        return action.movies;
    }
    return state;
}
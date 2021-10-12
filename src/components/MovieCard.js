import React from 'react';

import {addfavourite,removeFavourite} from '../actions/index';
class MovieCard extends React.Component{
    
    handleClickFavourite=()=>{
      const { movie }=this.props
      this.props.dispatch(addfavourite(movie));
      console.log("updated");
    }
    handleRemoveFavourite=()=>{
        const {movie}=this.props
        this.props.dispatch(removeFavourite(movie))
        console.log(this.props.store.getState());

    }
    render(){
        const {movie}=this.props;
        return(
         <div className="movie-card">
         <div className="left">
             <img src={movie.Poster}></img>
         </div>
         <div className="right">
             <div className="title">{movie.Title}</div>
             <div className="plot">{movie.Plot}</div>
             <div className="footer">
              <div className="rating">{movie.imdbRating}</div>
              {
                this.props.isfavourite?<button className="unfavourite-btn" onClick={this.handleRemoveFavourite}>Remove from favourite</button>:<button className="favourite-btn" onClick={this.handleClickFavourite}>Add to favourite</button>
              }
             </div>
         </div>
           
         </div>
        )
    }
}
export default MovieCard
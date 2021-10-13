import React from 'react';
import Navbar from './Navbar';
import MovieCard  from './MovieCard';


import { data } from '../data';
import {addmovie,addfavourite,setShowFavourites} from '../actions/index';
class App extends React.Component {
  componentDidMount(){
     const {store} = this.props;
     
     store.subscribe(()=>{
       console.log("updated");
       this.forceUpdate();
     });
     //make api call
     //dispatch action
     store.dispatch(addmovie(data))

     console.log(store.getState());
  }
  isMoviefavourite=(movie)=>{
    const {movies}=this.props.store.getState();
    const {favourite}=movies;
    const index=favourite.indexOf(movie);
    if(index!==-1)
    {
        return true;
    }
    else
    {
        return false;
    }  
  }
  handleClick=(value)=>{
   this.props.store.dispatch(setShowFavourites(value));
  }
  
  render(){
    console.log("Render", this.props.store.getState());
    const {movies}=this.props.store.getState();
    const {list,favourite,showFavourites}=movies;
    const display=showFavourites? favourite:list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites? ' ':'active-tabs'}`} onClick={() => this.handleClick(false)} >Movie</div>
            <div className={`tab ${showFavourites? 'active-tabs':''}`} onClick={()=> this.handleClick(true)}>Favourites</div>
          </div>
          <div className="list">
            {display.map((movie,index)=>(
              <MovieCard movie={movie} key={index} dispatch={this.props.store.dispatch}
                isfavourite={this.isMoviefavourite(movie)}
                store={this.props.store}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Navbar from './Navbar';
import MovieCard  from './MovieCard';


import { data } from '../data';
import {addmovie,addfavourite,setShowFavourites} from '../actions/index';
import { connect } from '../index';
class App extends React.Component {
  componentDidMount(props){
     //make  api call
     //dispatch action
     this.props.dispatch(addmovie(data))
      console.log("data",data);
      console.log(this.props);
     //console.log(this.props.store.getState());
  }
  isMoviefavourite=(movie)=>{
    const {movies}=this.props;
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
   this.props.dispatch(setShowFavourites(value));
  }
  
  render(){
    console.log("Render", this.props);
    const {movies,search}=this.props;
    const {list,favourite,showFavourites}=movies;
    const display=showFavourites? favourite:list;

    return(
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites? ' ':'active-tabs'}`} onClick={() => this.handleClick(false)} >Movie</div>
            <div className={`tab ${showFavourites? 'active-tabs':''}`} onClick={()=> this.handleClick(true)}>Favourites</div>
          </div>
          <div className="list">
            {display.map((movie,index)=>(
              <MovieCard movie={movie} key={index} dispatch={this.props.dispatch}
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
// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store)=> <App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapstatetoprops(state){
  return {
    movies:state.movies,
    search:state.search
  }
}
const connectedcomponent=connect(mapstatetoprops)(App);

export default connectedcomponent;

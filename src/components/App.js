import React from 'react';
import Navbar from './Navbar';
import MovieCard  from './MovieCard';


import { data } from '../data';
import {addmovie,addfavourite} from '../actions/index';
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
    const {favourite}=this.props.store.getState();
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
  handleTabClick=(event)=>{
    console.log(get)
  }

  render(){
    console.log("Render", this.props.store.getState());
    const {list}=this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={this.handleTabClick}>Movie</div>
            <div className="tab" onClick={this.handleTabClick}>Favourites</div>
          </div>
          <div className="list">
            {list.map((movie,index)=>(
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

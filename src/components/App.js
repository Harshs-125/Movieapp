import React from 'react';
import Navbar from './Navbar';
import MovieCard  from './MovieCard';


import { data } from '../data';
import {addmovie} from '../actions/index';
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
  render(){
    console.log("Render");
    const movies=this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movie</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie,index)=>(
              <MovieCard movie={movie} key={index}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

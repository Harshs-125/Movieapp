import React from 'react';
import { Component } from 'react';
import { StoreContext } from '..';

import {handleMovieSearch,Show_Search_Result,addMovieToList} from '../actions/index'

class Navbar extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            searchText:'',
            //showSearchResult:false
        };
    }

    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }

    handleSearch=()=>{
        const{searchText}=this.state;
        this.props.dispatch(handleMovieSearch(searchText));
        
    }
    handleAddtoMovies=(result)=>{
        this.props.dispatch(addMovieToList(result));
    }
  
render(){
    const {result,showSearchResult}=this.props.search;
    console.log(result.Title);
    return (
        <div className="nav">
            <div className="search-container">
                <input type="text" placeholder="Enter Movie name" onChange={this.handleChange} value={this.state.searchText} />
                <button id="search-btn" onClick={this.handleSearch}>Search</button>
            
            {showSearchResult&&
            <div className="search-results">
                <div className="search-result">
                    <img src={result.Poster} alt="search-pic"/>
                    <div className="movie-info">
                        <span>{result.Title}</span>
                        <button onClick={()=>this.handleAddtoMovies(result)}>Add To Movies</button>
                    </div>
                </div>
            </div>
            }
            </div>
        </div>
    )
}

}
class NavWrapper extends React.Component{
    render(){
        return(
            <StoreContext.Consumer>
                {(store)=><Navbar dispatch={store.dispatch} search={this.props.search}/>}
            </StoreContext.Consumer>
        )
    }
}
export default NavWrapper
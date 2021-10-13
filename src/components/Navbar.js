import React from 'react';
import { Component } from 'react';

import {handleMovieSearch} from '../actions/index'

class Navbar extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
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
  
render(){
    
    return (
        <div className="nav">
            <div className="search-container">
                <input type="text" placeholder="Enter Movie name" onChange={this.handleChange} value={this.state.searchText} />
                <button id="search-btn" onClick={this.handleSearch}>Search</button>
            </div>
        </div>
    )
}

}
export default Navbar
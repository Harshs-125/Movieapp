import React from 'react';
import { Component } from 'react';

class Navbar extends React.Component {
render(){
    return (
        <div className="nav">
            <div className="search-container">
                <input type="text" placeholder="Enter Movie name" />
                <button id="search-btn">Search</button>
            </div>
        </div>
    )
}

}
export default Navbar
//API KEY FOR OMDB d32ebed3.
//http://www.omdbapi.com/?apikey=[yourkey]&

import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

//function logger(obj,next,action)
// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       //Middleware Code
//       console.log("Action-type =",action.type);
//       next(action);
//     }
//   }
// }
//modified middleWare
const logger= ({dispatch,getState})=> (next)=> (action)=>{
  //console.log("Action-type =",action.type);
  next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action==="function")
//   {
//    action(dispatch);
//    return
//   }
//   next(action);

// }
const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log("before action-",store.getState());
export const StoreContext=createContext(); 
class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return(
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';
import { ConnectionPoolClosedEvent } from 'mongodb';

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
  console.log("Action-type =",action.type);
  next(action);
}
const store=createStore(rootReducer,applyMiddleware(logger));
console.log("before action-",store.getState());

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);


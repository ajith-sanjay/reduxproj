import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { combineReducers , createStore } from 'redux';
import {productsreducer} from './reducers/productReducers';
import {usersreducer} from './reducers/userReducers';
import { Provider } from 'react-redux';

const allReducers = combineReducers({
	products : productsreducer,
	users : usersreducer
})
const store = createStore(allReducers , {
	products : [{name : "flipkart"}],
	users : 'ajith'
});
console.log(store.getState());
/*
const updateUserAction = {
	type : 'userUpdate',
	payload : {"name" : 'amazon' }
}
store.dispatch(updateUserAction);
console.log(store.getState());*/	
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('app'));
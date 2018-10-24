import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {updateUser} from './actions/user-actions';


class App extends React.Component {
   constructor(props) {
    super(props);
		this.onUpdateUser = this.onUpdateUser.bind(this);  
	   };
	   onUpdateUser(){
		  
		   this.props.onUpdateUser('saamay');
	   }
   render() {
	   console.log(this.props);
      return (
         <div>
            ajith
			<div onClick = {this.onUpdateUser}>click me</div>
			<div>{this.props.users}</div>
			
         </div>
      )
   }
}
const mapStateToProps = state =>({
	products : state.products,
	users : state.users
	
});
const mapActionToProps = {
	onUpdateUser : updateUser
	
};
export default connect(mapStateToProps , mapActionToProps)(App);



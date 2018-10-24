import {UPDATE_USER} from '../actions/user-actions';
export function usersreducer(state = '',{type , payload}){
	
	switch(type){
		case UPDATE_USER:
			return payload.users;
		default : 
			return state;
	}
	
}
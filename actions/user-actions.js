export const UPDATE_USER = "users:updateUser";


export function updateUser(newuser){
	alert();
	return {
		type : UPDATE_USER,
		payload : {users : newuser}
	};
	
}
import { api } from "./myFetch";
// Get all users
export function GetAll() { return api('users'); }

// Get user by user ID
export function Get(user_id) { return  api('users/' + user_id); }

// Get user by handle
export function GetByHandle(handle) { return  api('users/byhandle/' + handle); } 

// Add new user
export function Add(user) {
     return api('users/register', user);
}

// Update user by user ID and user
export function Update(user_id, user) {
    return api('users/' + user_id, user, 'PATCH');
}

// Delete user by user ID
export function Delete(user_id) {
    return api('users/' + user_id, {}, 'DELETE');
}

// Log in by user handle and user password
export function Login(handle, password){
    return api('users/login', { handle, password });
}
// VERY unfinished
// Register new user by user handle and user password
// export function Register(handle, password){
//     return api('users/register', { firstname, lastname, handle, password, email });
//     // return api('users/login', { handle, password});
// }
import { api } from "./myFetch";

// Get all users
export function GetAll() { return api('users'); }

// Get user by ID
export function Get(user_id) { return  api('users/' + user_id); }

// Get user by handle
export function GetByHandle(handle) { return  api('users/byhandle/' + handle); } 

// Add new user
export function Add(user) {
    return api('users/register', user);
}

// Update user
export function Update(user_id, user) {
    return api('users/' + user_id, user, 'PATCH');
}

// Remove user
export function Delete(user_id) {
    return api('users/' + user_id, {}, 'DELETE');
}

// Log in
export function Login(handle, password){
    return api('users/login', { handle, password });
}
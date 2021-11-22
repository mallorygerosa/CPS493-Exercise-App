import { api } from "./myFetch";

// Get all posts
export function GetAll() {
    return api('posts');
}

// Get user posts with handle
export function GetWall(handle) {
    return api('posts/wall/' + handle);
}

// Get user and friend posts and handles
export function GetFeed(handle) { 
    return api('posts/feed/' + handle);   
}

// Get post by post ID
export function Get(post_id) { return api('posts/' + post_id); }

// Add post
export function Add(post) {
     return api('posts', post);
}

// Update post and post ID
export function Update(post_id, post) {
    return { post_id, post};
}

// Delete post and post ID
export function Delete(post_id) {
    return api('posts/' + post_id, {}, 'DELETE');
} 
import { api } from "./myFetch";

// Get all posts
export function GetAll() {
    return api('posts');
}

// Get all posts by a user
export function GetWall(handle) {
    return api('posts/wall/' + handle);
}

// Get all posts by a user and friends
export function GetFeed(handle) {
    return api('posts/feed/' + handle);
}

// Get post by ID
export function Get(post_id) {
    return api('posts/' + post_id);
}

// Add post
export function Add(post) {
    return api('posts', post);
}

// Update post
export function Update(post_id, post) {
    return {
        post_id,
        post
    };
}

// Delete post
export function Delete(post_id) {
    return api('posts/' + post_id, {}, 'DELETE');
}
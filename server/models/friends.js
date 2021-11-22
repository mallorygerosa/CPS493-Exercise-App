const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

// Use the models/users
// Follow user by new friend and user
function Follow(follower, followee) {
    return collection.updateOne(
        { handle: follower, "following.handle": { $ne: followee} },
        { $addToSet : { following: { handle: followee, isApproved: false } } }
    );
}
// Unfollow user by new friend and user
function UnFollow(follower, followee) {
    return collection.updateOne(
        { handle: follower },
        { $pull : { following: { handle: followee } } }
    );    
}
// Accept friend by new friend, user, and approval
function Approve(follower, followee, shouldApprove) {
    return collection.updateOne(
        { handle: follower, "following.handle": followee },
        { $set : { "following.$.isApproved": shouldApprove } }
    );  
}
// Get all followers by user
function GetFollowers(followee) {
    throw { msg: 'Not Implemented: Not sure yet whether to denormalize the database' }
}

module.exports = {
    Follow, UnFollow, Approve, 
}
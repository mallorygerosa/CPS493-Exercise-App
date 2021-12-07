const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('users');
module.exports.collection = collection;

// Uses the users model
// Add friend
function Follow(follower, followee) {
    return collection.updateOne(
        { handle: follower, "following.handle": { $ne: followee} },
        { $addToSet : { following: { handle: followee, isApproved: false } } }
    );
}

// Remove friend
function UnFollow(follower, followee) {
    return collection.updateOne(
        { handle: follower },
        { $pull : { following: { handle: followee } } }
    );    
}
// Approve friend request
function Approve(follower, followee, shouldApprove) {
    return collection.updateOne(
        { handle: follower, "following.handle": followee },
        { $set : { "following.$.isApproved": shouldApprove } }
    );  
}

module.exports = {
    Follow, UnFollow, Approve, 
}
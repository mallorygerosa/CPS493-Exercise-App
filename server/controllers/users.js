const express = require("express");
const model = require("../models/users");
const friends = require("../models/friends");

const app = express.Router();

// Use models/users functions
app
    // Get user by user ID
    .get("/", (req, res, next) =>{
        res.send(model.GetAll());
    })

    // Get user ID by user
    .get("/:user_id", (req, res, next) =>{
        model.Get(req.params.user_id)
           .then(user=>{ 
               res.send(user);
           })
           .catch(next) 
   })

    // Get user by handle
    .get("/byhandle/:handle", (req, res, next) =>{
        model.GetByHandle(req.params.handle)
            .then(user=>{ 
                res.send(user);
            })
            .catch(next) 
    })

    // Change user ID
    .patch("/:user_id", (req, res, next) =>{

        model   .Update(req.params.user_id, req.body)
                .then( user=> res.send(user) )
                .catch(next) 

    })

    // Delete user ID
    .delete("/:user_id", (req, res, next) =>{

        model   .Delete(req.params.user_id)
                .then( user=> res.send({ deleted: user }) )
                .catch(next) 

    })

    // Add follower by passing new follower and user
    .post("/:follower/follow/:followee", (req, res, next) =>{

        friends.Follow(req.params.follower, req.params.followee)
            .then(response=>{
                if(response.modifiedCount){
                    res.send({ success: true });                    
                }else{
                    throw { code: 409, msg: "You are already following or trying to follow " + req.params.followee }
                } 
            })
            .catch(next) 

    })

    // Delete follower by passing new follower and user
    .delete("/:follower/follow/:followee", (req, res, next) =>{

        friends.UnFollow(req.params.follower, req.params.followee)
            .then(response=>{
                if(response.modifiedCount){
                    res.send({ success: true });                    
                }else{
                    throw { code: 404, msg: "You aren't following or trying to follow " + req.params.followee }
                } 
            })
            .catch(next) 

    })

    // Edit follow request approval status
    .patch("/:follower/approve/:followee", (req, res, next) =>{

        friends.Approve(req.params.follower, req.params.followee, req.body.shouldApprove)
            .then(response=>{
                if(response.modifiedCount){
                    res.send({ success: true });                    
                }else{
                    throw { code: 409, msg:  req.params.follower + " hasn't request to follow you." }
                } 
            })
            .catch(next) 

    })

    // Change to user by passing user handle and password
    .post("/login", (req, res, next) =>{

        model.Login(req.body.handle, req.body.password)
            .then(user=>{ 
                res.send(user);
            })
            .catch(next) 

    })
    
    // Change to new user by passing all user information
    .post("/register", (req, res, next) =>{
        model.Add(req.body)
            .then(user=>{
                res.status(201).send(user);
            })
            .catch(next) 
    })
module.exports = app;
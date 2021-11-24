const express = require("express");
const model = require("../models/posts");
const comments = require("../models/comments");

const app = express.Router();

// Uses models/posts functions
app
    // Get all parts of a post
    .get("/", (req, res, next) =>{
        model   .GetAll()
                .then( x=> res.send(x) )
                .catch(next) 
    })

    // Get all posts made by user
    .get("/wall/:handle", (req, res, next) =>{
        model   .GetWall(req.params.handle)
                .then( x=> res.send(x) )
                .catch(next)    
    })

    // Get all posts made by user and user's friends 
    .get("/feed/:handle", (req, res, next) =>{
        model   .GetFeed(req.params.handle)
                .then( x=> res.send(x) )
                .catch(next)    
    })

    // Search for a post by comment
    .get("/search", (req, res, next) =>{
        model   .Search(req.query.q)
                .then( x=> res.send(x) )
                .catch(next)    
    })

    // Get a comment by post ID
    .get("/comments/:id", (req, res, next) =>{
        comments.Get(req.params.id)
                .then( x=> res.send(x) )
                .catch(next)    
    })

    // Add a comment by post ID
    .post("/:id/comments", (req, res, next) =>{
        comments.Add(req.params.id, req.body)
                .then( x=> res.status(201).send(x.insertedComment) )
                .catch(next)
    })

    // Edit comment by post ID
    .patch("/comments/:id", (req, res, next) =>{
        comments.Update(req.params.id, req.body)
                .then( x=> res.send(x) )
                .catch(next) 
    })

    // Delete comment by post ID
    .delete("/comments/:id", (req, res, next) =>{
        comments.Delete(req.params.id)
                .then( x=> res.send({ deleted: x }) )
                .catch(next) 
    })

    // Get post ID
    .get("/:id", (req, res, next) =>{
        model   .Get(req.params.id)
                .then( x=> res.send(x) )
                .catch(next)    
    })

    // Add post
    .post("/", (req, res, next) =>{
        model   .Add(req.body)
                .then( x=> res.status(201).send(x) )
                .catch(next)
    })

    // Edit a post by post ID
    .patch("/:id", (req, res, next) =>{
        model   .Update(req.params.id, req.body)
                .then( x=> res.send(x) )
                .catch(next) 
    })

    // Delete a post by post ID
    .delete("/:id", (req, res, next) =>{
        model   .Delete(req.params.id)
                .then( x=> res.send({ deleted: x }) )
                .catch(next) 
    })
    
    // Get initial posts
    .post("/seed", (req, res, next) =>{
        model   .Seed()
                .then( x=> res.status(201).send("Created") )
                .catch(next)
    })
module.exports = app;
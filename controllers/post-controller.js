const express = require('express');
const router = express.Router();

const mongodb = require('mongodb');

const { id } = mongodb.ObjectId;

const URL = `http://localhost:4000/post/${id}`;

// import model (Post)
const { Post } = require('../models');

const db = require('../models'); // db.Post
// const Post = require('../models/Post')

console.log(Post);

// Routes
// http://localhost:4000/post/
///////////////////////////////
// ROUTES
////////////////////////////////

// POST INDEX ROUTE
router.get('/', async (req, res) => {
  try {
    // get all post
    res.json(await Post.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// POST CREATE ROUTE
router.post('/', async (req, res) => {
  try {
    // send all post
    res.json(await Post.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// POST SHOW ROUTE
router.get('/:id', async (req, res) => {
  try {
    // get post by ID
    res.json(await Post.findById(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// POST UPDATE ROUTE
router.put('/:id', async (req, res) => {
  try {
    // update post by ID
    res.json(
      await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// POST DELETE ROUTE
router.delete('/:id', async (req, res) => {
  try {
    // delete post by ID
    res.json(await Post.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = router;

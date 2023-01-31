const express = require('express');
const router = express.Router();

// import model (Post)
const { Post } = require('../models');

const db = require('../models'); // db.Post
// const Post = require('../models/Post')

console.log(Post);

// Routes
// http://localhost:4000/post/
router.get('/', async (req, res) => {
  // res.status(200).json({message: "Post index/get route"})
  try {
    const allPost = await Post.find({});
    res.status(200).json(allPost);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/post/
router.post('/', async (req, res) => {
  // console.log('post route', req.body)
  // res.status(201).json({message: "Post create/post route"})

  try {
    //
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Post/:id - GET
router.get('/:id', async (req, res) => {
  // res.status(200).json({message: "Post show/get route /Post/"+req.params.id})
  try {
    const foundPost = await Post.findById(req.params.id);
    res.status(200).json(foundPost);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
// http://localhost:4000/Post/:id - DELETE
router.delete('/:id', async (req, res) => {
  // res.status(200).json({message: "Post destroy/delete route /Post/"+req.params.id})
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPost);
  } catch (err) {
    // console.log(err)
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Post/:id - PUT
router.put('/:id', async (req, res) => {
  // res.status(200).json({message: "Post update/put route /Post/"+req.params.id})
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;

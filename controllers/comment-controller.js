const express = require('express');
const router = express.Router();

const mongodb = require('mongodb');
const { id } = mongodb.ObjectId;

// import model (Comment)
const { Comment } = require('../models');

const db = require('../models'); // db.Comment
// const Comment = require('../models/Comment')

console.log(Comment);

// Routes
// http://localhost:4000/comment/
///////////////////////////////
// ROUTES
////////////////////////////////

// COMMENT INDEX ROUTE
router.get('/', async (req, res) => {
  try {
    // get all comment
    res.json(await Comment.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// COMMENT CREATE ROUTE
router.post('/', async (req, res) => {
  try {
    // send all comment
    res.json(await Comment.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// COMMENT SHOW ROUTE
router.get('/:id', async (req, res) => {
  try {
    // get comment by ID
    res.json(await Comment.findById(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// COMMENT UPDATE ROUTE
router.put('/:id', async (req, res) => {
  try {
    // update comment by ID
    res.json(
      await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// COMMENT DELETE ROUTE
router.delete('/:id', async (req, res) => {
  try {
    // delete comment by ID
    res.json(await Comment.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = router;

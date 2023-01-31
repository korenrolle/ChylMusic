const express = require('express');
const router = require('express').Router();

const { Comment } = require('../models/Comment');
const { Post } = require('../models/Post');

// Routes

router.get('/', async (req, res) => {
  try {
    const allComments = await Comment.find({});
    res.status(200).json(allComments);
  } catch (error) {
    res.status(400).json({ error: err });
  }
});
router.post('/', async (req, res) => {
  try {
    const postId = req.body.postId;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ error: 'Post not found' });
    }
    const newComment = await Comment.create({ ...req.body, post: postId });
    post.comments.push(newComment._id);
    await post.save();
    res.status(201).json(newComment);
  } catch (err) {
    // Validate the request
    res.status(400).json({ error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const foundComment = await Comment.findById(req.params.id);
    res.status(200).json(foundComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;

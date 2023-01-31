const express = require('express');
const router = require('express').Router();

const { Comment } = require('../models/');

const db = require('../models');

console.log(Comment);

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
    const newComment = await Comment.create(req.body);
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
    const deletedComment = await People.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await People.findByIdAndUpdate(
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

// routes/postRoutes.js
const express = require('express');
const { createPost, getAllPosts, getPostsByUser } = require('../controllers/postController');

const router = express.Router();

// Route to create a new post
router.post('/', createPost);

// Route to get all posts
router.get('/', getAllPosts);

// Route to get posts by a particular user
router.get('/:userId', getPostsByUser);

module.exports = router;
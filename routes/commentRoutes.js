// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const { createComment, createReply, getPostComments } = require('../controllers/commentController');

// Route to create a new comment
router.post('/', createComment);

// Route to reply to a comment
router.post('/reply', createReply);

// Route to get all comments for a specific post
// router.get('/:postId', getPostComments);

module.exports = router;
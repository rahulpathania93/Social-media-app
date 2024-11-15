// controllers/commentController.js
const { createComment, createReply, getPostComments } = require('../services/commentService');

// Create a new comment on a post
exports.createComment = async(req, res) => {
    const { postId, commentText, username } = req.body; // Assuming `username` is passed in request
    try {
        const comment = await createComment(postId, username, commentText);
        res.json({ message: '------Comment created successfully--------', comment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Reply to an existing comment
exports.createReply = async(req, res) => {
    const { commentId, replyText, username } = req.body; // Assuming `username` is passed in request
    try {
        const updatedComment = await createReply(commentId, username, replyText);
        res.json({ message: '-------Reply added successfully------', updatedComment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all comments and replies for a post
// exports.getPostComments = async(req, res) => {
//     const { postId } = req.params;
//     try {
//         const comments = await getPostComments(postId);
//         res.json({ comments });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
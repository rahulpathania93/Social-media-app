// services/commentService.js
const Comment = require('../models/commentModel');

const createComment = async(postId, username, commentText) => {
    const comment = new Comment({
        postId,
        username,
        comment: commentText,
        replies: [],
    });
    await comment.save();
    return comment;
};

const createReply = async(commentId, username, replyText) => {
    const comment = await Comment.findById(commentId);
    if (!comment) {
        throw new Error('------Comment not found--------');
    }

    comment.replies.push({ username, reply: replyText });
    await comment.save();
    return comment;
};

// const getPostComments = async(postId) => {
//     return await Comment.find({ postId }).populate('replies.repliedBy', 'username');
// };

module.exports = { createComment, createReply };
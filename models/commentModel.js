// models/commentModel.js
const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    username: { type: String, required: true },
    reply: { type: String, required: true },
}, { timestamps: true });

const commentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    comment: { type: String, required: true },
    username: { type: String, required: true },
    replies: [replySchema], // Array of replies
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
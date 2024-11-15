// services/postService.js
const Post = require('../models/postModel');

exports.createPostService = async({ title, description, picture, userId, username }) => {
    try {
        // Create a new post with the userId and username included
        const newPost = new Post({
            title,
            description,
            picture,
            userId,
            username,
        });

        // Save the post to the database
        await newPost.save();

        return newPost;
    } catch (error) {
        throw new Error('======Error saving post===: ' + error.message);
    }
};

const getAllPosts = async() => {
    return await Post.find().populate('user', 'name');
};

const getUserPosts = async(userId) => {
    return await Post.find({ user: userId }).populate('user', 'name');
};

module.exports = { getAllPosts, getUserPosts };
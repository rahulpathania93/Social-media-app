const Post = require('../models/postModel');
const User = require('../models/userModel');

// Function to create a post
const createPost = async(req, res) => {
    const { title, description, picture } = req.body;
    try {
        // Get userId and username (Assume `req.user` is populated with logged-in user's data)
        const userId = req.body.userId; // You can send userId from the request body
        const user = await User.findById(userId); // Find the user by userId

        if (!user) {
            return res.status(400).json({ message: '---User not found---' });
        }

        // Create a new post with the userId and username
        const newPost = new Post({
            title,
            description,
            picture,
            userId,
            username: user.name,
        });

        await newPost.save();

        return res.status(201).json({
            message: 'Post created successfully',
            post: newPost,
        });
    } catch (error) {
        return res.status(500).json({ message: '----Error occurred---', error });
    }
};

// Function to get all posts
const getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find();
        return res.status(200).json({ posts });
    } catch (error) {
        return res.status(500).json({ message: '-----Error occurred-----', error });
    }
};

// Function to get posts by a particular user
const getPostsByUser = async(req, res) => {
    const userId = req.params.userId;
    try {
        const posts = await Post.find({ userId });
        return res.status(200).json({ posts });
    } catch (error) {
        return res.status(500).json({ message: '-----Error occurred----', error });
    }
};

module.exports = { createPost, getAllPosts, getPostsByUser };
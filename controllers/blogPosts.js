const BlogPost = require('../models/blogPost');
const Comment = require('../models/comment');

exports.create = async function (req, res) {
	try {
		const blogPost = await BlogPost.create(req.body);
		res.json(blogPost);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.index = async function (req, res) {
	try {
		const blogPosts = await BlogPost.find({});
		res.json({ blogPosts });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.show = async function (req, res) {
	try {
		const blogPost = await BlogPost.find({ _id: req.params.blogPostId });
		res.json(blogPost);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.update = async function (req, res) {
	try {
		const blogPost = await BlogPost.findOneAndUpdate(
			{ _id: req.params.blogPostId },
			req.body,
			{ new: true }
		);
		res.json(blogPost);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.delete = async function (req, res) {
	try {
		const blogPost = await BlogPost.findOneAndDelete({
			_id: req.params.blogPostId
		});
		blogPost.comments.forEach(async (comment) => {
			await Comment.findOneAndDelete(comment._id);
		});
		res.sendStatus(204);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

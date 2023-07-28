/*------------ IMPORT MODELS ------------*/
const BlogPost = require('../models/blogPost');
const Comment = require('../models/comment');

/*------------ BLOG POST CONTROLLERS ------------*/
// create a blog post
exports.create = async function (req, res) {
	try {
		const blogPost = await BlogPost.create(req.body);
		res.json(blogPost);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// blog posts index (show all blog posts)
exports.index = async function (req, res) {
	try {
		const blogPosts = await BlogPost.find({});
		res.json(blogPosts);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// show a blog post
exports.show = async function (req, res) {
	try {
		const blogPost = await BlogPost.findOne({
			_id: req.params.blogPostId
		}).populate({ path: 'comments' });
		res.json(blogPost);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// update a blog post
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

// delete a blog
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

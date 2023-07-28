const Comment = require('../models/comment');

exports.create = async function (req, res) {
	try {
		const comment = await Comment.create(req.body);
		res.json(comment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.index = async function (req, res) {
	try {
		const comments = await Comment.find({});
		res.josn({ comments });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.show = async function (req, res) {
	try {
		const comment = await Comment.find({ _id: req.params.commentId });
		res.json(comment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.update = async function (req, res) {
	try {
		const comment = await Comment.findOneAndUpdate(
			{ _id: req.params.commentId },
			req.body,
			{ new: true }
		);
		res.json(comment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.delete = async function (req, res) {
	try {
		const comment = await Comment.findOneAndDelete({
			_id: req.params.commentId
		});
		res.sendStatus(204);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

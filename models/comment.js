/*------------ IMPORT MODEL AND SCHEMA FROM MONGOOSE ------------*/
const { model, Schema } = require('mongoose');

/*------------ COMMENT SCHEMA ------------*/
const commentSchema = new Schema(
	{
		name: { type: String, required: true },
		message: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

/*------------ COMMENT MODEL ------------*/
const Comment = model('Comment', commentSchema);

/*------------ EXPORT COMMENT MODEL ------------*/
module.exports = Comment;

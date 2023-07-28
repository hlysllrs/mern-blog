/*------------ IMPORT MODEL AND SCHEMA FROM MONGOOSE ------------*/
const { model, Schema } = require('mongoose');

/*------------ BLOG POST SCHEMA ------------*/
const blogPostSchema = new Schema(
	{
		title: { type: String, required: true },
		body: { type: String, required: true },
		comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
	},
	{
		timestamps: true
	}
);

/*------------ BLOG POST MODEL ------------*/
const BlogPost = model('BlogPost', blogPostSchema);

/*------------ EXPORT BLOG POST MODEL ------------*/
module.exports = BlogPost;

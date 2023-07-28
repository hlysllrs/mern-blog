const { model, Schema } = require('mongoose');

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

const BlogPost = model('BlogPost', blogPostSchema);

module.exports = BlogPost;

/* IMPORTS */
const express = require('express');
const blogPostRoutes = require('./routes/blogPosts');

/* CREATE EXPRESS APP */
const app = express();

/* MIDDLEWARE */
app.use(express.json());
if (process.env.NODE_ENV !== 'development') {
	app.use(express.static('public'));
}
app.use('/api/blog', blogPostRoutes);

/* EXPORTS */
module.exports = app;

/*------------ IMPORT EXPRESS AND BLOG ROUTER ------------*/
const express = require('express');
const blogPostRouter = require('./routes/blogPosts');

/*------------ CREATE EXPRESS APP ------------*/
const app = express();

/*------------ MIDDLEWARE ------------*/
// express.json
app.use(express.json());
// express.static
app.use(express.static('public'));
// mount routes at /api/blog
app.use('/api/blog', blogPostRouter);

/*------------ EXPORT APP ------------*/
module.exports = app;

/* IMPORTS */
const express = require('express');
const router = express.Router();
const commentRoutes = require('./comments');
const blogPostCtrl = require('../controllers/blogPosts');

/* ROUTES */
// Create
router.post('/', blogPostCtrl.create);

// Index
router.get('/', blogPostCtrl.index);

// Show
router.get('/:blogPostId', blogPostCtrl.show);

// Update
router.put('/:blogPostId', blogPostCtrl.update);

// Delete
router.delete('/:blogPostId', blogPostCtrl.delete);

/* MIDDLEWARE */
// assign comments router as a child router of blog posts router
router.use('/:blogPostId/comments', commentRoutes);

/* EXPORTS */
module.exports = router;

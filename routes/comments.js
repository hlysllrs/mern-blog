/* IMPORTS */
const express = require('express');
const router = express.Router({ mergeParams: true });
const commentCtrl = require('../controllers/comments');

/* ROUTES */
// Create
router.post('/', commentCtrl.create);

// Index
router.get('/', commentCtrl.index);

// Show
router.get('/:commentId', commentCtrl.show);

// Update
router.put('/:commentId', commentCtrl.update);

// Delete
router.delete('/:commentId', commentCtrl.delete);

/* EXPORTS */
module.exports = router;

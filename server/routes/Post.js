const express = require('express');
const router = express.Router();

const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require('../controllers/Post');

router.post('/posts', createPost);
router.get('/posts', getPosts);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;

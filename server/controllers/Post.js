const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      desc: req.body.desc,
    });

    res.json({
      status: 'success',
      result: post,
    });
  } catch (err) {
    res.json({
      status: 'error',
      error: err,
    });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts.length === 0) return new Error('There are no posts to show');

    res.json({
      status: 'success',
      result: posts,
    });
  } catch (err) {
    res.json({
      status: 'error',
      error: err,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({
      status: 'success',
      result: post,
    });
  } catch (err) {
    res.json({
      status: 'error',
      error: err,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({
      status: 'success',
      result: null,
    });
  } catch (err) {
    res.json({
      status: 'error',
      error: err,
    });
  }
};

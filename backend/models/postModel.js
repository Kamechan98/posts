const asyncHandler = require('express-async-handler')
const Post = require('../schemas/postSchema')

exports.getAll = asyncHandler(async (req, res) => {
  const data = await Post.find()
  res.status(200).json(data)
})

exports.createPost = asyncHandler(async (req, res) => {
  const { title, postHTML } = req.body;
  const post = await Post.create({ title, postHTML })
  res.status(201).json(post)
})
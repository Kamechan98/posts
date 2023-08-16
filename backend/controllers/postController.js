const router = require('express').Router();
const { getAll, createPost } = require('../models/postModel');


router.get('/', getAll);
router.post('/', createPost);

module.exports = router;
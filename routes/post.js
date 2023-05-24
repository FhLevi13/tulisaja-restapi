const express = require('express')
const router = express.Router() 
const Post = require('../models/Post')

router.post('/', async(req, res) => {
    try {
        // simpan data 
        const post = await Post.find()
        // response
        res.json(post)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router
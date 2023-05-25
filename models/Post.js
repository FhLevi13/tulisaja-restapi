const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    // Buat Schema data
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null
    }
}, {
    versionKey: false}
)

module.exports = mongoose.model('Post', postSchema, 'post')
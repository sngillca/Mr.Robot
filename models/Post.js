const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    username: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        requried: true
    }

});


module.exports = mongoose.model('Post', PostSchema);
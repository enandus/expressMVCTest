let mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    class: {
        type: String
    },
    gender: {
        type: String,
        required: true
    }
})

let userModel = mongoose.model('Users', userSchema)

module.exports = userModel
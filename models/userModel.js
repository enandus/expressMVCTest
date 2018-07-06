import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String
        }
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
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,

    }

})

let userModel = model('Users', userSchema)

export default userModel
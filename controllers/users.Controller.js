let User = require('../models/userModel')

const userController = {}

userController.createUser = (req, res) => {
    User.create({
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        gender: req.body.gender
    }, (err, user) => {
        if (err) {
            res
                .status(400)
                .json(err) // because mongoDb send data in json format
        }else{
            res
                .status(201)
                .json(user)

        }
    })
}

userController.findUser = (req, res) => {
    User.find({name: req.params.name}, 'name gender', (err, user) => {
        if (err) {
            res
                .status(400)
                .json(err)
                console.log('Error')
        }
        else {
            res
                .json(user)
                console.log('User Found')
        }
    })
}

userController.deleteUser = (req, res) => {
    User.deleteOne({name: req.params.name})
        .where('age')
        .gt('25')
        .exec((err, user) => {
            if (err) {
                res
                    .status(400)
                    .json(err)
            }
            else {
                res
                    .status(200)
                    .json(user)
            }
        })
}

userController.updateUser = (req, res) => {
    // console.log(req.params)
    User.update({gender: req.params.value})
        .where('name')
        .equals(req.params.name)
        .exec((err, user) => {
            if (err) {
                res
                    .status(400)
                    console.log(err)
            }
            else {
                res
                    .status(200)
                    .json(user)
                    console.log('Updated User - ' , user)
            }
        })
}

module.exports = userController
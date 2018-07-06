import { create, find, deleteOne, update } from '../models/userModel';

const userController = {}

userController.createUser = (req, res) => {
    create({
        name: {
            firstname: req.body.firstname,
            lastname: req.body.lastname
        },
        age: req.body.age,
        class: req.body.class,
        gender: req.body.gender
    })
}

userController.findUser = (req, res) => {
    find({name: req.params.name}, 'name gender', (err, user) => {
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
    deleteOne({name: req.params.name})
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
    update({gender: req.params.value})
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

export default userController
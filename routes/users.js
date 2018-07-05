let express = require('express')
let userController = require('../controllers/users.Controller')

const router = express.Router()

router.post('/users', userController.createUser)

router.get('/users/:name', userController.findUser)

router.delete('/delUser/:name', userController.deleteUser)

router.put('/updateUser/:name/:value', userController.updateUser)

module.exports = router

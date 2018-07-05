let app = require('express')()
let bodyParser = require('body-parser')
let dbConnection = require('./config')
let users = require('./routes/users')

dbConnection()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', users)

app.listen(3000, () => console.log('Server Started....'))
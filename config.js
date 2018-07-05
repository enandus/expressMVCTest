let mongoose = require('mongoose')

let dbConnection = (err, data) => {
    let dbHost = 'localhost'
    let dbPort = '27017'
    let dbName = 'myDB'
    if (err) {
        console.log('Error Connecting......')
        console.error(err)
    }
    else {
        mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useNewUrlParser: true })
        console.log('Server Connected.....')
    }
}

module.exports = dbConnection

require('./models/userModel')
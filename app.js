let app = require('express')()
import { json, urlencoded } from 'body-parser';
import dbConnection from './config';
import users from './routes/users';

dbConnection()

app.use(json())
app.use(urlencoded({extended: false}))

app.use('/', users)

app.listen(3000, () => console.log('Server Started....'))
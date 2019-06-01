const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

require('./config/config');
require('./db/mongoose');

const port = process.env.PORT || 3001;
const app = express();

var corsOptions = {
    origin:true,
    exposedHeaders:['Content-Length', 'x-auth', 'Content-Type']
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

var server = http.createServer(app);

const {User} = require('./models/users');

app.get('/',(req,res) => {
    console.log('server');
    let user = new User({
        firstName:'Test User'
    });

    user.save().then(() => {
        res.send('Hello API!');
    }).catch(() => {
        res.status(400).send();
    });
});

server.listen(port,() => {
    console.log(`App listening on port ${port}`);
});

module.exports = {app};
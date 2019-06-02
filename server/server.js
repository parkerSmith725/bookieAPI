const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const _ = require('lodash');

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

app.post('/signup',(req,res) => {
    let userTemp = _.pick(req.body,['email','firstName','lastName','type']);
    
    let user = new User({
        firstName:userTemp.firstName,
        lastName:userTemp.lastName,
        email:userTemp.email,
        type:userTemp.type ? ('Band') : ('Event')
    });

    user.save().then((user) => {
        res.send(user);
    }).catch(() => {
        res.status(400).send();
    });
});

server.listen(port,() => {
    console.log(`App listening on port ${port}`);
});

module.exports = {app};
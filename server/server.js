const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const port = process.env.PORT || 3001;
const app = express();

var corsOptions = {
    origin:true,
    exposedHeaders:['Content-Length', 'x-auth', 'Content-Type']
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

var server = http.createServer(app);

app.get('/',(req,res) => {
    console.log('server');
    res.send('Hello API!');
});

server.listen(port,() => {
    console.log(`App listening on port ${port}`);
});

module.exports = {app};
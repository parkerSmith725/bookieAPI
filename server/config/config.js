var env = process.env.NODE_ENV || "development";

if(env === "development" || env === "test"){
    var config = require('./config.json');
}

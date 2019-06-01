var env = process.env.NODE_ENV || "development";

if(env === "development" || env === "test"){
    var config = require('./config.json');
    console.log(config);
    process.env.MONGODB_URI = config[env].MONGODB_URI;
}

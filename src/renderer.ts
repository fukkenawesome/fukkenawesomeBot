// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var tmi = require("tmi.js");
//import * as tmi2 from 'tmi.js';

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "fukkenawesomeBot",
        password: "oauth:ppjnhfg4obg377xghlujfw5pwull12"
    },
    channels: ["#fukkenawesome"]
};

var client = new tmi.client(options);

// Connect the client to the server..
client.connect();
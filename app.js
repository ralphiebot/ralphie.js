var tmi = require('tmi.js');

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "LiLFlesH",
        password: "oauth:8pf7fknh1950tazm9neope0icud3gy"
    },
    channels: ["fleshbox"]
}

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self){
    if(message === "!twitter"){
        client.action("fleshbox", "Check out FlesHBoX's twitter! twitter.com.fleshbox")
    }
    client.action("fleshbox", "Hello there " + user['display-name'] + "!")
})

client.on('connected', function(address,port){
    client.action("fleshbox","Hello, I am LiLFlesH!");
});
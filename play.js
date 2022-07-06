const net = require("net");

// establishes a connection with the game server

//const connect = function () {
//  const conn = net.createConnection({
//    host: "165.227.47.243",
//    port: 50541
//  });
//
//  // interpret incoming data as text
//  conn.setEncoding("utf8");
//
//  conn.on("connect", () => {
//    console.log("connected")
//    // code that does something when the connection is first established
//  });
//
//  conn.on("data", (data) => {
//    console.log("server says", data);
//    // code that does something when the connection is first established
//  });
//
//  return conn;
//
//  
//};
//
const connect = require("./client.js");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  stdin.on('data', (key) => {
    if (key === '\u0003') {
    process.exit();
   }
  });
  

  

  return stdin;
};

const handleUserInput = function () {

};



setupInput();
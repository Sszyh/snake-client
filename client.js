const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected to game server!")
    // code that does something when the connection is first established
  });

  conn.on("data", (data) => {
    console.log("server says", data);
    // code that does something when the connection is first established
  });

  conn.on("connect", () => {
    conn.write("Name: 9_9")
    // code that does something when the connection is first established
  });
  return conn;

  
};


//console.log("Connecting ...");
//connect();

module.exports = connect;
const net = require("net");
//const serverIp = require("./constants");
const {IP, PORT} = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected to game server!");
    conn.write("Name: 9_9");
    conn.write("Say: PG")
    // code that does something when the connection is first established
  });

  conn.on("data", (data) => {
    console.log("server says", data);
    // code that does something when the connection is first established
  });

  return conn;
};



module.exports = {connect};
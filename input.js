let connection;
const setupInput = function (conn) {
  connection = conn();

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
 
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
   }
  if (key === 'w') {
    connection.write('Move: up');
    console.log("w works");
  }
  if (key === 'a') {
    connection.write('Move: left');
    console.log("a works");
  }
  if (key === 's') {
    connection.write('Move: down');
    console.log("s works");
  }
  if (key === 'd') {
    connection.write('Move: right');
    console.log("d works");
  }
};



module.exports = {setupInput};
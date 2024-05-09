const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname+"/public")));

// server.listen(5000);

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
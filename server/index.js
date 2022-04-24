const express = require("express")
const http = require("http")
const app = express();
const path = require("path")
const server = http.createServer(app);
// const moment = require("moment")

// app.use(express.static(path.join(__dirname, "client")))
// app.use(express.static("localhost:3000"))

const socketIo = require("socket.io")
const io = socketIo(server)

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    const { userName, message } = data
    io.emit("message", {
      userName,
      message,
      // time: moment(new Data()).format("h:ss A")
    })
  })
})

app.get("/", (req, res) => {
  res.send("Hello localhost!");
});

const PORT = process.env.PORT || 80;

server.listen(PORT, () => console.log(`server is running ${PORT}`))
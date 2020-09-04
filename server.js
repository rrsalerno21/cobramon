require("dotenv").config();
const express = require("express");
const http = require("http"); 
const socketio = require("socket.io"); 
const cors = require("cors"); 

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const router = require("./router"); 

const app = express();
const server = http.createServer(app); 
const io = socketio(server); 

const path = require("path");
const morgan = require("morgan");
const initDb = require("./config/initDb");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const errorMiddleware = require("./routes/errorMiddleware"); 

const PORT = process.env.PORT || 3001;

app.use(cors()); 
app.use(router);

// log all requests to the console in development
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initDb();

// Serve up static assets in production (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(authRouter, usersRouter, errorMiddleware);

// Send all other requests to react app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//*********** SOCKET IO *********** 
// Will execute whenever we have a client connection on 'io'

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);
    // Here, emit will only send a message to the device that just joined the table
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    // broadcast.to will emit message to all users of a particular table, in this case, that another device has joined
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });
  // Will execute whenever a client disconnects from session
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

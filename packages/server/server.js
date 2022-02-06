const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const { Message } = require('./models');

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://127.0.0.1:3000',
  },
});

io.on('connect', (socket) => {
  socket.on();
});

httpServer.listen(3000, () => {
  console.log('Server is listening');
});

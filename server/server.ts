const app = require('express')();
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send({ response: 'Server is up' }).status(200);
});

const server = http.createServer(app);

const io = socketIo(server);

const emitLog = socket => {
  const datetime = new Date()
    .toISOString()
    .replace('T', ' ')
    .replace('.', ',')
    .replace('Z', '');

  const messages = [
    'Some Info message',
    'Some Warning message',
    'Some Error message',
  ];

  const severity = ['INFO', 'WARNING', 'ERROR'];

  const index = Math.floor(Math.random() * (2 - 0 + 1) + 0);

  const response = {
    datetime,
    severity: severity[index],
    message: messages[index],
  };

  // Emitting a new message. Will be consumed by the client
  socket.emit('Logs', response);
};

let interval;

io.on('connection', socket => {
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => emitLog(socket), 1000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

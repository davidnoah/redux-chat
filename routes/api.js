var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router

// logging middleware
router.use(function(req, res, next) {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query});
    next();
});

// Simple in memory 'database'
const database = [
  { name: 'Tea Chats', id: 0, users: ['Ryan','Nick'], messages: [{name: 'Ryan', message: 'ayyyyy'}, {name: 'Nick', message: 'lmao'}] },
  { name: 'Coffee Chats', id: 1, users: ['Abdul'], messages: [{name: 'Abdul', message: 'ayy'}] }
];


// Utility functions
const findRoom = (roomId) => {
  const room = database.find((room) => {
    return room.id === parseInt(roomId);
  });
  if (room === undefined){
    return {error: `a room with id ${roomId} does not exist`};
  }
  return room;
};

const logUser = (room, username) => {
  const userNotLogged = !room.users.find((user) => {
    return user === username;
  });

  if (userNotLogged) {
    room.users.push(username);
  }
};

// API Routes
router.get('/rooms', function(req, res) {
    const rooms = database.map((room) => {
      return {name: room.name, id: room.id};
    });
    console.log('Response:',rooms);
    res.json(rooms);
});

router.get('/rooms/:roomId', function(req, res) {
  room = findRoom(req.params.roomId);
  if (room.error) {
    console.log('Response:', room);
    res.json(room);
  } else {
    console.log('Response:',{name: room.name, id: room.id, users: room.users});
    res.json({name: room.name, id: room.id, users: room.users});
  }
});

router.route('/rooms/:roomId/messages')
  .get(function(req, res) {
    room = findRoom(req.params.roomId);
    if (room.error) {
      console.log('Response:',room);
      res.json(room);
    } else {
      console.log('Response:',room.messages);
      res.json(room.messages);
    }
  })
  .post(function(req, res) {
    room = findRoom(req.params.roomId);
    if (room.error) {
      console.log('Response:',room);
      res.json(room);
    } else if (!req.body.name || !req.body.message) {
      console.log('Response:',{error: 'request missing name or message'});
      res.json({error: 'request missing name or message'});
    } else {
      logUser(room, req.body.name);
      room.messages.push({name: req.body.name, message: req.body.message});
      console.log('Response:', {message: 'OK!'});
      res.json({
        name: req.body.name,
        message: req.body.message
      });
    }
  });

module.exports = router;

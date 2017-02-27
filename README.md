## Redux Chat

---
### Setup

0. `git clone`
0. Navigate to directory
0. `npm install`
0. In two separate Terminal tabs respectively run `npm run api-server` and `webpack -w`
0. Navigate to http://localhost:8080/

* Server can be stopped using `ctl+c`

---

### Features

1. Chat Interface

![search](docs/)

2. Chatroom Directory

![search](docs/)

3. Login Page

![search](docs/)

---
### Design

This app was built using **React.js** for view rendering and **Redux.js** for state management

### State

Arguably the most important design implementation was the state shape:

```js
{
  user: "David",
  rooms: [],
  currentRoom: {
    id: 0,
    name: 'Tea Chats',
    users: ['Ryan', 'Nick']
  },
  messages: [
    {name: 'Ryan', message: 'ayyyyy'},
    {name: 'Nick', message: 'lmao'}
  ]
}
```

* `user` -- A string identify the current logged in user
* `rooms` -- An array of room objects with `name` and `id` attributes -- this list is shown in the chatroom directory
* `currentRoom` -- An object identifying the actively shown chatroom, coupled with `id`, `name`, and `users` attributes
* `messages` -- An array of message objects containing all messages within the current room

### Components

```
Root
  Login
  Chat
    Directory
      Room
      User
    Messages
      RoomInfo
      Log
```

* `Login` -- Logs in username and redirects to the Chat component upon username submission
* `Chat` -- An entry point. onEnter, fetches all needed data from our application API
* `Directory` -- Renders a list of chatrooms and information about the current user
* `Room` -- A list of all chatrooms. onClick, allows the user to navigate to other rooms
* `User` -- Displays user information such as `name` and online duration
* `Messages` -- The component simply wraps the Log and RoomInfo Components
* `RoomInfo` -- Displays the name of the current chatroom and a list of users whom have posted a message

---

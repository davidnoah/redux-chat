## Redux Chat

---
### Setup

- `git clone`
- Navigate to directory
- `npm install`
- In two separate Terminal tabs respectively, `npm run api-server`, and `webpack -w`
- Navigate to http://localhost:8080/

* Server can be stopped using `ctl+c`

---

### Features

0. Chat Interface

![search](docs/)

0. Chatroom Directory

![search](docs/)

0. Login Page

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

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

#### Chat Interface

<img src="docs/chat_interface.png" style="width: 350px;"/>

#### Chatroom Directory

<img src="docs/directory.png" style="width: 190px;"/>

#### Login Page

<img src="docs/login.png" style="width: 350px;"/>

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

I opted for a flat state to ensure concise Redux reducers and prevent components from unneeded re-rendering. Having concise reducers is extremely important because it will reduce the risk of directly mutating our old state. In order for a Redux reducer to decide if there have been changes in state, it will compare the location in memory between the old state and new state. If our code ever directly mutates the old state then our old state and new state's memory location will be the same, forcing the reducer to return the old state by default and cause no change in our components.

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

### Overall Approach

My approach when building this app was to log in a user and save the user's name within localStorage. Then, fetch all needed data from my application API before rendering the chat interface. I then built a listener such that every time my application state changes, the appropriate component re-renders. The chat interface provides a UI that allows the user to navigate between chatrooms and post messages within those chatrooms. If a user tries to navigate to the '/chat' route without logging in, they will be redirected back to the index route login page.

Because I saved the current user's info in the browser's localStorage API, the user can leave the chat interface and upon navigation back to the application's /chat route, the user will still be logged in.

### Future Improvements

[] A proper database would allow all messages, user, and room data to persist even when the application server restarts. (MongoDB, PostgreSQL)

[] Web sockets - Right now, the user would have to refresh their browser in order to witness any changes to the message log from other users. Implementing a web socket would open up a direct connection between the server and the client. It would listen for specific action changes and dispatch those changes to all current open connections. (Socket.io)

[] I would like to implement to redirect to the '/chat' route if a user navigates to the index route and is logged in. But first, I will need to implement a logout function that would destroy the user item within localStorage and redirect a user to the login page to ensure the user won't get stuck logged in.

[]

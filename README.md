# Overview
The chat application enables real-time messaging between users, leveraging modern web technologies to provide an interactive and responsive experience.

### Setup .env file

```js
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```

# Technologies Used
### Frontend:

React: A JavaScript library for building user interfaces, enabling component-based architecture.
Socket.IO Client: Facilitates real-time, bidirectional communication between the client and server.
React Router: Manages navigation and routing within the application.
Context API: Handles global state management, such as user authentication and online users.

### Backend:

Node.js: A JavaScript runtime for building scalable server-side applications.
Express: A minimal web framework for Node.js, used for building APIs and managing HTTP requests.
Socket.IO Server: Enables real-time communication and event handling on the server side.

### Database:

MongoDB (or any preferred database): A NoSQL database for storing user information and chat history.

### Development Tools:

npm: Package manager for JavaScript, used to manage project dependencies.
Webpack/Babel: For bundling and transpiling the code, if applicable.

## API Overview

The API primarily consists of WebSocket events for real-time communication, along with some RESTful endpoints for user management. Here’s an outline of the key API components:

### WebSocket Events:

connection: Triggered when a user connects to the server. Stores the user’s socket ID.
disconnect: Triggered when a user disconnects, removing their socket ID from the tracking list.
getOnlineUsers: Sends a list of currently online users to all connected clients.
message: Handles sending and receiving messages between users in real time.

### RESTful Endpoints:

POST /api/register: Accepts user details and creates a new user account.
POST /api/login: Authenticates a user and returns a session token.
GET /api/online-users: Returns a list of online users.

# User Stories 
### User Registration
As a new user, I want to create an account so that I can access the chat application.

### User Login
As a returning user, I want to log in to my account so that I can join the chat.

### Send and Receive Messages
As a user, I want to send messages to other users in real time so that I can communicate effectively.

### View Online Users
As a user, I want to see a list of online users so that I know who I can chat with.

### User Logout
As a user, I want to log out of my account so that my session ends securely.

### Responsive Design
As a user, I want the application to be usable on both desktop and mobile devices so that I can chat anytime, anywhere.

# TASK3-REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

COMPANY:CODETECT IT SOLUTIONS

NAME:MANAL RUWAIDA

INTERN ID:CT04DN861

DOMAIN:FULL STACK

DURATION:4 WEEKS

MENTOR:NEELA SANTHOSH KUMAR

DESCRIPTION ON REAL TIME COLLABORATIVE DOCUMENT EDITOR:
The Real-Time Collaborative Document Editor is a web-based application that enables multiple users to simultaneously create and edit documents in real time. The primary goal of this application is to allow seamless collaboration by instantly reflecting changes made by any user to all others currently working on the same document. This is achieved using WebSocket technology to enable bi-directional communication between the server and the clients.

The application is built using a React.js frontend and a Node.js backend, with Socket.IO used to establish persistent WebSocket connections. The editor provides a user-friendly interface for editing, and automatically handles conflicts and updates to ensure all participants are viewing the latest version of the document at all times.

🏗️ Architecture and Components
1. Frontend (React) – App.js
The React application serves as the user interface for the editor. It includes:

A text editing component, which may use libraries like Quill.js, Draft.js, or CodeMirror.

WebSocket connection logic (via Socket.IO client) that listens for document changes and emits updates to the server.

State management to ensure document contents stay in sync with real-time updates from other users.

The App.js file typically acts as the entry point of the frontend, initializing socket connections and rendering the main editor component.

2. Backend (Node.js + Express) – server.js
The backend handles real-time communication and document state management. Its responsibilities include:

Managing WebSocket connections using Socket.IO.

Broadcasting changes received from one client to all other connected clients editing the same document.

Optionally, persisting document state to a database (e.g., MongoDB, Redis) for recovery or multi-session editing.

The server.js file sets up the Express server, integrates Socket.IO, and defines event handlers for incoming socket connections, disconnections, and document changes.

3. Package Configuration – package.json
This file manages dependencies for both frontend and backend (if it's a monorepo). Common dependencies include:

react, react-dom for frontend rendering.

express, socket.io, cors for backend communication.

Scripts to run the development server or build the production bundle.

4. Performance & Testing – reportWebVitals.js, setupTests.js
reportWebVitals.js measures app performance using Web Vitals metrics.

setupTests.js is used to configure testing utilities, such as Jest and React Testing Library, enabling unit or integration tests for UI components.


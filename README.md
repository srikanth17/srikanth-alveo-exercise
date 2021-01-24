## Application

This application is built on ES6 JavaScript using React with Redux and TypeScript. I've used Create React App (saves more time in configuring the dev environment) to bootstrap this react application. Information about the _create-react-app_ & to run this application is mentioned in the later part of this document.

I've used _concurrently_, npm library to run both client and server in single localhost. This is configured in package.json file. _json-server_ will be running in port 4000.

Client - Port #3000

Server - Port #4000

## Backend

The Backend is built on NodeJS. I've used websockets to send periodic log data (every second) to the client without making further API calls. Used _socket.io_ to configure on the backend & used _socket.io-client_ npm library to establish the connection & consume the data from the backend.

## Directory Structure

All the TS code live in _/src/_ directory. _index.tsx_ is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.

## Redux Store

This application requires information exchange between components. Redux is used to solve this. I don't want to populate _props_ by sending all the information through it. Also, by using redux store the code is clean & reusable.

Redux store is configured in _/src/store/index.ts_ & imported into '_/index.tsx_'.

## Reducers

1. Logs - Stores the log informations

## Components

1. App - Root application & websockets are configured over here.
2. Logs - Renders the Logs to the screen. Used [react-virtualized](https://www.npmjs.com/package/react-virtualized) to improve the performance of the application.

## UI

I've used material UI as a framework to build the application.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

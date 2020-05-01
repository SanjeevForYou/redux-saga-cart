# redux-saga-cart
A fully-functional shopping cart built with Redux Saga using Yield

## About
redux-saga-cart is a fully functional, non-trivial demo application meant to help intermediate and advanced users understand and use Redux Saga.
This project is the finished product that is built in the Pluralsight course redux-saga. (Link coming soon)
While running and studying this project is useful to anyone, it is strongly recommended that you build it while watching the Pluralsight course.

## Installation
* This application has a seperate back-end component available here: https://github.com/danielstern/redux-saga-shopping-cart-server . The back-end and front-end have been seperated to help make learning redux-saga easier. *
1. Clone and install the server application

2. Clone and install the application
`git@github.com:danielstern/redux-saga-cart.git && cd redux-saga-cart && npm install`

3. Install the babel CLI
`npm install -g babel babel-cli`

## Usage
1. Start the application with `npm start`
2. Open the url `http://localhost:8080`

## Troubleshooting
### The application hangs on load
Make sure the demo server is running on the correct port (`8081`). Make sure the permissions on your computer allow communication between the ports `8080` and `8081`. 
Still getting an error? Copy any errors that appear in dev tools and open an issue.

### I don't see anything / I see the wrong thing when navigating to `http://localhost:8080`
Make sure that the port `8080` is available before running `npm start`

### I get an error when running `npm start`
Make sure you're running the latest version of `node`. Make sure the following dependencies are installed globally as not all OS's respect global dependencies:
```javascript
{
    "@babel/core": "~7.9.6",
    "@babel/node": "~7.8.7",
    "@babel/plugin-transform-runtime": "~7.9.6",
    "@babel/preset-env": "~7.9.6",
    "@babel/preset-react": "~7.9.4",
    "babel-cli": "^6.26.0",
    "babel-loader": "~8.1.0",
    "chai": "^4.2.0",
    "jest": "^25.5.2",
    "mocha": "^7.1.2",
    "redux-devtools": "^3.5.0",
    "redux-tool": "^1.0.0",
    "webpack": "~4.43.0",
    "webpack-cli": "~3.3.11",
    "webpack-dev-server": "^3.10.3"
}
```

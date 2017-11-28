## Setup the app
Open the app in any IDE as webStorm, phpStrorm, IntelliJ, Visual Studio Code, etc..

### before running the app (if system is not window)
The development is done on window and in a case your system is not window, 
change the last two lines in the package.json to
 "scripts": {
    "build": "webpack -d && copy src/index.html public/index.html && webpack-dev-server --content-base public/ --inline --hot --port 8000",
    "build:prod": "webpack -p && copy src/index.html public/index.html"
  },

## Run App

In the project directory, you can run:

### node server.js
This command start the server
Server started. listening to 8000
Open [http://localhost:8000](http://localhost:8000) to 
Get  [http://localhost:8000/images](http://localhost:8000/images) to get images
POST  [http://localhost:8000/upload](http://localhost:8000/ipload) to upload Image 

### `npm start`
This command start the client React App
Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

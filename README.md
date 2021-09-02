# Development approach and steps to run the app.

### Requirements:-
 - You’ll need to have Node >= 10.16 and npm >= 5.6 on your machine.
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Steps to run the app locally:-
 - Clone the repository
 - change the directory to project directory by running `cd rivert-assignment`
 - run `npm install` to install the neccessary node modules
 - run `npm start` to start the local server
 - open a browser and head over to `localhost:3000` or the local url can be viewed in the terminal in the result of previous command.
 
### Development approach
 The development of the project was divided into 5 parts:-
  - Create a react app using create-react-app. Initialize the project with a simple responsive card layout using bootstrap.
    - Used the [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) package for bootsrap.
  - Call the api usin the fetch method and display the data inside the cards.
    - Used the JSON placeholder https://jsonplaceholder.typicode.com/albums/1/photos api for HTTP GET calls from the app.
  - Add tilt effect to the cards. Used [react-tilt](https://www.npmjs.com/package/react-tilt) npm packege for titl.js. This package is speciffically mentioned on the tilt.js github page for using tilt,js in a react app.
  - Add the particle.js Background. Used [react-particle-js](https://www.npmjs.com/package/react-particles-js) npm package.


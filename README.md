
# Fano - Clothes Annotation Web App

SWENG 2021 Group 2 - Project to create a web application that can be used to annotate images of clothes that have text printed on them. 
The application allows an admin to upload images of clothes with text to the database, that later can be annotated by Fano users.
The users will be asked to carefully read the text on the t-shirt and count the number of colours visible on the shirt, before entering them into the corresponding fields. 
The admin will be able to export all the annotations to a json format. 
Click on the below image to watch our Demo. 
[![Fano Video](https://i.ibb.co/wzVJ04Z/fano-image.png)](https://www.youtube.com/watch?v=z_H_fUal-ss "Fano Video")

# Getting Started with Fano

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In order to run this project, please make sure you have Node js installed on your local machine.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the app's missing dependencies to that the project can be compiled and run in the browser (see below).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `firebase deploy`

**Note: should only be used by backend team to deploy changes to Firebase server instance**

Deploys current version of web app to hosting services and updates Cloud Functions.


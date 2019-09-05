# Library Wizard app [React/Redux]

![library-wizard-app-thumb](https://user-images.githubusercontent.com/31347233/64336533-85249500-cfdd-11e9-95fd-ecd463abb4a3.jpg)
![library-wizard-app-thumb](https://user-images.githubusercontent.com/31347233/64336534-85249500-cfdd-11e9-86d8-2df49850af6b.jpg)
![library-wizard-app-thumb](https://user-images.githubusercontent.com/31347233/64336535-85249500-cfdd-11e9-94cb-9e8ffe807d27.jpg)
![library-wizard-app-thumb](https://user-images.githubusercontent.com/31347233/64336536-85bd2b80-cfdd-11e9-8bbb-a8232ef581bb.jpg)
![library-wizard-app-thumb](https://user-images.githubusercontent.com/31347233/64336532-85249500-cfdd-11e9-866c-7d1814f51822.jpg)

## Project Objectives

- wizard configuration is based on existing genre data provided in separate JSON file
- wizard can have a maximum of 4 steps:
  1. genre
  2. subgenre
  3. add subgenre
  4. information
- number of steps should change dynamically based on user action
- steps indicator should display only the available steps
- initially there are three steps
- fourth step is added if user decides to add a new genre
- user is allowed to advance to next step only if genre/subgenre is selected or form data is entered
- form data should be submitted by logging data to console
- user can always navigate back to any of the wizard steps
- the last step button should always have a complete flow instead of next step label
- description field in info form is required only if corresponding status is marked true:
  "isDescriptionRequired": true
- after book data is logged to console, wizard should be able to restart
- Redux should be used for state management
- responsive design


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

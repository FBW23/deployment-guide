This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro

In this project we will record the steps for preparing / configuring a deployment in steps. 

We will keep all configuration steps in branches. And we will note the progress here in the README file in the section "Deployment steps" as we progress.

## Deployment steps

### Step 5 - Exchange BrowserRouter by HashRouter

Branch: hash-router

BrowserRouter causes problems because it generates urls with subpaths, which a server interprets as "subfolders" that it tries to lookup. And fails miserably. Because it doesn't know about this "single page" thing and that all incoming traffic needs to get forwarded to the index.html page. The React Dev Server knows and does it for us in the background. But "normal" static servers, like GitHub Pages, do not know.

HashRouter provides us with the hack of just ONE route and passing the route 
"secrectly" inside a hash. React router will correctly interpret this hash as route information and your routing will work smoothly.

### Step 4 - Added React routing

Branch: add-routing

Added package react-router-dom and implemented Browser router
Nothing deployment specific done in here


### Step 3 - Outsource external data to .env

Branch: outsource-environment

External information like API urls or image server urls or anything else external
we typically outsource as variables into an .env file

- Created an .env file
  - Important: You need to store it in your main folder! Not inside src folder
  - Every entry has the format: KEY=VALUE (without quotes!)
  - Important: All KEYs need to start with REACT_APP_
    - e.g. REACT_APP_MY_API_URL
  - All keys without that prefix will get ignored by the React build

- Usage of your Env Variables in your React code: process.env.KEY

- Important: Whenever you change contents of the .env file, you need to quit your current running react and run npm start again
  - The React dev server does not detect changes on .env files by default

Most prominent use case: Outsource URL of API


### Step 2 - Added fetching

Branch: api-fetch

Nothing deployment specific in there, just added an API fetch call


### Step 1 - GitHub Pages script & homepage key

Branch: ghpages-setup

In this stage we did the following steps - in that order

- We picked an App that is connected to GitHub
- Installed gh-pages in that folder: `npm i -D gh-pages`
- Created deployment scripts in package.json (section scripts)
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
- add homepage key to package.json ` "homepage": "." ` (directly after key "private")

- Deploying your app by running: `npm run deploy`
  - This will execute both the predeploy & deploy scripts (in that order)
  - First stage: Building
  - Second stage: Uploading the build to gh-pages branch
  - Hint: The gh-pages tool will create the gh-pages branch on GitHub automatically!

### Troubleshooting - Debugging Gh-Pages

  - How to checkout my deployed site?
    - GitHub Repo &gt; Settings &gt; Section GitHub Pages
      - Here you shoud see in green "Your site is published at ..url.."
      - If it says instead it is in process of publishing the URL will show a 404
        - Nothing left to wait some time then :D
      - If it does not show anything here: 
        - Check if you have the "gh-pages" branch in your repository
        - If not: You forgot to run "npm run deploy"

  - I did another update deploy - but my changes are not online yet!
    - In your GitHub repo go to tab "Code" and then tab "Environment"
    - Check here the deployment status - and especially the time
    - If you cannot see your recent deployment here - you need to wait a bit :) 
     - Check also your gh-pages branch and watch the update dates of the files
     - If they were changed recently your deploy worked. You just need to wait a bit

  - I see the README file on my published site!
    - Check in Settings - Section GitHub Pages - check the deploy source
      - Is it master? It needs to be gh-pages
      - In case it is gh-pages already
        - wait for some minutes to GH to update :)

## Deployment Vercel (Zeit.now)

- Signup: vercel.com/signup
  - Use GitHub for signup
  - In case you are not logged in - log into GitHub
- After account creation
  - Go to tab "Settings" &gt; Email
    - this Email (=your GitHub email) will be used for login
  - Direct link to settings: https://vercel.com/account

- Install vercel: `npm i -g vercel`

- Login (just on first usage)
  - `vercel login`
  - State your email address you got from Vercel settings page
  - You will get an email for verifying your account
  - Once you clicked the confirmation link and you see the verification
    - go back to the terminal
    - you should get a message for successful connection

- Deployment
  - Get into a react app folder you want to deploy
  - Type `vercel`
  - Follow the instructions (in case of doubt - accept all the defaults please with enter please)
  - After deployment finished you receive two links
    - Open the "Production" link in the browser
    - Check if your App was deployed correctly
    - The other link "Inspect" is for checking your deployment status & any issues
  - On all subsequent deployments you do `vercel --prod`
    - if you just type "vercel" you get a preview deloyment
      ( to check out if everythings works okay - before you overwrite your real webpage)

DONE!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

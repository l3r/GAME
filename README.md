## Technical Overview
This project was created using Reactjs and Firebase Database.

Frontend structure is as follows, according to Reactjs principles:


The First Screen just how one component called registration, which has a embedded form.

![Alt text](/images/structure1.png?raw=true "First Screen")


The Second Screen contains three components: 

```
-game
  --gamemove
    ---(embedded html)
    ---gameresult
    ---gameresult
```

![Alt text](/images/structure2.png?raw=true "Second Screen")

As you can see there  is a reused component, gameresult, which is used to display the round winner and the winners of the games.


## Folder Structure

```
GAME/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      game.js
      gamemove.js
      gameresults.js
      registration.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
```

For the project to build, these next files must exist with exact filenames:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


##Instruction to run this Project
Follow the next instructions to run this project localy

``` 
[Clone the project in your selected directory] git clone https://github.com/lgutie16/GAME.git
[Go inside the main source directory         ] cd GAME
[Run script descripted above                 ]npm start

``` 
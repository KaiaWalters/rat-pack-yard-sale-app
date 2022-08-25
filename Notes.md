## Setting up Server For MERN Stack Project 

Add ```"type": "module",``` to the package.json file. Allows us to used ES6 import statements. 

## I had an issue where I was unable to connect to Mongo db

This was because I was not calling index.js anywhere in the project. It turns out that was the entry point to my project and was also connecting to Mongo in the first place...ughhhhhhhhhh :(

## I was unable to access any of my env 

This was because I needed to...

1. add  ```"start": "nodemon -r dotenv/config server.js"``` to the package lock file 
2. remove  ```import dotenv from "dotenv" //allows us to access env``` from the top of my files, it turned out that this was not necessary
3. add ```const {PORT} = process.env;``` to the file in order to import the env you want to use


## I was struggling to add a font that I had downloaded as a separate file 

[How to use downloaded fonts css]('https://stackoverflow.com/questions/53038964/how-to-use-downloaded-font-in-css')

```
 @font-face {
    font-family: 'Yellowtail';
    src: url('./fonts/Yellowtail/Yellowtail-Regular.ttf')
}
```

That's what worked. Example is in App.css.

## Deploying an app to Heroku 

some question that I had going in were: 
- How can I get Heroku to deploy my app once I link it to my github repo? 
    - I had to add a package.json file to the root of my project 
- Next, I'm getting a 404 at the Heroku url that should be hosting my app
    - I don't think that my server was running. I also did not actually have a way to tell Heroku how to run my front end either. my initial thought was that I may need a Procfile. 
    
    I referenced this article: [How Heroku Works]('https://devcenter.heroku.com/articles/how-heroku-works#defining-an-application')
    For the Procfile: [Procfile]('https://devcenter.heroku.com/articles/procfile')

## Todo List: 

- Add a header component to each screen
    - it would be cool if I could put a single header component in App.js and just send the title from the child (screen) to the parent (App.js). Maybe I can use a callback.


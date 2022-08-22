# Setting up Server For MERN Stack Project 

Add ```"type": "module",``` to the package.json file. Allows us to used ES6 import statements. 

# I had an issue where I was unable to connect to Mongo db

This was because I was not calling index.js anywhere in the project. It turns out that was the entry point to my project and was also connecting to Mongo in the first place...ughhhhhhhhhh :(

# I was unable to access any of my env 

This was because I needed to...

1. add  ```"start": "nodemon -r dotenv/config server.js"``` to the package lock file 
2. remove  ```import dotenv from "dotenv" //allows us to access env``` from the top of my files, it turned out that this was not necessary
3. add ```const {PORT} = process.env;``` to the file in order to import the env you want to use



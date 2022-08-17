import express from 'express'
import cors from 'cors'
import pages from './api/pages.routes.js'

const {PORT} = process.env;
const app = express(); //this is used to make our server 

app.use(cors()); //this is middleware, this will use cors module
app.use(express.json()) // older apps use body parser. This is now included in express. If a server sends  a git pr post request to our server, the app will be able to read it (json). 

app.use("/api/v1/yard-sale-items", pages) // lists the url route from which people will access our server
app.use('*', (req,res) => res.status(404).json({error: "error not found"})) // * meanse wild card, if use goes to a random route our server will return 404

app.listen(PORT, function(){    
    console.log(`Express server is running ${PORT}`)
})

export default app
import app from "./server.js"
import mongodb from "mongodb"
import usersDAO from "./dao/usersDAO.js"

const {DB_CONNECTION} = process.env
const MongoClient = mongodb.MongoClient

const port = 3001 || 8000

DB_CONNECTION,
MongoClient.connect(
    {
        wtimeoutMS: 2500
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await usersDAO.injectDB(client)
    console.log( "connection to db", await usersDAO.injectDB(client))
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})




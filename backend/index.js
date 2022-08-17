import app from "./server.js"
import mongodb from "mongodb"
import usersDAO from "./dao/usersDAO.js"

const {DB_CONNECTION, PORT} = process.env
const MongoClient = mongodb.MongoClient


const port = 8000


MongoClient.connect(
    DB_CONNECTION,
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
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})




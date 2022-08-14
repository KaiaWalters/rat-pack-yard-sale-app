import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv" //allows us to access env

dotenv.config 

const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.DB_CONNECTION,
    {
        wtimeoutMS: 2500
    }
)
.catch(err => {
    console.log("FUVK")
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})




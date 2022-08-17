import express from "express"
import itemsCTRL from "./items.controller.js"

const router = express.Router()

router.route("/").get((req,res,next) => {
    //res.send andd other methods have headers unique to the methods. 
    // res.send(itemsCTRL.apiGetItems(req,res))
    itemsCTRL.apiGetItems(req,res)

    //middleware function used to move to next function
}) 

export default router 


//Why is a promised being returned between my router and controller when the response has already been fulfilled. 
import express from "express"
import itemsCTRL from "./items.controller.js"

const router = express.Router()

router.route("/").get((req,res,next) => {
    itemsCTRL.apiGetItems(req,res)
}) 


//send post with bids from /item/bid 
//the post should update the bidding price of an item

router.route("/details").get((req,res,next) => {
    //should get the data from the db first then only run this when the user submits a new bid

    //send the data from the form to this url somehow, run this on form submission 
    itemsCTRL.apiUpdateItemPrice(req,res)
    next()
}) 

//get bids from db 

export default router 


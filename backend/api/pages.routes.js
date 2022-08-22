import express from "express"
import itemsCTRL from "./items.controller.js"

const router = express.Router()

router.route("/").get((req,res,next) => {
    itemsCTRL.apiGetItems(req,res)
}) 
//send post with bids from /item/bid 
//the post should update the bidding price of an item

router.route("/postBid").post((req,res,next) => {
    console.log("request",res)
    itemsCTRL.apiUpdateItemPrice(req,res)
}) 
//get bids from db 

export default router 


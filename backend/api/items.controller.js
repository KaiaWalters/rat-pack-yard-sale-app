import usersDAO from "../dao/usersDAO.js"

export default class ItemsController {

  static async apiGetItems(req, res, next) {
    const itemsPerPage = req.query.itemsPerPage ? parseInt(req.query.itemsPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0
    
    let filters = {}
     
      if (req.query.name) {
        filters.name = req.query.name
      } else if (req.query.bid) {
        filters.bid = req.query.bid
      } else if (req.query.email) {
        filters.email = req.query.email
      }else if (req.query.phone) {
          filters.phone = req.query.phone
      }else if (req.query.item) {
          filters.item = req.query.item
      }

   
    //actually makes the request WHICH DOES GET FULFILLED

    const { itemsList, totalNumItems } = await usersDAO.getItems({
      filters,
      page,
      itemsPerPage,
    })

    //returns a mapped version of the response that fits our domain
    let response = {
      items: itemsList,
      page: page,
      filters: filters,
      entries_per_page: itemsPerPage,
      total_results: totalNumItems,
    }

    res.send(response)
  }

  static async apiGetItemById(req, res, next) {
    try {
      let id = req.params.id || {}
      let item = await usersDAO.getItemByID(id)
      if (!item) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(item)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiGetItemBids(req, res, next) {
    try {
      let bids = await usersDAO.getBids()
      res.json(bids)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiUpdateItemPrice(req, res, next) {
    try {
      let post = await usersDAO.postItemPrice({
        bid: req.body.bid,
        item: req.body.item,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone
      })

    } catch (e) {
      console.log(`Unable to update price of item ${e}`)
    }
  }
}
  
   
let items 

export default class UsersDAO {
    static async injectDB(conn) {
        if(items) {
            return
        }

        try {
            //connect to items collection
            items = await conn.db("yard-sale").collection("items")

        } catch(e) {
            console.error(
                `unable to establish connection, ${e}`
            )
        }
    }

    static async getItems({
        filters = null,
        page = 0, 
        itemsPerPage = 20,
    } = {}) {

        let query

        if(filters) {
            if("name" in filters) {
                query = {$text: {$search: filters["name"]}}
            } else if ("bid" in filters) {
                query = {bid: {$eq: filters["bid"]}}                
            } else if ("email" in filters) {
                query = {"email": {$eq: filters["email"]}} 
            } else if ("phone" in filters) {
                query = {"phone": {$eq: filters["phone"]}}
            } else if ("item" in filters) {
                query = {"item":{$eq: filters["item"]}}
            }
        }

        let cursor
        
        try {
            console.log("Items at cursor",items)
            cursor = await items.find(query)
        }
        catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { itemsList: [], totalNumItems: 0 }
        }

        const displayCursor = cursor.limit(itemsPerPage).skip(itemsPerPage * page)

        try {
            const itemsList = await displayCursor.toArray()
            const totalNumItems = await items.countDocuments(query)

            return { itemsList, totalNumItems }
        } 
        catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { itemsList: [], totalNumItems: 0 }
        }
    } 

    static async postItemPrice( myobj = {}) {
        try {
            items.insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("Response",res)
                console.log("Object", myobj)

              });
        } 
        catch (e) {
            console.log(`Unable to submit new document ${e}`)
        } 
    }
}




    
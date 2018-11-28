/* 
 * route to get current drinks for a store or a user
 * if a user id is passed in the querystring, will query
 * the database for drinks matching the customer id, otherwise
 * if a store id is passed, will query the database for drinks matching
 * the store ID, otherwise will return nothing if neither are passed
*/
module.exports = (app) => {
    app.get('/user', (req, res) => {
        var id = ''
        var query = ''
        if(req.query.userId){
            id = req.query.userId
            console.log("user ID is... " + id)
            query = 'SELECT * FROM user_drinks JOIN users on users_drinks.user_id = users.id JOIN drinks on users_drinks.id = drinks.id WHERE users.id = {0}'.format(id)
        } else if(req.query.storeId){
            id = req.query.storeId
            console.log("store ID is... " + id)
            query = "SELECT * FROM user_drinks JOIN users on user_drinks.store_id = " +
                    "users.store_id JOIN drinks on user_drinks.id = drinks.id WHERE users.store_id = {0}".format(id)
        } else {
            return res.send(JSON.stringify({"status": 404, "error": "no user or store ID found"}))
        }
        var con = require('../services/connection')
        con.query(query, (error, result) => {
            if(error){
                return res.send(JSON.stringify({"status": 404, "response": null, "id": id}))
            }
            // if we can successfully query the drink table for the drinks for a given
            // user or store, return the appropriate response
            return res.send(JSON.stringify({"status" : 200, "response": result, "id": id}))
        })
        con.query(query, (error, result) => {
            if(error){
                return res.send(JSON.stringify({"status": 404, "response": null, "id": id}))
            }
            // if we can successfully query the drink table for the drinks for a given
            // user or store, return the appropriate response
            return res.send(JSON.stringify({"status" : 200, "response": result, "id": id}))
        })
    })
}
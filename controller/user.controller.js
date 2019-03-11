var response = require('./../general/MyResponse');
var messages = require('./../general/messages');
var config = require('./../config/config');
module.exports = {
    createUser: async (req, res) => {
        //create user
        var query = "INSERT INTO users (" +
            "email, password ) " +
            "VALUES (?, ?)";

        var data = [req.body.email, req.body.password]
        try{
            var user = connection.query(query, data);
        } catch (err) {
            console.error("Error occurred : ", err.message);
            response.createResponse(res,500,err.message,{},{});
        }
        response.createResponse(res, 200, messages.USER_CREATED_SUCCESS, {}, {});
    },
};

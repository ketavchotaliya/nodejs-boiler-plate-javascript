//create instance of express routes
var routes = express.Router();

routes.get('/health', (req, res, next) => {
    res.status(200).json({ success: true })
});

//export express routes
module.exports = routes;

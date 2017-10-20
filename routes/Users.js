var express = require('express');
var apiRouter = express.Router();
var userModel = require('../models/Users');

// API MIDDLEWARE ============================================================
apiRouter.use(function(req, res, next) {
	console.log("someone just came to the app");
	// this is where we authenticate users
	next();
});

// API Routes =================================================================
apiRouter.get('/', function(req, res) {
	res.json({ message: 'woah check out this json'});
});

apiRouter.route('/users')
	//create a user
	.post(function(req, res) {
		// Firebase
		var user = {};

    user.firstName = req.body.first_name;
		user.lastName =req.body.last_name;
		user.nickName = req.body.nick_name;

    console.log(req.body);

	 	return userModel.addUser(user, res);

	})
	.get(function(req, res) {
		// Firebase get all users
		return userModel.getAllUsers(res);
	});

module.exports = apiRouter;

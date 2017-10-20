var	fireBaseConfig = require('./../dbconnection');
var	firebase = require("firebase");

firebase.initializeApp(fireBaseConfig);
var db = firebase.database();
var usersRef = db.ref('users');

var Users = {

    addUser:function(user){

      return usersRef.push(user, function(err) {
        if (err) {
          res.send(err)
        } else {
          res.json({ message: "Success: User created."});
        }
      });

    },
    getAllUsers : function() {
      return usersRef.once("value", function(snapshot, prevChildKey) {
  			res.json(snapshot.val());
  		})
    }
};

module.exports=Users;

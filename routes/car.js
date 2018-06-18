//***************************************************************************************************
// ROUTES
//***************************************************************************************************

var express = require("express");
var db = require("../models");
var router = express.Router();


// retrieves all Cars from the DB and renders them to the homepage
router.get("/" , function(req,res){
    // Using our character model, "find" every character in our db
db.Car.find({})
.then(function(data) {
    // If any Cars are found, send them to the client
    // var hbsObject = {
    //     Cars:data
    // }
    res.json(data);
})
.catch(function(err) {
    // If an error occurs, send it back to the client
    res.json(err);
});

});



// Route for getting all Cars from the db
router.get("/api/cars", function(req, res) {
// Using our character model, "find" every character in our db
db.Car.find({})
    .then(function(data) {
    // If any Cars are found, send them to the client
    res.json(data);
    })
    .catch(function(err) {
    // If an error occurs, send it back to the client
    res.json(err);
    });
});




// retrieves all the Cars of a certain ID (not in use yet)
router.get("/api/cars/:id", function(req,res){
console.log(req.params.id)
db.Car.find({_id : req.params.id})
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.json(err);
    });
});



router.post("/api/cars", function(req, res) {
// Create a new characterin the database
db.Car.create(req.body)
    .then(function(data) {
    // If the Library was updated successfully, send it back to the client
    res.json(data);
    })
    .catch(function(err) {
    // If an error occurs, send it back to the client
    res.json(err);
    });
});

router.delete("/api/cars/:id", function(req,res){

db.Car.deleteOne({_id : req.params.id})
    .then(function(data){
        res.json(data);

    })
    .catch(function(err){
        res.json(err);
    });
});


//  END ROUTES

module.exports = router;
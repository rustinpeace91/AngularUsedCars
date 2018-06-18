var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
var CarSchema = new Schema({
    make: {
        type: String,
        required:true
    },
    model: {
        type: String,
        required:true
    },
    year: {
        type: Number,
        required:true
    },
    miles: {
        type: Number,
        required:true
    }

});

// This creates our model from the above schema, using mongoose's model method

var Car = mongoose.model("Car", CarSchema);

// Export the Character sheet model
module.exports = Car;

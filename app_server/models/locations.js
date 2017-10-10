var mongoose =  require("mongoose");

// Define Schema for reviews
var reviewSchema = new mongoose.Schema({
    author : String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, default: Date.now}
});

// Define a Schema fir opening times
var openingTimeSchema = new mongoose.Schema({
    days: { type: String, required: true },
    opening: String,
    closing: String,
    closed: { type: Boolean, required: true }
});


// Start main location schema definition 
var locationSchema = new mongoose.Schema({
    name : {type : String, required : true},
    address : String,
    rating : {type: Number, "default" : 0, min: 0, max: 5},
    facilities : [String],
    coords: { type: [number], index: "2dsphere"}, // use 2dsphere to add support for GeoJSON longitude and latitude coordinate pairs
    openingTimes : [openingTimeSchema], // Reference opening times and review schemas to add nested subdocuments
    reviews: [reviewSchema]
 });


   
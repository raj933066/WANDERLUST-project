const mongoose =require("mongoose");
const Schema=mongoose.Schema;
// const default_img="...";  <-- DELETE THIS LINE

const listingSchema = new Schema({
    title : {
        type :String,
        required :true,
    },
    description : String,

    // DELETE YOUR OLD IMAGE FIELD AND REPLACE WITH THIS:
    image: {
        url: String,
        filename: String
    },
    // END OF REPLACEMENT
    
    price : Number,
    location : String,
    country:String,
});

const listing =mongoose.model("listing",listingSchema);
module.exports=listing;

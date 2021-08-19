const mongoose=require("mongoose");

const restaurantData=new mongoose.Schema({

    id:Number,
    name:String,
    restaurant:String,
    availableMeals:[ ],

})

module.exports=mongoose.model("restaurant_data",restaurantData);
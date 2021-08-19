const restaurantData=require("./data-model")



exports.addRestaurant=(req,res)=>{
    
    
  
    
    const restaurant= new restaurantData({
            
        id:req.body.id,
        name:req.body.name,
        restaurant:req.body.restaurant,
        availableMeals:req.body.availableMeals
    });

    restaurant.save((err,data)=>{
        if(err){
            res.json({"status":-1,"data":"no data found","message":"error while adding data"});
        }else{
            res.json({"status":200,"data":data,"message":"data added successfully!"});
        }
    })

}

exports.getRestaurantByAvailableMeals=(req,res)=>{


    restaurantData.find({availableMeals:req.params.meals},(err,response)=>{
        if(response){
            res.json({"status":200,"data":response,"message":"data retrived successfully!"});
        }else{
            res.json({"status":-1,"data":"no data found","message":"error retriving data"});
        }
    })
} 

exports.getDishesByRestaurantName=(req,res)=>{

    restaurantData.find({restaurant:req.params.restaurant},(err,response)=>{
        if(response){
            res.json({"status":200,"data":response,"message":"data retrived successfully!"});
        }else{
            res.json({"status":-1,"data":"no data found","message":"error retriving data"});
        }
    })
}


const router=require("express").Router();
const getDataController=require("./get-data-controller");

router.route("/getrestaurantbymeal/:meals").get(getDataController.getRestaurantByAvailableMeals);
router.route("/addrestaurant").post(getDataController.addRestaurant)
router.route("/getdishesbyrestaurant/:restaurant").get(getDataController.getDishesByRestaurantName)


module.exports=router;
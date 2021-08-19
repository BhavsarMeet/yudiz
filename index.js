const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const routes=require("./api-routes");
const app=express();


//middleware to handle json or formdata from frontend
app.use(cors({allowedHeaders:"*"}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//starting server at port 3000
app.listen(3000,()=>{
    console.log("server started....");
})

//api call
app.use("/api/restaurant",routes);

mongoose.connect("mongodb://localhost:27017/yudiz",{useUnifiedTopology:true}).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log("error connecting db");
})
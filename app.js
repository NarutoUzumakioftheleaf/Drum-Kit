const express =require("express");
const app=express();
const path =require("path");
staticPath = path.join(__dirname,"../expressbythapa/public/Drum Kit Completed");

app.use(express.static(staticPath));
app.get("/",(req,res)=>{
 res.send("hello world from home page");
})
app.get("/about",(req,res)=>{
res.send("oops this is about page");
})
app.get("/contact",(req,res)=>{
    res.send("this is contact page ");

})
app.listen(3000,()=>{
console.log("listening to port 3000");
});
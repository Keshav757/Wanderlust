const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js")
const path=require("path")
const methodOverride=require("method-override")
const engine=require("ejs-mate")
app.engine("ejs",engine)
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"/views"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride("_method"))
main().then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://localhost:27017/wanderlust")
}

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.get("/test",async (req,res)=>{
    let sample=new Listing({
        title:"Vila De Goa",
        description:"By the beach",
        location:"Goa",
        country: "India",
        price: 100
    })
    await sample.save()
    console.log("sample saved")
    res.send("Succesfull testing")
})
//index.ejs
app.get("/listings",async (req,res)=>{
    const list=await Listing.find({})
    res.render("listings/index.ejs",{list})
})

//new.ejs
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
})

//show.ejs
app.get("/listings/:id",async (req,res)=>{
    const {id}=req.params
    console.log(id)
    const list=await Listing.findById(id)
    console.log(list)
    res.render("listings/show.ejs",{list})
})

//create route
app.post("/listings", async (req, res) => {
    const l=req.body
    const list=new Listing(l.l)
    await list.save()
});

//edit route
app.get("/listings/:id/edit",async (req,res)=>{
    const {id}=req.params
    const list=await Listing.findById(id)
    res.render("listings/edit.ejs",{list})
})

app.put("/listings/:id",async (req,res)=>{
    const {id}=req.params
    await Listing.findByIdAndUpdate(id,{...req.body.l})
    res.redirect(`/listings/${id}`)
})

//delete route
app.delete("/listings/:id", async (req,res)=>{
    const {id}=req.params
    let deletedLsiting=await Listing.findByIdAndDelete(id)
    console.log(deletedLsiting)
    res.redirect("/listings")
})
app.get("/",(req,res)=>{
    res.send("Hello");
})
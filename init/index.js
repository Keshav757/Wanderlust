const mongoose=require("mongoose")
const initdata=require("./data.js")
const Listing=require("../models/listing.js")

main().then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://localhost:27017/wanderlust")
}

const init = async()=>{
    await Listing.insertMany(initdata.data);
    console.log("Data inserted")
}   

init();

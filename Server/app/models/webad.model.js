const { mongoose } = require("mongoose");


module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {   id:Number,
            topic:String,
            title:String,
            registerLink:String,
            price:String,
            information:String,
            imageURL:String,
        }
    )
    const webad=mongoose.model("webad",schema)
    return webad
};


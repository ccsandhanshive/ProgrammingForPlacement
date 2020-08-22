const { mongoose } = require("mongoose");
module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {   id:Number,
            index:Boolean,
            heading:String,
            information:String
        }
    )
    const placementTip=mongoose.model("placementTip",schema)
    return placementTip
};




const { mongoose } = require("mongoose");


module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
            topicId:Number,
            topicName:String,
            topicLink:String,
        }
    )
    const topic=mongoose.model("topic",schema)
    return topic
};
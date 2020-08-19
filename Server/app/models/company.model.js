const { mongoose } = require("mongoose");


module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
            companyId:Number,
            imageUrl:String,
            companyName:String,
            package:Number,
            passingYear:Number,
            eligibalBranches:[String],
            jobDescription:[String],
            registrationLink:String,
        }
    )
    const company=mongoose.model("company",schema)
    return company
};
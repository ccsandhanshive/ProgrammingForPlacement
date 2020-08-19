const mongoose = require('mongoose');
module.exports=mongoose=>{ 
const ProblemSchema = mongoose.Schema({
    problemId:Number,
    problemTitle:String,
    problemStatement:String,
    input:String,
    output:String,
    program:String,
    language:String,
    description:String
})
const problem=mongoose.model("problem",ProblemSchema)
return problem
}


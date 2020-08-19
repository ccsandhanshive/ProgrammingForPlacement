const db=require("../models");
const Problem=db.problems;
// POST a Customer
exports.create = (req, res) => {
    // Create a Customer
    Problem.findOne().sort( { problemId: -1 } ).limit( 1 ).exec( function( err , data ) {  //for id autoincrement
        let counter = 0
        if( data != null)
            counter = data.problemId
    const problem = new Problem(req.body);
    problem.problemId=counter+1
    // Save a Customer in the MongoDB
    problem.save(problem)
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
});
};


exports.findAllProblems=(req,res)=>{
    Problem.find({}).then(data=>{

         res.send(data);
     }).catch(err=>{
         res.status(500).send({
             message:err.message
         });
     });
 }
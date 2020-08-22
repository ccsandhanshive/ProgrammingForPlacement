const db=require("../models");
const Webad=db.webads;

exports.create = (req, res) => {
    // Create a Customer
    Webad.findOne().sort( { id: -1 } ).limit( 1 ).exec( function( err , data ) {  //for id autoincrement
        let counter = 0
        if( data != null)
            counter = data.id
    const webad = new Webad(req.body);
   webad.id=parseInt(counter)+1
    // Save a Customer in the MongoDB
    webad.save(webad)
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
});
};
//List all blog
exports.findAllWebads=(req,res)=>{
   Webad.find({}).then(data=>{
    res=defaultOpearation(res)
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message
        });
    });
}
defaultOpearation=(res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    return res
}
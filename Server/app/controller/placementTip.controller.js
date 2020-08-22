const db=require("../models");
const PlacementTip=db.placementTips;

exports.create = (req, res) => {
    // Create a Customer
    PlacementTip.findOne().sort( { id: -1 } ).limit( 1 ).exec( function( err , data ) {  //for id autoincrement
        let counter = 0
        if( data != null)
            counter = data.id
    const placementTip = new PlacementTip(req.body);
    placementTip.id=parseInt(counter)+1
    // Save a Customer in the MongoDB
    placementTip.save(placementTip)
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
exports.findAllPlacementTips=(req,res)=>{
    PlacementTip.find({}).then(data=>{
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
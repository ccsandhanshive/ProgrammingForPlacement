const db=require("../models");
const company=db.companies;

exports.create=(req,res)=>{
    const newCompnay=new company({
        companyId:req.body.companyId,
        imageUrl:req.body.imageUrl,
        companyName:req.body.companyName,
        package:req.body.package,
        passingYear:req.body.passingYear,
        eligibalBranches:req.body.eligibalBranches,
        jobDescription:req.body.jobDescription,
        registrationLink:req.body.registrationLink
    }
    );
    newCompnay.save(newCompnay).then(data=>{
        res=this.defaultOpearation(res)
        res.send(data);
    
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"error in saving blog in DB"
        });
    });
};
//List all blog
exports.findAllCompanies=(req,res)=>{
   // var condition=id ?{title:{$regex:new RegExp(id)}}:{}
   company.find({}).then(data=>{
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
//update blog by Id
exports.update=(req,res)=>{
    const id=req.params.id;
    blog.findOneAndUpdate(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:`cannot update blog with id ${id}`
            });
        }else{
            res.send({
                message:'blog is updated'
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message:`unable to delete`
        });
    });
}
//deletblog by id
/*exports.deleteBlog=(req,res)=>{
      const title =req.query.title
      var condition=title ?{title:{$regex:new RegExp(title),$options:"i"}}:{}
      blog.find(condition).remove().then(data=>{
        res.send(data)
      }).catch(err=>{
          res.status(500).send({
              message:err.message
          });
      });
    
}*/
exports.delete=(req,res)=>{
    const id=req.params.id;
    blog.findOneAndRemove(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:`cannot delete ${id}`
            });
        }else{
            res.send({
                message:'blog deleted'
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message:'unable to delete'
        });
    });
}
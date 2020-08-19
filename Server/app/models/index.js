const dbConfig=require("../config/db.config.js");
const mongoose=require("mongoose");
const db={};
db.mongoose=mongoose;
db.url=dbConfig.url;
db.companies=require("./company.model.js")(mongoose)
db.topics=require("./topic.model.js")(mongoose)
db.problems=require("./problem.model")(mongoose)

module.exports=db;

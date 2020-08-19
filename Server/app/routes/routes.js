module.exports=app=>{

const companies=require("../controller/company.controller.js");
const topics=require("../controller/topic.controller.js")
const problem=require("../controller/problem.controller.js")
var router=require("express").Router();

router.post("/companies",companies.create);
router.get("/companies",companies.findAllCompanies);
/*router.put("/:id",companies.update)
router.delete("/:id",companies.delete);*/

router.post("/topics",topics.create);
router.get("/topics",topics.findAllTopics);


router.post("/problems",problem.create)
router.get("/problems",problem.findAllProblems)
app.use('/',router);
}
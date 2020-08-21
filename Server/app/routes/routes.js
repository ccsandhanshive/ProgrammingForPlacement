module.exports=app=>{

const companies=require("../controller/company.controller.js");
const topics=require("../controller/topic.controller.js")
const problem=require("../controller/problem.controller.js")
const webad=require("../controller/webad.controller.js")
const placementTips=require("../controller/placementTip.controller.js")
var router=require("express").Router();

router.post("/companies",companies.create);
router.get("/companies",companies.findAllCompanies);


router.post("/topics",topics.create);
router.get("/topics",topics.findAllTopics);


router.post("/problems",problem.create)
router.get("/problems",problem.findAllProblems)

router.post("/webads",webad.create)
router.get("/webads",webad.findAllWebads)

router.post("/placementTips",placementTips.create)
router.get("/placementTips",placementTips.findAllPlacementTips)


app.use('/',router);
}
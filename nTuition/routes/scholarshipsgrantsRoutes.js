const express = require("express");
const controller = require("../controllers/scholarshipsgrantsController");
const router = express.Router();

//Get all Scholarships/Grants.
router.get("/", controller.index);

//Get a single Scholarship/Grant by id.
router.get("/:postId", controller.show);

//Add a Scholarship/Grant.
router.post("/", controller.create);

//Replace existing Scholarship/Grant.
router.put("/:postId", controller.edit);

//Delete Scholarship/Grant by id.
router.delete("/:postId", controller.delete);

module.exports = router;

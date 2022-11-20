const express = require('express');
const controller = require('../controllers/institutionController');
const router = express.Router();


//GET /institutions: return json array of institutions
router.get("/", controller.institutions)

//GET /institutions/:id: return json obj of institution with id
router.get("/:id", controller.institution)

//POST /institutions: create institution
router.post("/", controller.create)

//PUT /institution: update instituition
router.put("/", controller.update)

//DELETE /institution/:institutionid: delete institution with id
router.delete("/:id", controller.delete)

module.exports = router;
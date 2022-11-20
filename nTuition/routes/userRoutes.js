const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();


//GET /institutions: return json array of users
router.get("/", controller.users)

//GET /institutions/:id: return json obj of user with id
router.get("/:id", controller.user)

//POST /institutions: create user
router.post("/", controller.create)

//PUT /institution: update user
router.put("/", controller.update)

//DELETE /institution/:institutionid: delete user with id
router.delete("/:id", controller.delete)

module.exports = router;
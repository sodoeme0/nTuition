const express = require('express');
const controller = require('../controllers/loanController');
const router = express.Router();

//GET/ loans: return array of loans object
router.get("/", controller.loans)

//POST/ loans: create new loan
router.post("/", controller.create)





module.exports = router;
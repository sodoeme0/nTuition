const express = require('express');
const controller = require('../controllers/loanController');
const router = express.Router();

//Get all loans.
router.get('/', controller.index);

//Get a single loan by id.
router.get('/:postId', controller.show);

//Add a loan.
router.post('/', controller.create);

//Replace existing loan.
router.put('/:postId', controller.edit);

//Delete loan by id.
router.delete('/:postId', controller.delete)

module.exports = router;
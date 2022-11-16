const express = require('express');
const controller = require('../controllers/loanController');
const router = express.Router();
const Loan = require('../models/loan');

//Get all loans.
router.get('/', async (req, res) => {

    try {
        const loans = await Loan.find();
        res.json(loans);
    } catch(err){
        res.json({message: err});
    }
});

//Get a single loan by id.
router.get('/:postId', async (req, res) => {
    const loan = await Loan.findById(req.params.postId);
    try{
        res.json(loan);
    } catch(err) {
        res.json(err);
    }
    
});


//Save a loan.
router.post('/', async (req, res) => {
    //Logic
    console.log(req.body);
    
    const loan = new Loan({
        loan_type : req.body.loan_type,
        loan_amount: req.body.loan_amount,
        subsidization: req.body.subsidization,
        interest_rate: req.body.interest_rate,
        loan_term: req.body.loan_term,
        lender_name: req.body.lender_name
    });
    try{
        const savedLoan = await loan.save();
        res.json(savedLoan);
    } catch(err) {
        res.json({message: err});
    }
    
});

//Replace existing loan.
router.put('/:postId', async (req, res) => {
    try {
        const updatedLoan = await Loan.updateOne({_id: req.params.postId}, {$set : {}});
    } catch(err){
        res.json({message: err});
    }
    
});

//Delete loan by id.
router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Loan.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch(err) {
        res.json({message: err});
    }
    
});




module.exports = router;
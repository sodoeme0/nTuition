const Loan = require('../models/loan');

//Get all loans
exports.index = async (req, res) => {

    try {
        const loans = await Loan.find();
        res.json(loans);
    } catch(err){
        res.json({message: err});
    }
};

//Get a single loan by id
exports.show = async (req, res) => {
    const loan = await Loan.findById(req.params.postId);
    try{
        res.json(loan);
    } catch(err) {
        res.json(err);
    }    
};

//Add a loan.
exports.create = async (req, res) => {
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
    
};

//Replace existing loan.
exports.edit = async (req, res) => {
    try {
        const updatedLoan = await Loan.updateOne({_id: req.params.postId}, {$set : {}});
    } catch(err){
        res.json({message: err});
    }
    
};


//Delete loan by id
exports.delete = async (req, res) => {
    try{
        const removedPost = await Loan.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch(err) {
        res.json({message: err});
    }
    
};
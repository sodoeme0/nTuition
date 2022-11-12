const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const loanSchema = new Schema({
        
    loan_type: {type: String},
    loan_amount: {type: Number},
    subsdization: {type: String},
    interest_rate: {type: Number},
    loan_term: {type: Number},
    lender_name: {type: String}



});


module.exports = mongoose.model("Loan", loanSchema)
const mongoose = require('mongoose');

const LoanSchema = mongoose.Schema({
    loan_type : {
        type: String
    },
    loan_amount: {
        type: Number
    },
    subsidization: {
        type: String
    },
    interest_rate: {
        type: Number
    },
    loan_term: {
        type: Number
    },
    lender_name: {
        type: String
    }
});

module.exports = mongoose.model('Loans', LoanSchema);
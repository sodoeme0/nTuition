const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    username: {type: String},
    password: {type: String},
    email_address: {type: String},
    current_institution: {type: String},
    gpa: {type: Number},
    user_type: {type: String}, // Get more insight on user types
    ethnicity: {type: String},
    gender: {type: String},
    date_of_birth: {type: String},
    primary_language: {type: String},
    location: {type: String},
    test_scores: {type: Number},
    last_login_date: {type: Date},
    active: {type: Boolean}

})

module.exports = mongoose.model("User", userSchema)
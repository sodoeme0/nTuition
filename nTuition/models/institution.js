const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const institutionSchema = new Schema({

    name: {type: String},
    location: {type: String},
    institution_type: {type: String},
    privacy_status: {type: String},
    cost: {type: String},
    courses: {type: String},
    majors: {type: String}

})

module.exports = mongoose.model("Institution", institutionSchema)
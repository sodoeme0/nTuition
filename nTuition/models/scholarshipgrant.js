const mongoose = require("mongoose");

const ScholarshipGrantSchema = mongoose.Schema({
  sg_category: {
    type: String,
  },
  sg_name: {
    type: String,
  },
  sg_deadline: {
    type: String,
  },
  sg_offered_by: {
    type: String,
  },
  sg_nationality: {
    type: String,
  },
  sg_description: {
    type: String,
  },
  sg_requirements: {
    essay: { type: Boolean },
    recommendations: { type: Boolean },
    min_gpa: { type: String },
  },
  sg_major: {
    type: String,
  },
  sg_type: {
    type: String,
  },
  sg_award_amount: { type: String },
  sg_application_link: {
    type: String,
  },
});

module.exports = mongoose.model("ScholarshipGrant", ScholarshipGrantSchema);

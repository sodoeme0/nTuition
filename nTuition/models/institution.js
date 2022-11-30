const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const institutionSchema = new Schema({
  name: { type: String },
  location: {
    street_addres1: { type: String },
    street_address2: { type: String },
    country: { type: String },
    state_province: { type: String },
    city: { type: String },
    postal_code: { type: String },
  },
  institution_type: { type: String },
  privacy_status: { type: String },
  cost: {
    in_state: { type: String },
    out_of_state: { type: String },
    online: { type: String },
    international: { type: String },
  },
  courses: { type: String },
  majors: { type: String },
});

module.exports = mongoose.model("Institution", institutionSchema);

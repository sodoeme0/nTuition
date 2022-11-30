const ScholarshipGrant = require("../models/scholarshipgrant");

//Get all Scholarships/Grants
exports.index = async (req, res) => {
  try {
    const scholarshipsgrants = await ScholarshipGrant.find();
    res.json({ scholarshipsgrants });
  } catch (err) {
    res.json({ message: err });
  }
};

//Get a single Scholarship/Grant by id
exports.show = async (req, res) => {
  const scholarshipsgrants = await ScholarshipGrant.findById(req.params.postId);
  try {
    res.json(scholarshipsgrants);
  } catch (err) {
    res.json(err);
  }
};

//Add a Scholarship/Grant.
exports.create = async (req, res) => {
  //Logic
  console.log(req.body);

  const scholarshipsgrants = new ScholarshipGrant({
    sg_category: req.body.category,
    sg_name: req.body.name,
    sg_deadline: req.body.deadline,
    sg_offered_by: req.body.offered_by,
    sg_nationality: req.body.nationality,
    sg_description: req.body.description,
    sg_requirements: {
      essay: req.body.requirements.essay,
      recommendations: req.body.requirements.recommendations,
      min_gpa: req.body.requirements.min_gpa,
    },
    sg_major: req.body.major,
    sg_type: req.body.type,
    sg_award_amount: req.body.award_amount,
    sg_application_link: req.body.application_link,
  });
  try {
    const savedScholarshipGrant = await scholarshipsgrants.save();
    res.json(savedScholarshipGrant);
  } catch (err) {
    res.json({ message: err });
  }
};

//Replace existing Scholarship/Grant.
exports.edit = async (req, res) => {
  try {
    const updatedScholarshipsGrants = await ScholarshipGrant.findByIdAndUpdate(
      req.params.postId,
      {
        sg_category: req.body.category,
        sg_name: req.body.name,
        sg_deadline: req.body.deadline,
        sg_offered_by: req.body.offered_by,
        sg_nationality: req.body.nationality,
        sg_description: req.body.description,
        sg_requirements: req.body.requirements,
        sg_major: req.body.major,
        sg_type: req.body.type,
        sg_award_amount: req.body.award_amount,
        sg_application_link: req.body.application_link,
      }
    );

    //Response
    res.json(updatedScholarshipsGrants);
  } catch (err) {
    res.json({ message: err });
  }
};

//Delete Scholarship/Grant by id
exports.delete = async (req, res) => {
  try {
    const removedPost = await ScholarshipGrant.remove({
      _id: req.params.postId,
    });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

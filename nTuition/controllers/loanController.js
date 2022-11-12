const model = require('../models/loan');

// get array of loan objects
exports.loans = (req, res, next) =>{
    model.find()
    .then(loans => res.json({loans}))
    .catch(err=>{
        res.sendStatus(200)
        console.log(err.stack) //handle err
    })
}
 

// create new loan
exports.create = (req, res, next) =>{
    let loan = new model(req.body); // create new loan doc
    
    loan.save()
    .then(loan =>{
        res.sendStatus(201) //if loan created successfully send status 201
    })
    .catch(err=>{
        console.log(err.stack) //if loan created unsuccessfully send status 400
        res.sendStatus(400)
    })

}
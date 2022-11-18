const model = require('../models/institution');

// get array of institution objects
exports.institutions = (req, res, next) =>{
    model.find()
    .then(institutions => res.json({institutions}))
    .catch(err=>{
        res.sendStatus(400)
        console.log(err.stack)// handle errror later
    }) 
}

// get json object of institution with id
exports.institution = (req, res, next) =>{
console.log("here")
    let id = req.params.id
    model.findById(id)
    .then(institution=>{
        if(institution){
            return res.json({institution})
        }
        else{
            return res.sendStatus(404); //if institution not found send status 404
        }
    })

}

// save institution into database
exports.create = (req, res, next) =>{

    let institution = new model(req.body); // create new loan doc
    
    institution.save()
    .then(institution =>{
        res.sendStatus(201) //if institution created successfully send status 201
    })
    .catch(err=>{
        console.log(err.stack) //if institution created unsuccessfully send status 400
        res.sendStatus(400)
    })

    

}
// Update instituition in databse with id
exports.update = (req, res, next) =>{
        let institution = model(req.body);
        let id = institution._id;
        model.findByIdAndUpdate(id, institution, {useFindAndModify: false,runValidators: true})
        .then(institution=>{
            if(institution){           
                 return res.sendStatus(204) //if institution updated successfully send status 204
            }
            else{ //if institute not found create new one
                institution= model(req.body)
                institution.save()
                .then(institution =>{
                 res.sendStatus(201) //if institution created successfully send status 201
             })
                 .catch(err=>{
                    console.log(err.stack) //if institution created unsuccessfully send status 400
                    res.sendStatus(400)
                 })
            }
        })
        .catch(err=>{
            console.log(err.stack)
        })

}

// delete instituiton with id
exports.delete  = (req, res, next) =>{

    let id = req.params.id
    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(institution=>{
        if(institution){
            res.sendStatus(204) //if institution deleted successfully send status 204
        }
        else{
            res.sendStatus(404) //if institution not found send status 404
        }
        
    })
    .catch(err=>{
        console.log(err.stack)
        res.sendStatus(400)
    })


}

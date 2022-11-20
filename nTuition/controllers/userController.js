const model = require('../models/user');
 // get array of user objects
exports.users = (req, res, next) =>{
    model.find()
    .then(users => res.json({users}))
    .catch(err=>{
        res.sendStatus(400)
        console.log(err.stack)// handle errror later
    }) 
}

// get json object of user with id
exports.user = (req, res, next) =>{

    let id = req.params.id
    model.findById(id)
    .then(user=>{
        if(user){
            return res.json({user})
        }
        else{
            return res.sendStatus(404); //if user not found send status 404
        }
    })

}

// save user into database
exports.create = (req, res, next) =>{

    let user = new model(req.body); // create new loan doc
    
    user.save()
    .then(user =>{
        res.sendStatus(201) //if user created successfully send status 201
    })
    .catch(err=>{
        console.log(err.stack) //if user created unsuccessfully send status 400
        res.sendStatus(400)
    })

    

}
// Update instituition in databse with id
exports.update = (req, res, next) =>{
        let user = model(req.body);
        let id = user._id;
        model.findByIdAndUpdate(id, user, {useFindAndModify: false,runValidators: true})
        .then(user=>{
            if(user){           
                 return res.sendStatus(204) //if user updated successfully send status 204
            }
            else{ //if institute not found create new one
                user= model(req.body)
                user.save()
                .then(user =>{
                 res.sendStatus(201) //if user created successfully send status 201
             })
                 .catch(err=>{
                    console.log(err.stack) //if user created unsuccessfully send status 400
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
    .then(user=>{
        if(user){
            res.sendStatus(204) //if user deleted successfully send status 204
        }
        else{
            res.sendStatus(404) //if user not found send status 404
        }
        
    })
    .catch(err=>{
        console.log(err.stack)
        res.sendStatus(400)
    })


}

const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
require('dotenv').config();


const bcrypt = require('bcrypt');

router.post('/', (req, res)=>{
    console.log("sessions/post");
    User.findOne({username:req.body.username}, (err, foundUser)=>{
        if(bcrypt.compareSync(req.body.password, foundUser.password)){
            req.session.currentUser = foundUser;
            res.json(foundUser);
        } else {
            res.json({
                status:401
            });
        }
    });
});

<<<<<<< HEAD
router.delete('/', (req, res)=>{
    req.session.destroy(() => {
		res.json({
			status:200
		})
    });
});

router.post('/newuser', (req, res)=>{
	console.log(req.body.username);
    console.log(req.body.password);
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	console.log(req.body.password);
    User.create(req.body, (err, createdUser)=>{
        res.json(createdUser);
=======
router.post('/newuser', (req, res)=>{
  console.log("3" + req.body.password);
    //encrypt what the user typed for password
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    console.log(req.body.password);
    User.create(req.body, (err, createdUser)=>{
      console.log(createdUser);
        res.status(202).json({
          status:202,
          message:"user created"
        });
>>>>>>> 8be4355012c5ff513e612ce389d4b5886b4884d1
    });
});

router.delete('/user/:id', (req, res)=>{
    User.findOneAndRemove();
});

module.exports = router;

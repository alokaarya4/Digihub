const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');
const jwt = require('jsonwebtoken');
const verifyingToken = require('./verifyingToken');
require('dotenv').config();


router.post('/add', (req, res) => {
    console.log(req.body);

    // saving the data to mongodb
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// colon denotes a url parameter
router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id);
    
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyemail/:email', (req, res) => {
    Model.find({ email : req.params.email })
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/authenticate', (req, res) => {

   
    Model.findOne(req.body)
    .then((result) => {

        if(result){


        const payload = { _id : result._id, email : result.email, role : result.role };

        // create token
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn: '7 days'},
            (err, token) => {
                if(err) {
                    console.log(err);
                    res.status(500).json(err);

                }
                else res.status(200).json({token : token, role : result.role});
            }
        )

        }

      else res.status(401).json({status : 'login failed'})
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;
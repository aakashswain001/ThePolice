const express = require('express');
const router = express.Router();
const Aadhaar = require('../models/aadhaar');
// get a list of ninjas from the db
router.get('/aadhaars', function (req, res, next) {

    Aadhaar.find({}).then(function (aadhaar) {
        res.send(aadhaar);
    });
});

// add a new ninja to the db
router.post('/aadhaars', function (req, res, next) {
    Aadhaar.create(req.body).then(function (aadhaar) {
        res.send(aadhaar);
    }).catch(next);
});

module.exports = router
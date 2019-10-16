var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const VATSIM = require("../harvest")

const VATSIMInquiry = VATSIM.VATSIMModel; 

/* GET home page. */
router.get('/', function(req, res, next) {

  VATSIMInquiry.find({}, (err, vatsims) => {

    res.render('index', { title: 'VATSIM', data: vatsims});
  });

});

module.exports = router;
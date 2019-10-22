var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
require('../app_api/models/VATSIMmodel');
const VATSIM = mongoose.model('VATSIM');

//let VATSIMInquiry = VATSIM.readVATSIM(); 

/* GET home page. */
router.get('/', function(req, res, next) {
    
  VATSIM.find({}, (err, vatsims) => {

    res.render('index', { title: 'VATSIM', data: vatsims});
  },).limit(10).sort({created_at:1});
});

module.exports = router;
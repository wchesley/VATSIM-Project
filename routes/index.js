var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
require('../app_api/models/VATSIMmodel');
const VATSIM = mongoose.model('VATSIM');
let data = require('../app_api/models/VATSIMCrud')
//let VATSIMInquiry = VATSIM.readVATSIM(); 

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'VATSIM', data: data.readVATSIM()});
  });


module.exports = router;
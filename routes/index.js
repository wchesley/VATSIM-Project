var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
require('../app_api/models/VATSIMmodel');
const VATSIM = mongoose.model('VATSIM');
let data = require('../app_api/models/VATSIMCrud')
//let VATSIMInquiry = VATSIM.readVATSIM(); 
/**
 * Example for reading data from mongoose; 
 * this is a dummy record, only mocked data;
 */
const client = {
  id: 100,
  name:"dude",
  role:"pilot"
}
/* GET home page. */
router.get('/', function(req, res, next) {
  database = data.readVATSIM();
  if(database != undefined){
    res.render('index', { title: 'VATSIM', data: database });
  }
  });


/**
 * GET single client
 */
router.get('/api/one', function(req, res, next) {
  res.send(`${client.name} is a ${client.role}`);
})

/**
 * Pass client back as json object
 */
router.get('/api/json/one', function(req, res, next) {
  res.json(client); 
  //at url: LocalHost:3000/api/json/one YOu would see the whole json object for client; 
})

module.exports = router;
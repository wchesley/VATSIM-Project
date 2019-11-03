var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
require('../app_api/models/VATSIMmodel');
const VATSIM = mongoose.model('VATSIM');
let data = require('../app_api/models/VATSIMCrud')
let vatController = require("../controller/vatsimController");
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
router.get('/', (req, res, next) => {
  VATSIM.find({}, (err, vatsimData) => {
    if(err){
      console.log(`ERROR!:${err}`)
    }
    else if (vatsimData != undefined){
      res.json(vatsimData);
    }
  }).limit(10);
});


/**
 * GET single client by callsign
 */

router.get('/api/callsign/:callsign', (req, res, next) => {
  VATSIM.find({}, (err, callsign) => {
    if(err){
      console.log(`ERROR!:${err}`)
    }
    else if(callsign != undefined){
      res.json(callsign); 
    }
  }).where({callsign:req.param.callsign})
})

/**
 * Pass client back as json object
 */
router.get('/api/ZSE/incoming', (req, res, next) => {
  VATSIM.find({}, 
  (err, ZSEFlights) => {
    if(err){
      return console.log(err)
    }
    else{
      res.json(ZSEFlights);
    }
     
  }).where({planned_destairport:["KSEA","KDPX","KGEG"]}) 
})

router.get('/api/ZSE/incoming/:limit', (req, res, next) =>{
  //let limit = req.params.limit; 
  VATSIM.find({ $or:[ {planned_destairport:'KSEA',planned_destairport:'KGEG'} ]},
    (err, ZSEFlights) => {
      
      if(err){
        return console.log(err)
      }
      else{
        console.log()
        res.json(ZSEFlights)
      }
    }).limit(2)
})

router.get('/api/ZSE/departing', (req, res, next) => {
  var query = VATSIM.where({planned_depairport:['KSEA',"KDPX","KGEG"]})
  query.find((err, results) => {
    if(err){
      console.log(err)
    }
    else if(results != undefined || ""){
      res.json(results)
    }
  })

})

module.exports = router;
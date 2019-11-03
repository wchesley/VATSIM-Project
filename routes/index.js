var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
require('../app_api/models/VATSIMmodel');
const VATSIM = mongoose.model('VATSIM');
let data = require('../app_api/models/VATSIMCrud')
let vatController = require("../controller/vatsimController");

/**
 * TODO: 
 * Migrate validation logic to controller
 * migrate database calls to controller
 */

/* GET home page. */
router.get('/', (req, res, next) => {
  data.readVATSIM((err, vatsimData) => {
    if(err){
      return next(err)
    }
    else{
      return res.render('index',{title:'Vatsimd',data:vatsimData})
    }
  })
});


/**
 * GET single client by callsign
 */

router.get('/api/callsign/:callsign', (req, res, next) => { 
  data.findVATSIM("callsign", req.params.callsign, 1, (err, callsign) => {
    if(err){
      return next(err)
    }
    else{
      return res.json(callsign)
    }
  })
})

/**
 * Find incoming flights based on given airport based on ICAO code
 * 
 */
router.get('/api/incoming/:airport/:limit', (req, res, next) => {
  data.findVATSIM("planned_destairport", req.params.airport, req.params.limit, (err, result) => {
    if(err){
      return next(err)
    }
    else{
      return res.json(result)
    }
  })
})

/**
 * Find departing flights based on given airport based on ICAO code
 * 
 */
router.get('/api/departed/:airport/:limit', (req, res, next) => {
  data.findVATSIM("planned_depairport", req.params.airport, req.params.limit, (err, result) => {
    if(err){
      return next(err)
    }
    else{
      return res.json(result)
    }
  })
})

/**
 * Search for anything within the VATSIM collection, specifiying one of the 41 predefined fields
 * and then the specific item you are looking for. 
 * For Example /api/find/clienttype/pilot/10
 * a call made to this URL would return the first 10 pilots in the database
 */
router.get('/api/find/:field/:query/:limit', (req, res, next) => {
  data.findVATSIM(req.params.field, req.params.query, req.params.limit, (err, results) => {
    if(err){
      return next(err)
    }
    else return res.json(results)
  })
})

/**
 * Finds all incoming flights to ZSE area: 
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

router.get('/api/ZSE/departed', (req, res, next) => {
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
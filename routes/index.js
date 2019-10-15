var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* VATSIM Inquiry Schema  */
const VATSIMInquirySchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    role: String,
    email: String,
  }
);

const VATSIMInquiry = new mongoose.model('inquiry', VATSIMInquirySchema);

const writeToDatabase = (record) => {

  let inquiry = new VATSIMInquiry(record);
  
  inquiry.save((err, inquiry) => {
    if(err) {
      return console.error(err);
    }else{
      return inquiry;
    }
  });

  //mongoose.connection.close();
};

/* GET home page. */
router.get('/', function(req, res, next) {

  VATSIMInquiry.find({}, (err, inquiries) => {

    res.render('index', { title: 'VATSIM Mongoose Example', data: inquiries});
  });

});

router.post('/submit', (req, res, next) => {

    let record = {
      fname: req.body.fname,
      lname: req.body.lname,
      role: req.body.roleselect,
      email: req.body.email
    };

    writeToDatabase(record);
    
    res.render('result', {inquiry: record});
    //res.send(req.body.fname + " " + req.body.lname);    
    
});

module.exports = router;
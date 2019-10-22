let mongoose = require('mongoose');
require('./VATSIMmodel');
const VATSIMModel = mongoose.model('VATSIM');
let data = module.exports = {};

data.writeVATSIM = (parsedVATSIM) => {
    let record = VATSIMModel(parsedVATSIM);
    record.save((err, record) => {
        if(err) {
            return console.log(`ERROR WRITING ${record} to database\nERROR: ${err}`);
        }
        else {
            return record; 
        }
    })
}
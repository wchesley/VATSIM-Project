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

data.readVATSIM = async () => {
    VATSIMModel.find({}, (err, vatsims) => {
        if(err) {
            return console.log(`ERROR READING DATA: ${err}`);
        } 
        else {
            return vatsims;
        }
    }).limit(10).sort({created_at:-1});
}
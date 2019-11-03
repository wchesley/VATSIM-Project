let mongoose = require('mongoose');
require('./VATSIMmodel');
const VATSIMModel = mongoose.model('VATSIM');


writeVATSIM = (parsedVATSIM) => {
    let record = VATSIMModel(parsedVATSIM);
    record.save((err, record) => {
        if(err) {
            return console.log(`ERROR WRITING ${record} to database\nERROR: ${err}`);
        }
        else {
            console.log("wrote to database"); 
            return record; 
        }
    })
}

const readVATSIM = (callback) => {
    VATSIMModel.find({}, (err, vatsims) => {
        if(err) {
            return console.log(`ERROR READING DATA: ${err}`);
        } 
        else {
            return callback(null, vatsims);
        }
    }).limit(10).sort({created_at:-1})
}

/**
 * Search Vatsim collection 
 * @param {Mongoose field item} field 
 * @param {What you want from database} query 
 * @param {Limit on returned number of items} limit 
 * @param {callback function to return control to router/controller} callback 
 */
let findVATSIM = (field, query, limit, callback) => {
    let limit = parseint(limit);  
    VATSIMModel.find({}, (err, results) => {
        if(err){
            return callback(new Error(`ERROR: ${err}`))
        }
        else{
            return callback(null, results)
        }
    }).where(field + ':' + query).limit(limit)
}

module.exports = {
    writeVATSIM,
    readVATSIM,
    findVATSIM,

};
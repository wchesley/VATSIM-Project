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

const readVATSIM = async () => {
    VATSIMModel.find({}, (err, vatsims) => {
        if(err) {
            return console.log(`ERROR READING DATA: ${err}`);
        } 
        else {
            //return vatsims;
        }
    }).limit(10).sort({created_at:-1}).then(function(vatsims){
        //console.log(vatsims);
        return vatsims;  
    })
}

ReadPseudoVATSIM = () => {
    pseudoData = {
        name:"Calvin Klien",
        callsign:"Big Papa",
        role:"Pilot"
    }
    return pseudoData; 
}
module.exports = {
    writeVATSIM,
    readVATSIM,
    ReadPseudoVATSIM,
    
};
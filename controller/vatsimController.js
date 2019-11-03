const request = require('request');
const apiOptions = {
    server : 'http://localhost:3000'
  };
  if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://vatsim.herokuapp.com/';
  }

const data = require('../app_api/models/VATSIMCrud')

homepage = function(req, res) {
    //set request module's options
    const reqOptions = {
        url: apiOptions.server + '/api/',
        method:'GET',
        json:{},
    }
    //send the acutal reques. 
    request(reqOptions, (err, res, body) => {
        if(err) {
            console.log(err); 
        }
        else if (res.statusCode === 200) {
            console.log(body);
        }
        else {
            console.log(res.statusCode);
        }
    }) 
}


const _renderHomePage = function(req, res, responseBody){
    
}

let index = () => {
    return data.readVATSIM(); 
}


module.exports = {
    homepage,
    index,
}
//const request = require('request');
const index = '/';
const data = require('../app_api/models/VATSIMCrud')
var express = require('express')
homepage = function(req, res) {
    res = data.readVATSIM();
    return res;  
}
module.exports = {
    homepage
}
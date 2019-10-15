const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config()
const mongoose = require('mongoose');
var app = module.exports = {};

class Client {

    /*
    callsign:cid:realname:clienttype:frequency:latitude:longitude:altitude:groundspeed:groundspeed:planned_tascruise:planned_depairport:planned_altitude:planned_destairport:server:protrevision:rating:transponder:facilitytype:visualrange:planned_revision:planned_flighttype:planned_deptime:planned_actdeptime:planned_hrsenroute:planned_minenroute:planned_hrsfuel:planned_minfuel:planned_altairport:planned_remarks:planned_route:planned_depairport_lat:planned_depairport_lon:planned_destairport_lat:planned_destairport_lon:atis_message:time_last_atis_received:time_logon:heading:QNH_iHg:QNH_Mb:
    */
    constructor( callsign, cid, realname, clienttype, frequency, latitude, longitude, altitude, groundspeed, planned_tascruise, planned_depairport, planned_altitude,
                 planned_destairport, server, protrevision, rating, transponder, facilitytype, visualrange, planned_revision, planned_flighttype, planned_deptime, planned_actdeptime,
                 planned_hrsenroute, planned_minenroute, planned_hrsfuel, planned_minfuel, planned_altairport, planned_remarks, planned_route, planned_depairport_lat, planned_depairport_lon,
                 planned_destairport_lat, planned_destairport_lon, atis_message, time_last_atis_received, time_logon, heading, QNH_iHg, QNH_Mb)
    {
        this.callsign = callsign;
        this.cid = cid;
        this.realname = realname;
        this.clienttype = clienttype;
        this.frequency = frequency;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.groundspeed = groundspeed;
        this.planned_tascruise = planned_tascruise;
        this.planned_depairport = planned_depairport;
        this.planned_altitude = planned_altitude;
        this.planned_destairport = planned_destairport;
        this.server = server;
        this.protrevision = protrevision;
        this.rating = rating;
        this.transponder = transponder;
        this.facilitytype = facilitytype;
        this.visualrange = visualrange;
        this.planned_revision = planned_revision;
        this.planned_flighttype = planned_flighttype;
        this.planned_deptime = planned_deptime;
        this.planned_actdeptime = planned_actdeptime;
        this.planned_hrsenroute = planned_hrsenroute;
        this.planned_minenroute = planned_minenroute;
        this.planned_hrsfuel = planned_hrsfuel;
        this.planned_minfuel = planned_minfuel;
        this.planned_altairport = planned_altairport;
        this.planned_remarks = planned_remarks;
        this.planned_route = planned_route;
        this.planned_depairport_lat = planned_depairport_lat;
        this.planned_depairport_lon = planned_depairport_lon;
        this.planned_destairport_lat = planned_destairport_lat;
        this.planned_destairport_lon = planned_depairport_lon;
        this.atis_message = atis_message;
        this.time_last_atis_received = time_last_atis_received;
        this.time_logon = time_logon;
        this.heading = heading;
        this.QNH_iHg = QNH_iHg;
        this.QNH_Mb = QNH_Mb;
    }

}

const VATSIMSchema = new mongoose.Schema({
    callsign : String,     
    cid : String,
    realname : String,
    clienttype : String,
    frequency : String,
    latitude : String,
    longitude : String,
    altitude : String,
    groundspeed : String,
    planned_aircraft : String,
    planned_tascruise : String,
    planned_depairport : String,
    planned_altitude : String,
    planned_destairport : String,
    server : String,
    protrevision : String,
    rating : String,
    transponder : String,
    facilitytype : String,
    visualrange : String,
    planned_revision : String,
    planned_flighttype : String,
    planned_deptime : String,
    planned_actdeptime : String,
    planned_hrsenroute : String,
    planned_minenroute :String, 
    planned_hrsfuel : String,
    planned_minfuel : String,
    planned_altairport : String,
    planned_remarks : String,
    planned_route : String,
    planned_depairport_lat : String,
    planned_depairport_lon : String,
    planned_destairport_lat : String,
    planned_destairport_lon : String, 
    atis_message : String,
    time_last_atis_received : String,
    time_logon : String,
    heading : String,
    QNH_iHg : String,
    QNH_Mb : String,
});

const VATSIMModel = new mongoose.model('VATSIM', VATSIMSchema);

const writeClientToPersist = (client) => {
    let record = new VATSIMModel(client);
    record.save((err, record) => {
        if(err){
            return console.log(err);
        }
        else{
            return record; 
        }
    })
}


const parseCLIENT = (client) => {
    // callsign:
    let callsign = parts[0];    
    
    // cid:
    let cid = parts[1];
    
    // realname:
    let realname = parts[2];
    
    // clienttype:
    let clienttype = parts[3];
    
    // frequency:
    let frequency = parts[4];

    // latitude:
    let latitude = parts[5];

    // longitude:
    let longitude = parts[6];

    // altitude:
    let altitude = parts[7];

    // groundspeed:
    let groundspeed = parts[8];

    // planned_aircraft:
    let planned_aircraft = parts[9];

    // planned_tascruise:
    let planned_tascruise = parts[10];

    // planned_depairport:
    let planned_depairport = parts[11];

    // planned_altitude:
    let planned_altitude = parts[12];

    // planned_destairport:
    let planned_destairport = parts[13];

    // server:
    let server = parts[14];

    // protrevision:
    let protrevision = parts[15];

    // rating:
    let rating = parts[16];

    // transponder:
    let transponder = parts[17];

    // facilitytype:
    let facilitytype = parts[18]; 

    // visualrange:
    let visualrange = parts[19];
    
    // planned_revision:
    let planned_revision = parts[20];

    // planned_flighttype:
    let planned_flighttype = parts[21];

    // planned_deptime:
    let planned_deptime = parts[22];

    // planned_actdeptime:
    let planned_actdeptime = parts[23];

    // planned_hrsenroute:
    let planned_hrsenroute = parts[24];

    // planned_minenroute:
    let planned_minenroute = parts[25]; 

    // planned_hrsfuel:
    let planned_hrsfuel = parts[26];

    // planned_minfuel:
    let planned_minfuel = parts[27];

    // planned_altairport:
    let planned_altairport = parts[28];

    // planned_remarks:
    let planned_remarks = parts[29];

    // planned_route:
    let planned_route = parts[30];

    // planned_depairport_lat:
    let planned_depairport_lat = parts[31];

    // planned_depairport_lon:
    let planned_depairport_lon = parts[32];

    // planned_destairport_lat:
    let planned_destairport_lat = parts[33];

    // planned_destairport_lon:
    let planned_destairport_lon = parts[34]; 
    // atis_message:
    let atis_message = parts[35];

    // time_last_atis_received:
    let time_last_atis_received = parts[36];

    // time_logon:
    let time_logon = parts[37];
    
    // heading:
    let heading = parts[38];
    
    // QNH_iHg:
    let QNH_iHg = parts[39];
    
    // QNH_Mb: 
    let QNH_Mb = parts[40];

    //TODO: 
    // logic to determine what schema to use - switch stmt
    // write shcema's 
    // verify Fetch is working. 
    // logic to validate data? ensure we have data to write else put in n/a? 
}

const parseVATSIM = (data) => {

    let start = false;

    lines = data.split("\n");

    lines.forEach(element => {

        parts = element.split(':');
        
        // callsign:
        let callsign = parts[0];

       
        
        if(!callsign.startsWith(";") && !callsign.startsWith(" ") && start){
            console.log(`Callsign: ${callsign}`);
        } 

        if(callsign.startsWith("!CLIENTS")){
            start = true;
        }  

        if(start == true){
            parseCLIENT(parts); 
        }

        if(callsign.startsWith("!SERVERS" || "!PREFILE")){
            //assume end of our desired data; instead of reading the rest of the file
            //we'll end it here. 
            start = false;
            return;
        } 

        // cid:
        // realname:
        // clienttype: PILOT, ATC, OBSERVER?
        // frequency:
        // latitude:
        // longitude:
        // altitude:
        // groundspeed:
        // planned_aircraft:
        // planned_tascruise:
        // planned_depairport:
        // planned_altitude:
        // planned_destairport:
        // server:
        // protrevision:
        // rating:
        // transponder:
        // facilitytype:
        // visualrange:
        // planned_revision:
        // planned_flighttype:
        // planned_deptime:
        // planned_actdeptime:
        // planned_hrsenroute:
        // planned_minenroute:
        // planned_hrsfuel:
        // planned_minfuel:
        // planned_altairport:
        // planned_remarks:
        // planned_route:
        // planned_depairport_lat:
        // planned_depairport_lon:
        // planned_destairport_lat:
        // planned_destairport_lon:
        // atis_message:
        // time_last_atis_received:
        // time_logon:
        // heading:
        // QNH_iHg:
        // QNH_Mb:

    });

    console.log("DUDE " + new Date().toTimeString());    

};

app.task = cron.schedule('*/2 * * * *', () => {
    console.log("RUNNIGN CRON JOB"); 
   // try{
     //   let request = await fetch('http://us.data.vatsim.net/vatsim-data.txt')
     //   let response = parseVATSIM(request)
   // }
   // catch(error){
       // console.log("ERROR FETCHING DATA: " + error)
    //}
   axios.get('http://us.data.vatsim.net/vatsim-data.txt')
    .then( (response) => {
        parseVATSIM(response.data);
   })
    .catch( (error) => {
       console.log(error);
    });

});
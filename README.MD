#   VATSIM Data Parsing
## Assignments 3, 4 & 5

---
## Assignment 3

As demonstrated on 10/07/2019 and 10/09/2019, this assignment is about reading from the VATSIM data files I discussed with you.

Recall that you are asked to read the files labeled "URL0" at this link:  https://status.vatsim.net/

Also recall that this datafile is updated every two minutes.

The objective for this assignment is to read the datafile - http://us.data.vatsim.net/vatsim-data.txt for instance - so that you can parse records for the following roles:

- Observer
- Controller
- Pilot

You can find the guide code to help you at https://github.com/ahuimanu/CIDM4382-Fall2019 in the following projects:

- VATSIMHarvester
- MongooseExample  

However, using VATSIMHarvester mostly, see how far you can get by continuing to use the code I have in the harvest.js file.

Recall that I use the split method in JavaScript to break the string up:

First by lines
Then by the `:` delimiting character
And then by looking for all records in the !CLIENTS section
If you can get that far, then print all of the parts for each field and for each row.  Try printing these using console.log statements and also by using a Pug template.

---
## Assignment 4

### CRUD operations from the VATSIM Data

Mongoose provides information on performing Create, Read, Update, and Delete functions for saving JSON documents into a MongoDB application.  Using your MongDB Atlas account, and the model's you have recently created for the previous VATSIM-focused assignment.

Move the project forward by providing ExpressJS code to take the translated JSON/JavaScript objects and write them to the database at MongoDB Atlas.

The Mongoose docs should be sufficient for this: https://mongoosejs.com/docs/index.html

Submitting your Work

Provide the URL to your Github repository and upload a zipped version of your work to this dropbox.

---
## Assignment 5 
### Providing Service Endpoints for the VATSIM Data

The Response Object in the ExpressJS Framework provides the means for either rendering a Pug template OR just sending back a JSON object. The objective here is to provide an API similar to that of FlightAware based on the VATSIM data you've collected and stored in your MongoDB Atlas database.  This will of course require that you read the data from the database in the controller methods you associate with the URL service endpoints in your routes. 

Here is the documentation for the Response Object in Express:  https://expressjs.com/en/4x/api.html#res

The objective here is to provide a REST api of your own that closely mimics the following methods from the Flightaware FlightXML2 API:  https://flightaware.com/commercial/flightxml/documentation2.rvt and  https://flightaware.com/commercial/flightxml/explorer/

These will only be for Flights and not controllers, for now:

- Arrived
- Departed
- Enroute
- FlightInfo
- Scheduled

A Word about the Scheduled Method

In order to implement the Scheduled method, you'll need to accommodate an entirely new entity from the !PREFILE: section of the data file. The entails creating a new Mongoose Schema as the fields are slightly different from a Flight.

---

### Deliverables
1. ~Read text file from http://us.data.vatsim.net/vatsim-data.txt~
2. ~Parse said text file, grab all listings under !CLIENTS and only those listings~
3. ~Output something fromeach client to console and pug template~
4. ~Save data to mongoDB~
5. ~Read Data from mongoDB~
6. ~Heroku?~
7. ~Filter by set ARTCC zone, specifically for me it is ZSE~
8. ~Expose API To read from database and show in pug template~

## Submitting your Work

ZIP up your project and also supply the URL to your Github repository.
Submitted so far: 
- ~Assignment 3~
- Assignement 4 **DUE: Oct 27**
- Assignment 5 **DUE: Nov 3**

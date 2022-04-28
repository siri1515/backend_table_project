//deployed to https://2513demo.azurewebsites.net/

//setup:
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const CONNECTION_URL = process.env.CONNECTION_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var database, student_collection;


//public methods:

//GET all students
app.get('/api/students', (req, res) => {
    student_collection.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
})

//GET a customer by customer id
app.get('/api/students/:_id', (req, res) => {
    var _id = req.params._id;
    student_collection.find({"_id": ObjectId(_id)}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
})

//POST a new customer (create new)
app.post('/api/students', (req, res) => {
    student_collection.insert(req.body, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        //return body with new _id
        res.send(req.body);
    });
})

//PUT changes to customer (update existing customer by id)
app.put('/api/students', (req, res) => {

    var myquery = { _id: ObjectId(req.body.student._id) };

    delete req.body.student._id;
    var newvalues = { $set: req.body.student };
  
    student_collection.updateOne(myquery, newvalues, function(error, result) {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
});

//DELETE customer by id
app.delete('/api/students/:_id', (req, res) => {
    var _id = req.params._id;
    console.log("delete: " + _id);
    student_collection.deleteOne({ "_id": ObjectId(_id) }, function(error, result) {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
});



//runs the APP (webservice) - connects via <CONNECTION_URL> to <DATABASE_NAME> and listens for requests on <PORT>:
app.listen(PORT, () => {
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
      if(error) {
          throw error;
      }
      database = client.db(DATABASE_NAME);
      student_collection = database.collection("students");

      console.log("Connected to `" + DATABASE_NAME + "`!");
      console.log('Listening on localhost:' + PORT);
    });
});

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();

app.use(compression({ level: 1 }))

// setting up port
app.set('PORT', 3000);
// serving static files and setting middleware
app.use(express.static('./public'));
app.use(bodyParser.json());

//aws ec2 taken down
app.get(`/photos`, (req, res) => {
    const listingId = req.query.listingid;
    axios.get(`http://ec2-3-18-212-71.us-east-2.compute.amazonaws.com/photos/?listingid=${listingId}`)
    .then((result) => {
        res.status(200).send(result.data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}); 


app.get(`/booking`, (req, res) => {
    const listingId = req.query.listingid;
    axios.get(`http://ec2-52-53-150-158.us-west-1.compute.amazonaws.com/booking/?listingid=${listingId}`)
    .then((result) => {
        res.status(200).send(result.data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}); 


app.get(`/listinginfo`, (req, res) => {
    const listingId = req.query.listingid;
    axios.get(`http://ec2-13-57-31-14.us-west-1.compute.amazonaws.com/listinginfo/`)
    .then((result) => {
        res.status(200).send(result.data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}); 

//waiting for aws link
app.get(`/messages`, (req, res) => {
    const listingId = req.query.listingid;
    axios.get(`http://localhost:3001/messages/?listingid=${listingId}`)
    .then((result) => {
        res.status(200).send(result.data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}); 



module.exports = app;


const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
// setting up port
app.set('PORT', 3000);
// serving static files and setting middleware
app.use(express.static('./public'));
app.use(bodyParser.json());

// routing request to correct servers 
const route = {
    'messages': '3001',
    'photos': '3002',
    'booking': '3003',
    'listinginfo': '3004',
}

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

app.get(`/photos`, (req, res) => {
    const listingId = req.query.listingid;
    axios.get(`http://localhost:3002/photos/?listingid=${listingId}`)
    .then((result) => {
        res.status(200).send(result.data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}); 


app.get(`/booking`, (req, res) => {
    const listingId = req.query.listingid;
    axios.get(`http://localhost:3003/booking/?listingid=${listingId}`)
    .then((result) => {
        res.status(200).send(result.data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}); 


app.get(`/listinginfo`, (req, res) => {
    const listingId = req.query.listingid;
    axios.get(`http://localhost:3004/listinginfo/?listingid=${listingId}`)
    .then((result) => {
        res.status(200).send(result.data);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
}); 



module.exports = app;


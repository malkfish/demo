import fetch from node-fetch;

const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

const CLIENT_ID = require('./private/keys').CLIENT_ID;
const CLIENT_SECRET = require('./private/keys').CLIENT_SECRET;
const REDIRECT_URI = "https://localhost:3000/callback"

app.get('/', function(req, res) {
    res.send("Hello world!");
})

app.get('/login', function(req, res) {
    var state = generateRandomString(16);

    var auth_query_parameters = {      
        response_type: 'code',
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        state: state
    };

    res.redirect("https://accounts.spotify.com/authorize?" +
        auth_query_parameters.toString());
})

app.get('/callback', function(req, res) {
    const code = req.queury.code;
    console.log(code)
    
})

app.listen(port, () => console.log(`Server running on port ${port}`));
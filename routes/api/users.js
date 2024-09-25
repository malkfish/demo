const express = require('express');
const router = express.Router();

const CLIENT_ID = require('../../private/keys').CLIENT_ID;
const CLIENT_SECRET = require('../../private/keys').CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3000/callback"

router.get('/login', function(req, res) {
    //var state = generateRandomString(16);
    console.log("Reached login page.")
    console.log("Test")

    var auth_query_parameters = new URLSearchParams({   
        client_id: CLIENT_ID,   
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        //state: state
    });

    console.log(auth_query_parameters)

    res.redirect("https://accounts.spotify.com/authorize?" +
        auth_query_parameters.toString()
    );
})

router.get('/callback', async function(req, res) {
    const code = req.query.code || null;
    //var state = req.query.state || null;

    console.log("Reached callback.")
    console.log("Code: "+code)
    //console.log(state)

    var body = new URLSearchParams({
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      });
    
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "post",
        body: body,
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        },
    });
    
    const data = await response.json();
    global.access_token = data.access_token;
    
    res.redirect("/profile");
})

async function getData(endpoint) {
    const response = await fetch("https://api.spotify.com/v1" + endpoint, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + global.access_token,
      },
    });
  
    const data = await response.json();
    return data;
  }

router.get('/dashboard', async function(req, res) {
    const myData = await getData("/me");

    console.log(myData);
    res.send("Dashboard reached.")
})

module.exports = router;

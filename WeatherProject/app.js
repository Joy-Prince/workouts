const express = require("express");
const { json } = require("express/lib/response");

const https = require("https");

const app = express();

const port = 3000;

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=india&appid=251cb5895b33cbe48cb505598640fd86&units=metric";
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on('data', function(data){
            const weatherdata = JSON.parse(data);
            // console.log(weatherdata);
            const temp = weatherdata.main.temp;
            const weatherdescriptions = weatherdata.weather[0].description;
            
            console.log(temp, weatherdescriptions);

        })
    });

    res.send("Server is running on port " + port);
})



app.listen(port, function(){
    console.log("listening on port " + port);
})
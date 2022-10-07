var express = require('express');
var app = express();
var request = require('request');
var pug = require('pug')
var cred = require('../cred.js')
const port = 1337;
apikey = cred.apikey;

console.log(apikey);

app.set('view engine','pug');
app.get('/apod',(req, res)=>{
  request('https://api.nasa.gov/planetary/apod'+'?api_key='+cred.apikey, (err, body)=>{
    var json = JSON.parse(body['body'])
    console.log(json) 
    res.render('index',{ruta:json['url'], titulo_imagen:json['title'],descripcion:json['explanation'],autor:json['copyright']})
    // res.render('index',{ruta:json['hdurl'], titulo_imagen:json['title'],descripcion:json['explanation'],autor:json['copyright']})
  } )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
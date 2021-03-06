// Requiring express in our server
var cors = require('cors')


const express = require('express');
const app = express();
var jsonfile = require('jsonfile');    
var file = './db.json'
var filex = require('./db.json')
app.engine('html', require('ejs').renderFile);

app.use(cors())

const http = require('http');
const port = process.env.PORT || 3000

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.set('view engine', 'html')
// Defining get request at '/' route
app.get('/', function(req, res) {

    res.send("<html><head><title>Json</title></head><body><form id='form1' action='/gettingdata' method='post'><input type='text' name='usrid' /><button type='submit' form='form1' value='Submit'>Submit</button></form></body></html>")
});
app.post('/gettingdata',function(req,res){
    
    var user_id = req.body.usrid;
    
    var obj = JSON.parse(user_id)
    jsonfile.writeFileSync(file, obj,{flag: 'w'});
    res.send('updated');

})
app.post('/api',function(req,res){
    res.send(require('./db.json'))
	delete require.cache[require.resolve('./db.json')]
})
app.get('/api',function(req,res){
    res.send(require('./db.json'))
	delete require.cache[require.resolve('./db.json')]

})

//extra

app.post('/api/v1/users/initial_authentication',function(req,res){
    res.send(require('./db.json'))
	delete require.cache[require.resolve('./db.json')]
})
app.get('/api/v1/users/initial_authentication',function(req,res){
    res.send(require('./db.json'))
	delete require.cache[require.resolve('./db.json')]
})




app.post('/api/v1/users/initial_authentication/*',function(req,res){
    res.send(require('./db.json'))
	delete require.cache[require.resolve('./db.json')]
})
app.get('/api/v1/users/initial_authentication/*',function(req,res){
    res.send(require('./db.json'))
	delete require.cache[require.resolve('./db.json')]
})

// if(user_id){
//     var user= user_id
// }
// app.post('/api',function(req,res,user){
//     res.send(user)
// })
// Defining get request at '/multiple' route

// Defining get request at '/array' route


// Setting the server to listen at port 3000
app.listen(port, function(req, res) {
console.log("Server is running at port 3000");
});

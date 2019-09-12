// Import express
let express  = require('express')

let bodyParser = require('body-parser')

let mongoose  = require('mongoose');


// initialize the app
let app  = express();

let apiRoutes = require('./api-routes')

// configure bodyparse to handle post requests
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub',{
    useNewUrlParser:true
});

var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

//setup server
var port = process.env.PORT || 5555

app.use('/api',apiRoutes)

app.get('/',(req,res) => res.send('how are you ') );

app.listen(port,function(){
    console.log("running resthub on port " + port);
});
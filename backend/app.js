const express = require('express');
const app = express();
const mysql  = require('mysql');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// DB con
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
db.connect(function(err) {
    
    console.log("Connected");

})

    app.get('/app',(req, res) => {
        
        db.query("SELECT * FROM mytable", function(err, result) {
        if(err) throw err;
        console.log("Success");
    })
})



 
db.end();

// PORT
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    console.log("Hello there");
    res.send("Hemant")
})


// My Routes
app.use("/api", authRoutes);


// Middlewares
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());

// Routes



// STARTING SERVER
app.listen(port, () => {
    console.log(`App listening at ${port}`)
});


const express = require('express');
const app = express();

// DB Connection
var mysql  = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected"); 
});

// var sql = "INSERT INTO mytable VALUES ('Hemant', 123456789)";

//     connection.query(sql, function(err, result) {
//         if(err) throw err;
//         console.log("Inserted");
//     });

    app.get('/app',(req, res) => {
        
        connection.query("SELECT * FROM mytable", function(err, result) {
        if(err) throw err;
        console.log("Success");
        
        
        
        // if(result[0].name == "Hemnt")
        // {console.log("Success")}
        // else{
        //     console.log("fail");
        // }
        console.log("error");
        res.send("hi")

    })
})


 
connection.end();

// PORT
const port = 5000;

app.get('/', (req, res) => {
    console.log("Hello there");
    res.send("Hemant")
})

// Middlewares


// Routes



// STARTING SERVER
app.listen(port, () => {
    console.log(`App listening at ${port}`)
});


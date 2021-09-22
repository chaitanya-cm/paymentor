const express = require('express');
const app = express();

// DB Connection



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


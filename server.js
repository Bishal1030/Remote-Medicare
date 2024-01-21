const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/route');


const PORT = process.env.PORT || 5000;


// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);



app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/route');
const mongoose = require("mongoose");


URI = "mongodb+srv://admin:xOSFpM1ApR1WkcrV@cluster0.fbwnubt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const PORT = process.env.PORT || 5000;

const connectDb = async () => {
    try {
      const connect = await mongoose.connect(URI);
      console.log("Database connected: ", 
      connect.connection.host,
      connect.connection.name
      );
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

connectDb()


// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);



app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});

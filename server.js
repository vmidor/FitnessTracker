const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose")


const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout17", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
app.use(require("./routes/html_routes.js"))
app.use(require("./routes/api_routes.js"))
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://workout17:<wa1ww7slIFkNY8aq>@cluster0.bhwqy.mongodb.net/workoutdb?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
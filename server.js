const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose")


const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);
app.use(require("./routes/html_routes.js"))
app.use(require("./routes/api_routes.js"))
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})
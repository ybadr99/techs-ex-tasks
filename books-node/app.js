const path = require("path");
const express = require("express");

const app = express();

//set template engine ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

//body-parser.
app.use(express.urlencoded({ extended: true }));
//static files
app.use(express.static(path.join(__dirname, "./public")));

// import router
const booksRoutes = require("./routes/router");

// assign middleware
app.use(booksRoutes);

// serve
app.listen(3002, () => console.log("listening on http://localhost:3002/"));

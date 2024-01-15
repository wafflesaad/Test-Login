const express = require("express");
const app = express();
const path = require("path");
const port = 80;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res)=>{
    res.render("main");
});

app.get("/details", (req,res)=>{
res.render("")
});

//git remote add origin https://github.com/wafflesaad/Test-Login.git

// git config --global user.email "isaadibrahim2005@gmail.com"
//   git config --global user.name "Your Name"

app.listen(PORT,()=>{
    console.log("App running on port " + port);
});
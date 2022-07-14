const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.send("First Request")
});


app.get("/users",(req,res) => {
    res.send("Here are your users")
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
})
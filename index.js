const express = require("express");

const app = express();

app.use(express.static('public'))

console.log(new Date().toString());

app.get("/serverDateTime",(req,res) => {
    res.json({dateTime: new Date().toString()});
})

app.listen(3000, () => console.log("3000 Listen"));
const express = require('express');
const path = require("path")

const app = express()
app.use(express.static('public'))


function getPagePath(page){
    return path.join(__dirname + "/" + page)
}
app.get('/', (req, res)=>{
    let pagePath = getPagePath("index.html");
    return res.sendFile(pagePath);
})


app.listen("3000", ()=>{
    console.log("I'm listening... 3000")
})
const express = require(`express`)
const app = express()
require(`dotenv`).config()
const PORT = process.env.PORT

app.get(`/`, (req, res)=>{
    console.log(`Hello from the main path!`)
    res.send(`Welcome to the main path.`)
})

app.listen(PORT, ()=> console.log(`Server  is running in port ${PORT}`))


module.exports = app;

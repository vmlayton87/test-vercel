// const express = require(`express`)
// const app = express

// app.get(`/`, (req, res)=>{
//     console.log(`Hello from the main path!`)
//     res.send(`Welcome to the main path.`)
// })

// app.listen(process.env.PORT, ()=> console.log(`page is up and running`))


// need to configure dotenv for above 

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(3000)

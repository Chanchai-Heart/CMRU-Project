const express = require('express')
const sequelize = require('./database/connDB')
const { createUser } = require('./controller/user.controller')


const app = express()
const port = 3000

app.get("/",(req, res) =>{
    res.send("Hello From Backend👌")
})

app.post("/createuser", createUser)


app.listen(port, async() => {
  await sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }).catch((err) => {
    console.error('Unable to connect to the database:', err);
  })
  console.log(`Example app listening on port ${port}`)
})
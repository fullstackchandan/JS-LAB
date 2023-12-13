const express = require('express')
const app = express()
const port = 3001

app.get('/route23', (req, res) => {
  res.send('NH23 - Ranchi to Mumbai')
})

app.get('/route44', (req, res) => {
    res.send('NH4 4 - Jammu to Kanykumari')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
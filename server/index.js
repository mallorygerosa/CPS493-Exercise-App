const express = require('express')
const app = express()
const port = 3000

app
.get('/', (req, res) => {
  res.send('Fitness tracker app')
})
.get('/newpaltz', (req, res) => {
    res.send('Here it is')    
})

app.listen(port, () => {
  console.log(`Running here: http://localhost:${port}`)
})
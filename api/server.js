const express = require('express')
const compression = require('compression')
const { spawn } = require('child_process')

const app = express()
app.use(compression())

app.get('*', (req, res) => {
  const process = spawn('node', ['dist/ssr/index.js'])
  process.stdout.on('data', (data) => {
    res.send(data.toString())
  })
})

app.listen(process.env.PORT || 3000)

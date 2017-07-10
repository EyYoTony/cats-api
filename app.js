const express = require('express')
const app = express()
const dal = require('./dal.js')
const port = process.env.PORT || 4000

//  C - create (POST) a single cat
//  R - read (GET)  a single cat
//  U - update (PUT) a single cat
//  D - delete (DELETE) a single cat
//  L - list (GET) all the cats

//   CREATE  - POST /cats
//   READ -    GET /cats/:id
//   UPDATE -  PUT /cats/:id
//   DELETE -  DELETE /cats/:id
//   LIST   -  GET /cats

app.get('/cats', (req, res, next) => {
  res.send('Welcome to cats (and hotdogs) API')
})

app.use(function(err, req, res, next) {
  console.log(req.method + ' ' + req.path + ' ' + err)
  res.status(err.status || 500)
  res.send(err)
})

app.listen(port, () => console.log('API Runnn on port: ', port))

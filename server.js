var path = require('path')
var express = require('express')
var app = express()
var fragmentModuleOne = express()
var fragmentModuleTwo = express()
var fragmentModuleThree = express()

app.use('/', express.static(path.join(__dirname,'app','build')))
fragmentModuleOne.use('/', express.static(path.join(__dirname,'fragment-module-one','build')))
fragmentModuleTwo.use('/', express.static(path.join(__dirname,'fragment-module-two','build')))
fragmentModuleThree.use('/', express.static(path.join(__dirname,'fragment-module-three','build')))

app.use('/fragment/module-one', fragmentModuleOne);
app.use('/fragment/module-two', fragmentModuleTwo);
app.use('/fragment/module-three', fragmentModuleThree);

app.get('/microservice/app', function(req, res) {
    console.log(req.url)
    res.json({})
})

app.get('/microservice/module-one/:id', function(req, res) {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    res.json({})
})

app.get('/microservice/module-two/:name', function(req, res) {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    res.json({})
})

app.get('/microservice/module-three/:id/:field', function(req, res) {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    res.json({})
})

app.listen(9090, function(){
    console.log("Server Started on port 9090");
})
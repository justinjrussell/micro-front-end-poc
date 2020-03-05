var path = require('path')
var express = require('express')
var opn = require('better-opn')
var app = express()
var fragmentModuleOne = express()
var fragmentModuleTwo = express()
var fragmentModuleThree = express()

app.use('/', express.static(path.join(__dirname,'packages','app','build')))
fragmentModuleOne.use('/', express.static(path.join(__dirname,'packages','fragment-module-one','build')))
fragmentModuleTwo.use('/', express.static(path.join(__dirname,'packages','fragment-module-two','build')))
fragmentModuleThree.use('/', express.static(path.join(__dirname,'packages','fragment-module-three','build')))

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

const PORT = process.env.PORT || 9090 

app.listen(PORT, function(){
    console.log(`Server Started on port ${PORT}`);
    opn(`http://localhost:${PORT}`)
})
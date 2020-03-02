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

app.listen(9090, function(){
    console.log("Server Started on port 9090");
})

var express = require('express');
var sql = require('./sql.js');
var app = express();

app.use('/', express.static('public_static'));

app.get('/todos/add', function(req, res){
    var obj = req.query.todo;
    console.log(JSON.parse(obj));
    sql.addTask(JSON.parse(obj), function(data){
        console.log(data);
        res.send(data);
    });

})

app.get('/todos/updateDone', function(req, res){
    var obj = req.query.obj;
    console.log(JSON.parse(obj));
    sql.updateDone(JSON.parse(obj));
    res.send("Done updated");
});

app.get('/todos/showcase', function(req, res){
    sql.showcase(function(data){
        console.log(data);
        res.send(data);
    });
});

app.get('/todos/reset', function(req, res){
    sql.resetFunction();
    res.send('');
});

app.get('/todos/deleteElement', function(req, res){
    var id = req.query.todo;
    console.log(id);
    sql.deletefn(id, function(data){
        console.log(data);
        res.send(data);
    });
});

app.get('/todos/reorder', function(req, res) {
    sql.reorder(function(data){
        // console.log(data);
        res.send(data);
    });
});

app.listen(5000 || process.env.port, function(response, err){
    if(err){throw err;}
    console.log("Server is running on port 5000");
});

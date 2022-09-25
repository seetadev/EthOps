var mysql = require('mysql');

var dbconfig = {
    host: 'localhost',
    user: '\'dipesh\'',
    password: 'password',
    database: 'newdb'
};

function addTask(obj, cb){
    var connection = mysql.createConnection(dbconfig);
    console.log("SQLDB for addTask is running");
    connection.connect();
    connection.query('INSERT INTO todos (id,task,priority,done) values (' + obj.id + ',"' + obj.task + '",' + obj.priority + ',0)', function(err, rows, fields){
        if(err){throw err;}
        console.log(rows);
        // cb(rows);
        connection.query('SELECT * FROM todos', function(err, rows, fields){
            if(err){throw err;}
            cb(rows);
        })
    });
}

function updateDone(obj){
    var connection = mysql.createConnection(dbconfig);
    console.log("SQLDB for updating done is running");
    connection.connect();
    connection.query('UPDATE todos SET done=' + obj.bool + ' where id=' + obj.id, function(err, rows, fields){
        if(err){throw err;}
    });
}

function showcase(cb){
    var connection = mysql.createConnection(dbconfig);
    console.log("SQLDB for showing list is running");
    connection.connect();
    connection.query('SELECT * FROM todos', function(err, rows, fields){
        if(err){throw err;}
        cb(rows);
    });
}

function resetFunction(){
    var connection = mysql.createConnection(dbconfig);
    console.log("SQLDB for clearing list is running");
    connection.connect();
    connection.query('DELETE FROM todos', function(err, rows, fields){
        if(err){throw err;}
    });
}

function deletefn(id, cb){
    var connection = mysql.createConnection(dbconfig);
    console.log("SQLDB for deleting element is running");
    connection.connect();
    connection.query('DELETE FROM todos where id=' + id, function(err, rows, fields){
        if(err){throw err;}

        connection.query('UPDATE todos SET id=id-1 where id>' + id, function(err, rows, fields){
            if(err){throw err;}

            connection.query('SELECT * FROM todos', function(err, rows, fields){
                if(err){throw err;}
                cb(rows);

            });
        });
    });
}

function reorder(cb){
    var connection = mysql.createConnection(dbconfig);
    console.log("SQLDB for reordering elements is running");
    connection.connect();
    connection.query('SELECT * FROM todos ORDER BY priority', function(err, rows, fields) {
        if(err){throw err;}
        cb(rows);
    });
}

module.exports = {
    addTask: addTask,
    updateDone: updateDone,
    showcase: showcase,
    resetFunction: resetFunction,
    deletefn: deletefn,
    reorder: reorder
}

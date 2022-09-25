
var btn = $("#button");
var task = $("#taskAdded");
var myScreen = $("#displayTask");
var myForm = document.forms.myForm;
var priority;
var reset = $("#reset");
var noOfElements = -1;
var reorder = $("#reorder");

$(function(){

    $.get({url:'todos/showcase', success: function(todoList){
        var cont = '';
        for (var i = 0; i < todoList.length; i++) {
            noOfElements++;
            console.log(todoList[i].task);
            var priority = todoList[i].priority;
            cont += '<div' + ' style="background-color:' + getColor(priority) + '"' + '>' +
            ' <input ' +
                    (todoList[i].done? "checked": "" )  +
                 ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                   todoList[i].task + '">' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+i+')"></i>' + '</br>'
              + '</div>';

         }
         myScreen.html(cont);
         console.log(noOfElements);
    }});

    btn.click(function(){
        var value = task.val();
        console.log(value);
        priority = myForm.priority.value;
        if(priority == 0){window.alert("Please Select Priority"); return;}
        else if(value == "") {
            window.alert("Please add some Task");
            return;
        }
        //increment noOfElements
        noOfElements++;

        var obj = JSON.stringify({id: noOfElements, task: value, priority: priority});
        task.val('');

        $.get({url: 'todos/add?todo=' + obj, success: function(todoList){
            var cont = '';
            for (var i = 0; i < todoList.length; i++) {
                // console.log(i);
                // console.log(todoList[i].task);
                var priority = todoList[i].priority;
                cont += '<div' + ' style="background-color:' + getColor(priority) + '"' + '>' +
                ' <input ' +
                        (todoList[i].done? "checked": "" )  +
                     ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                       todoList[i].task + '">' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+i+')"></i>' + '</br>'
                  + '</div>';

             }
             myScreen.html(cont);
             console.log(noOfElements);
        }});
    });

    reset.click(function(){
        if(confirm('Are you sure you want to delete this List?')) {
            $.get({url: 'todos/reset', success:function(){
                myScreen.html('');
                noOfElements = -1;
            }});
        } else {
            // Do nothing!
        }

    });

    reorder.click(function(){
        $.get({url: 'todos/reorder', success: function(todoList){
            var cont = '';
            for (var i = 0; i < todoList.length; i++) {
                // console.log(i);
                // console.log(todoList[i].task);
                var priority = todoList[i].priority;
                cont += '<div' + ' style="background-color:' + getColor(priority) + '"' + '>' +
                ' <input ' +
                        (todoList[i].done? "checked": "" )  +
                     ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                       todoList[i].task + '">' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+i+')"></i>' + '</br>'
                  + '</div>';

             }
             myScreen.html(cont);
        }});
    });
});

function deletefn(id){
    console.log(id);
    $.get({url: 'todos/deleteElement?todo=' + id, success: function(todoList){
        var cont = '';
        for (var i = 0; i < todoList.length; i++) {
            // console.log(i);
            // console.log(todoList[i].task);
            var priority = todoList[i].priority;
            cont += '<div' + ' style="background-color:' + getColor(priority) + '"' + '>' +
            ' <input ' +
                    (todoList[i].done? "checked": "" )  +
                 ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                   todoList[i].task + '" >' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+ i + ')"></i>' + '</br>'
              + '</div>';

         }
         myScreen.html(cont);
    }});
}

function setDone(el){
    var bool = el.checked;
    if(bool === true){bool = 1;}
    else{bool = 0;}
    console.log(bool);
    var obj = JSON.stringify({bool: bool, "id": el.id});
    $.get('todos/updateDone?obj='+ obj, function(response){

    });
}

function  getColor(priority) {
    var myColor;
    if(priority === 1){
        myColor = "#E91E63";
    }
    else if(priority === 2) {
        myColor = "#03A9F4";
    }
    else{
        myColor = "#27ae60";
    }
    return myColor;
}


var todoList = JSON.parse(localStorage.getItem('todo'));

if (todoList == null) {
    todoList = [];
    localStorage.setItem('todo', JSON.stringify(todoList));
}

var deletedTasks = JSON.parse(localStorage.getItem('deleted'));
if(deletedTasks === null){
    deletedTasks = [];
    localStorage.setItem('deleted', JSON.stringify(deletedTasks));
}

window.onload = function() {
    var taskAdded = document.getElementById('taskAdded');
    var btn = document.getElementById('button');
    var myScreen = document.getElementById('displayTask');
    var myForm = document.forms.myForm;
    var deleted = document.getElementById('dustbin');
    var check = document.getElementById('check');
    var show = document.getElementById('show');
    var deleteStatement = document.getElementById('deleteStatement');
    var reorder = document.getElementById('reorder');
    var reset = document.getElementById('reset');
    console.log(myForm);

    var priority;

    refreshList();

    btn.onclick = function (){
        var value = taskAdded.value;
        priority = myForm.priority.value;
        if(value=='' && priority==0){return;}
        else if(value != '' && priority==0){
            alert('Please Select Priority');
            return;
        }
        else if(value == '' && priority != 0){
            alert('Add Some Text in Task Section');
            return;
        }


        // console.log(priority);
        var obj = {
            "task": value,
            "done": false,
            "priority": parseInt(priority)
        };
        taskAdded.value = '';

        todoList.push(obj);
        localStorage.setItem('todo', JSON.stringify(todoList));
        myScreen.innerHTML = '';
        refreshList();
    };

    deleted.onclick = function() {
        deletedList();

        deleted.style.display = "none";
        check.style.display = "inline";
        deleteStatement.style.display = "none";
        show.style.display = "inline";
    }

    function deletedList() {
        deletedTasks = JSON.parse(localStorage.getItem('deleted'));
        var cont = '';
        for (var i = 0; i < deletedTasks.length; i++) {
            var priority = deletedTasks[i].priority;
            cont += '<div' + ' style="background-color:'+ getColor(priority) + '"' + '>' + '<span>'+ deletedTasks[i].task + '</span>'+ '</div>'
        }
        myScreen.innerHTML = cont;

    }

    check.onclick = function() {
        refreshList();

        deleted.style.display = "inline";
        check.style.display = "none";
        deleteStatement.style.display = "inline";
        show.style.display = "none";
    };

    /*not working*/
    reorder.onclick = function(){
        todoList = JSON.parse(localStorage.getItem('todo'));
        console.log(todoList);
        todoList.sort(function(a, b){
            return (a.priority-b.priority);
        });
        localStorage.setItem('todo', JSON.stringify(todoList));
        refreshList();
    };

    reset.onclick = function() {
        if (confirm('Are you sure you want to delete this List?')) {
            todoList = [];
            deletedTasks = [];
            localStorage.setItem('todo', JSON.stringify(todoList));
            localStorage.setItem('deleted', JSON.stringify(deletedTasks));
            refreshList();
        } else {
            // Do nothing!
        }
    }

    function refreshList() {
        todoList = JSON.parse(localStorage.getItem('todo'));
        var cont = '';

        for (var i = 0; i < todoList.length; i++) {
            console.log(todoList[i].task);
            var priority = todoList[i].priority;
            cont += '<div' + ' style="background-color:'+ getColor(priority) + '"' + '>' +
            ' <input ' +
                    (todoList[i].done? "checked": "" )  +
                 ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                   todoList[i].task + '" id='+'change' + i + ' >' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn(document.getElementById('+i+'))"></i>' + '</br>'
              + '</div>';
            /*
            DOUBT POOCH LENA
              var forChange = document.getElementById('change'+ i);
              console.log(forChange);
            console.log('change'+i);
            //agar text change kr dia to original array mein task change
            */
        }
        myScreen.innerHTML = cont;
    };

    taskAdded.addEventListener("keypress", function(){
        if(event.keyCode == 13){
            btn.click();
        }
    });
    window.main = refreshList;
}


function setDone(el){
    todoList[el.id].done = el.checked;
    // console.log(todoList[el.id].priority);
    localStorage.setItem('todo', JSON.stringify(todoList));
}

function deletefn(el){
    var obj = todoList[el.id];
    console.log(obj);
    deletedTasks.push(obj);
    localStorage.setItem('deleted', JSON.stringify(deletedTasks));
    todoList.splice(el.id, 1);
    localStorage.setItem('todo', JSON.stringify(todoList));
    setTimeout(function(){}, 4000);
    window.main();
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

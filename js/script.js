let addmessage = document.querySelector('.message'),
    addbutton = document.querySelector('.add');
    todo = document.querySelector('.todo');

let todolist = [];

if(localStorage.getItem('todo')){
    todolist = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
addbutton.addEventListener('click', function(){
    if(!addmessage.value) return;

    let newtodo = {
        todo: addmessage.value,
        checked: false,
        important: false
    };

    todolist.push(newtodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todolist));
    addmessage.value = '';

});
function displayMessages(){
    let displayMessage = '';
    if(todolist.length === 0) todo.innerHTML = '';
    todolist.forEach(function(item, i){
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}' class="${item.important ? 'important' : ''}">${item.todo}</label>
        </li>
        `;
        todo.innerHTML = displayMessage;
    });
}
todo.addEventListener('change', function(event){
    let valuelabel = todo.querySelector('[for='+ event.target.getAttribute('id') +']').innerHTML; 

    todolist.forEach(function(item){
        if(item.todo === valueLabel){
            item.checked = !item.checked
            localStorage. setItem('todo', JSON.stringify(todolist));
        }
    });
});
todo.addEventListener('contextmenu', function(event){
    event.preventDefault();
    todolist.forEach(function(item, i){
        if(item.todo === event.target.innerHTML){
          if(event.ctrlKey || event.metakey){
            todolist.splice(i, 1);
          }else{
            item.important = !item.important;
          }
          displayMessages();
          localStorage. setItem('todo', JSON.stringify(todolist));
        }
    });
  });
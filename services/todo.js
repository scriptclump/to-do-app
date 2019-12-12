const FS = require('fs')

addTodo = (title, body) => {
    console.log('add function');
}

editTodo = (title, body) => {
    console.log('edit function');
}

deleteTodo = (title) => {
    console.log('delete function');
}

viewTodo = (title) => {
    console.log('view function');
}

loadTodo = (title, body) => {
    console.log('load function');
}

module.exports = {
    addTodo: addTodo,
    editTodo: editTodo,
    viewTodo: viewTodo,
    deleteTodo: deleteTodo
}
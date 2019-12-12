const FS = require('fs')
const CHALK = require('chalk')

addTodo = (title, body) => {
    const TODO = loadTodo()
    let duplicateTodo = TODO.find( (todo) => todo.title === title)
    if(!duplicateTodo){
        TODO.push({
            'title': title,
            'body': body
        })
        saveTodo(TODO)
        console.log(CHALK.green.inverse('To-do created successfully'))
    } else{
        console.log(CHALK.blue.inverse('This to-do is already created !'))
    }
}

editTodo = (title, body) => {
    const TODO = loadTodo()
    TODO.find( (todo) => {
        if(todo.title === title){
            todo.body = body
        }
    })
    saveTodo(TODO)
    console.log(CHALK.green.inverse('To-do edited successfully'))
}

deleteTodo = (title) => {
    const TODO = loadTodo()
    const TODO_TOKEEP = TODO.filter( (todo) => todo.title !== title )
    if( TODO.length > TODO_TOKEEP.length){
        saveTodo(TODO_TOKEEP)
        console.log(CHALK.green.inverse('To-do deleted successfully'))
    } else{
        console.log(CHALK.red.inverse('To-do not found !'))
    }
}

listTodo = (title) => {
    const TODO = loadTodo()
    if(TODO.length >0 ){
        console.log(CHALK.green.inverse('Following items are in TO DO list:'))
        TODO.forEach(todo => {            
            console.log('Task: %s  | Detail: %s', todo.title, todo.body)
        });
    }
}


loadTodo = () => {
    try{
       let dataBuffer = FS.readFileSync('./mock-data/todo.json')
       data = dataBuffer.toString()
       return JSON.parse(data)
    }catch(e){
        return []
    }
}

saveTodo = (todo) => {
    let todoJSON = JSON.stringify(todo)
    FS.writeFileSync('./mock-data/todo.json', todoJSON)
}

module.exports = {
    addTodo: addTodo,
    editTodo: editTodo,
    deleteTodo: deleteTodo,
    listTodo: listTodo
}
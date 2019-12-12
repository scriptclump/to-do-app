const FS = require('fs');
const YARGS = require('yargs');
const TODO = require('./services/todo');


YARGS.command({
    command: 'add',
    describe: 'Add a new TO-DO',
    builder: {
        title: {
            describe: 'TO-DO title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'TO-DO body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        TODO.addTodo(argv.title, argv.body)
    }
})

YARGS.command({
    command: 'edit',
    describe: 'Edit the TO-DO',
    builder: {
        title: {
            describe: 'TO-DO title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'TO-DO body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        TODO.editTodo(argv.title, argv.body)
    }
})

YARGS.command({
    command: 'delete',
    describe: 'Delete TO-DO',
    builder: {
        title: {
            describe: 'TO-DO title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        TODO.deleteTodo(argv.title)
    }
})

YARGS.command({
    command: 'showall',
    describe: 'list all TO-DO',    
    handler() {
        TODO.listTodo()
    }
})

YARGS.parse();
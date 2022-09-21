// const { endPoint } = require("./logger")

// function sayHello (name)
// {
//     console.log ('Hello '+ name + '!')
// }

// sayHello ("Jacub")

// Window + document objects are not defined as in Javascript
// console.log (window)

// global objects
// console.log ()
// setTimeout () 
// clearTimeout ()
// setInterval ()
// clearInterval ()

// var message = ''
// global.console.log ()

// message is not defined in global scope global.message

// console.log (module)

// const logger = require ('./logger')
// console.log (logger)
// logger.log ('hello jacub!')

// const path = require ('path')

// console.log (path.parse (__filename))

// const os = require ('os')

// var totalMemory = os.totalmem ()
// var freeMemory = os.freemem ()

// // Template string
// console.log (`Total Memory: ${totalMemory}`)
// console.log (`Free Memory: ${freeMemory}`)

// const fs = require ("fs")

// const files = fs.readdirSync ('./')

// console.log (files)

// fs.readdir ('./', function (err, files){
//     if (err) console.log ('Error', err);
//     else console.log ('Result', files)
// })

// // this is a class
// const EventEmitter = require ('events')
// // const emitter = new EventEmitter ()


// const Logger = require ('./logger')
// const logger = new Logger ()

// // Register a listener
// logger.on ('messageLogged', (arg) =>
// {
//     console.log ('Listener called', arg)
// })

// logger.log ('message')

const http = require ('http')

const server = http.createServer ((req, res) =>
{
    if (req.url === '/')
    {
        res.write ('Hello world')
        res.end ()
    }

    if (req.url === '/api/courses')
    {
        res.write (JSON.stringify ([1,2,3]))
        res.end ()
    }
})

server.on ('connection', (socket) =>
{
    console.log ('New connection...')
})

server.listen (3000)

console.log ('Listening on port 3000...')

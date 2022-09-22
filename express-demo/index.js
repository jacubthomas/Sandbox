const Joi = require ('joi')
const express = require ('express')
const req = require('express/lib/request')
const app = express ()

app.use (express.json ())

// app.get ()
// app.put ()
// app.post ()
// app.delete ()


const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" }
]

app.get ('/', (req, res) =>
{
    res.send ('Hello world')
})

app.get ('/api/courses', (req, res) => {
    res.send (courses)
})

// app.get ('/api/courses/:id', (req, res) => {
//     res.send (req.params.id)
// })

// in url: http://localhost:8000/api/posts/2022/9
app.get ('/api/posts/:year/:month', (req, res) => {
    res.send (req.params)
})

// in url: http://localhost:8000/api/posts/2022/9?sortBy=name
app.get ('/api/posts/:year/:month', (req, res) => {
    res.send (req.query)
})

app.get ('/api/posts', (req, res) => {
    res.send (req.query)
})

app.get ('/api/courses/:id', (req, res) => 
{
    const course = courses.find (c => c.id === parseInt (req.params.id))
    if (!course) // 404
        res.status (404).send ('The course with the given ID was not found')
    else res.send (course)
})

app.post ('/api/courses', (req, res) => 
{   
    // Validate
    // const result = validateCourse (req.body)
    
    // object destructuring
    const { error } = validateCourse (req.body)
    
    // console.log (result)
    // send error response
    if (error) // 400 Bad Request
        return res.status (400).send (error.details[0].message)

    const course = 
    {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push (course)
    res.send (course)
})

app.put ('/api/courses/:id', (req, res) => 
{
    // Look up the course
    // If not existing, return 404
    const course = courses.find (c => c.id === parseInt (req.params.id))
    if (!course)
        return res.status (404).send ('The course with the given ID was not found')

    // Validate
    // const result = validateCourse (req.body)
    
    // object destructuring
    const { error } = validateCourse (req.body)
    
    // console.log (result)
    // send error response
    if (error) // 400 Bad Request
        return res.status (400).send (error.details[0].message)

    // Update course
    course.name = req.body.name

    // Return the updated course
    res.send (course)
})

function validateCourse (course)
{
    // what is the shape of our object? define here for Joi input validation
    const schema =  Joi.object({
        name: Joi.string ()
            .min (3)
            .required ()
    })
    return schema.validate (course)
}



app.delete ('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find (c => c.id === parseInt (req.params.id))
    if (!course)
        return res.status (404).send ('The course with the given ID was not found')

    // Delete course
    const index = courses.indexOf (course)
    courses.splice (index, 1)

    // Return the same course
    res.send (course)

})

// PORT - ENVIRONMENT VARIABLE, value set outside application
// to set EV, in terminal `export PORT=8000`
const port = process.env.PORT || 3000
app.listen (port, () =>{ console.log (`Listening on port ${port}...`) })

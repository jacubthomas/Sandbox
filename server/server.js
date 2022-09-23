const express = require ('express')
const app = express ()

const cars = { "cars": ["Model S", "Model X", "Model 3", "Model Y"] }

app.get ("/api", (req, res) => {
    res.status (200).json (cars)
})

const port = process.env.PORT || 8000

app.listen (port, () => { console.log (`Server started on ${port}`)})
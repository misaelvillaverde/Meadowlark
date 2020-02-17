const express = require('express')

const app = express()

const port = process.env.PORT || 5500

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About Meadowlark Travel')
    // res.status(200) is default
})

// custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 -')
})

app.listen(port, () => console.log(
    `Express server started at http://localhost:${port} ` +
    'press Ctrl-C to terminate....'
))

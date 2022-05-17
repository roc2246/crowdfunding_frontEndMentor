const express = require('express')
const app = express()

app.use(express.json())

app.get('', (req, res) => {
    res.render('index', {
        title: 'Crowdfunding',
    })
})

module.exports = app
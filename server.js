const express = require('express')
const hbs = require('hbs');
require('./hbs/helpers');


const app = express()

app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'pedRo'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})


let port = process.env.PORT;

app.listen(port, () => console.log(`Corriendo en puerto ${port}.`))
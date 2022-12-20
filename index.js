const http = require('http');
const hbs = require('hbs');
require('dotenv').config();

const express = require('express');
const app = express();

const route_parciales = 'views/partials'
const port = process.env.PORT; //process.env.PORT cuando el puerto es dinamico
const route_pages = '/web_test/templated-roadtrip'

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/${route_parciales}`, (err) => { });

//Servir contenido estático
app.use(express.static('web_test/templated-roadtrip'));


//Routing
// app.get('/', (req, res) => {
//     res.send('Mi servidor online');
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Leo Silva',
        titulo: 'Node Js Course'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Leo Silva',
        titulo: 'Node Js Course'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Leo Silva',
        titulo: 'Node Js Course'
    });
});

// app.get('/index', (req, res) => {
//     res.sendFile(`${__dirname}${route_pages}/index.html`);
// });

// app.get('/generic', (req, res) => {
//     res.sendFile(`${__dirname}${route_pages}/generic.html`);
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(`${__dirname}${route_pages}/elements.html`);
// });

//Ruta no encontrada
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});

//Puerto Listen
app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});


























































